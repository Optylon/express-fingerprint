import useragent from 'useragent'

export default (req) => {
  const agent = useragent.parse(req.headers['user-agent'])
  return {
    useragent: {
      browser:{
        family:agent.family,
        version:agent.major
      },
      device:{
        family:agent.device.family,
        version:agent.device.major
      },
      os: {
        family:agent.os.family,
        major:agent.os.major,
        minor:agent.os.minor
      }
    }
  }
}

