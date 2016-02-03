/**
 * Constants
 */

var rafInterval = 1000 / 60  // 60 frames per second

/**
 * Expose raf and cancel
 */

if (typeof window === 'undefined' || !window.requestAnimationFrame) {
  exports = module.exports = polyfill
  exports.cancel = clearTimeout
} else {
  exports = module.exports = requestAnimationFrame
  exports.cancel = cancelAnimationFrame
}

/**
 * Polyfill
 */

var prev = new Date().getTime()

function polyfill (fn) {
  var cur = new Date().getTime()
  var ms = Math.max(0, rafInterval - (cur - prev))
  prev = cur
  return setTimeout(fn, ms)
}
