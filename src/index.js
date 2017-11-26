import murmurhash3js from 'murmurhash3js'
import traverse from 'traverse'

import useragent from './parameters/useragent'
import acceptHeaders from './parameters/acceptHeaders'
import geoip from './parameters/geoip'

const { hash128 } = murmurhash3js[process.arch]

export default (setting) => {

  const config = {
    parameters: [
      useragent,
      acceptHeaders,
      geoip
    ],
    ...setting
  }

  return async (req, res, next) => {

    const components = {}
    const fingerprint = { hash: null }

    try {

      // process each parameters
      for(let fn of config.parameters) {
        const obj = await fn(req)
        for(let key of Object.keys(obj)) {
          components[key] = obj[key]
        }
      }

      // calculate hash
      const leaves = traverse(components).reduce((acc, x) => {
        if(this.isLeaf) acc.push(x)
        return acc
      }, [])
      fingerprint.hash = hash128(leaves.join('~~~'))
      fingerprint.components = components // debug

      req.fingerprint = fingerprint
      next()

    } catch(err) {
      next(err)
    }
  }
}
