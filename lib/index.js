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
  exports = module.exports = requestAnimationFrame.bind(window)
  exports.cancel = window.cancelAnimationFrame.bind(window)
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
