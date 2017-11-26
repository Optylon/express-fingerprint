import 'babel-polyfill'

import { expect } from 'chai'
import sinon from 'sinon'
import middleware from '../src'

console.log(middleware)

describe('my middleware', function() {

  describe('request handler creation', function() {
    var mw

    beforeEach(function() {
      mw = middleware(/./)
    })

    it('should return a function()', function() {
      expect(mw).to.be.a.Function
    })

    it('should accept three arguments', function() {
      expect(mw.length).to.equal(3)
    })
  })

  describe('request handler calling', function() {
    it('should call next() once', function() {
      var mw      = middleware(/./)
      var nextSpy = sinon.spy()

      mw({}, {}, nextSpy)
      expect(nextSpy.calledOnce).to.be.true
    })
  })

})
