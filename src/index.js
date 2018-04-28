import murmurhash3js from 'murmurhash3js'
import * as parameter from './parameter'
import { set, get } from 'lodash'

const { hash128 } = murmurhash3js[process.arch]

export { parameter }

export default (setting) => {

  const config = {
    parameter: [
      parameter.userAgent,
      parameter.acceptHeaders,
      parameter.geoip
    ],
    keys: [
      'useragent.browser.family',
      'useragent.browser.version',
      'useragent.device.family',
      'useragent.device.version',
      'useragent.os.family',
      'useragent.os.major',
      'useragent.os.minor',
      'acceptHeaders.accept',
      'acceptHeaders.language',
      'geoip.country'
    ],
    ...setting
  }

  return (req, res, next) => {

    const components = {}
    const fingerprint = { hash: null }

    try {

      // process each parameters
      for(let fn of config.parameter) {
        const obj = fn(req)
        for(let key of Object.keys(obj)) {
          components[key] = obj[key]
        }
      }

      const filtered = {}
      // calculate hash
      const leaves = config.keys.reduce((acc, key) => {
        const value = get(components, key)
        acc.push(value)
        set(filtered, key, value)
        return acc
      }, [])
      fingerprint.hash = hash128(leaves.join('~~~'))
      fingerprint.components = filtered

      req.fingerprint = fingerprint
      next()

    } catch(err) {
      next(err)
    }
  }
}
