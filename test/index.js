/**
 * Imports
 */

var raf = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.plan(1)
  raf(function () {
    t.pass()
    t.end()
  })
})
