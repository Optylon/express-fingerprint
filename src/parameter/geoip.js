import geoip from 'geoip-lite'

export default req => {
  const geo = geoip.lookup(req.ip)
  return {
    geoip: {
      country: geo ? geo.country : null
    }
  }
}
