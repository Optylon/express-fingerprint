# Fingerprint express middleware

https://w3c.github.io/fingerprinting-guidance/#bib-NDSS-FINGERPRINTING
> Passive fingerprinting is browser fingerprinting based on characteristics observable in the contents of Web requests, without the use of any code executing on the client side.
>
> Passive fingerprinting would trivially include cookies (often unique identifiers sent in HTTP requests) and the set of HTTP request headers and the IP address and other network-level information. The User-Agent string, for example, is an HTTP request header that typically identifies the browser, renderer, version and operating system. For some populations, the user agent string and IP address will commonly uniquely identify a particular user's browser.

Default implementation is `Never trust clients`, So collect only server-side information.
But you can push additional parameter with initialization config.

### TODO

Implement this:
http://research.microsoft.com/pubs/156901/ndss2012.pdf

### Installation

```
npm install express-fingerprint
```
### Usage

#### As a Express middleware

Use with default parameters.

```javascript
import Fingerprint, { parameter } from 'express-fingerprint'

app.use(Fingerprint())
```

You can specify your own parameter.

```javascript

app.use(Fingerprint({
  parameter: [
    // Defaults
    parameter.userAgent,
    parameter.acceptHeaders,
    parameter.geoip,

    // Additional parameters
    (req) => {
      // do sync something...
      return {
        param1:'value1'
      }
    },
    async (req) => {
      // do async something...
      const data = await asyncFunc()
      return {
        data
      }
    }
  ]
}))

app.get('*', (req,res,next) => {
  // Fingerprint object
  console.log(req.fingerprint)
})
```

req.fingerprint object is like below.

```javascript
{
  "hash": "bd767932c289b92b4de510f4c4d48246",
  "components": {
    "useragent": {
      "browser": {
        "family": "Chrome",
        "version": "50"
      },
      "device": {
        "family": "Other",
        "version": "0"
      },
      "os": {
        "family": "Mac OS",
        "major": "10",
        "minor":"11"
    },
    "acceptHeaders": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "encoding": "gzip, deflate, sdch",
      "language": "en-US,en;q=0.8"
    },
    "geoip": {
      "country": "US",
      "resion": "CA",
      "city": "San Francisco"
    },
    "param1": "value1",
    "param2": "value2"
  }
}
```

### List of fingerprinting sources

* User Agent
* HTTP_ACCEPT Headers
* GEO-ip

#### License

MIT

#### Author

Yusuke Shibata
