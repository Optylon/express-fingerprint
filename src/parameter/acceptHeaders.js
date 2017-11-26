export default (req) => {
  return {
    acceptHeaders:{
      accept:req.headers['accept'],
      language:req.headers['accept-language']
    }
  }
}
