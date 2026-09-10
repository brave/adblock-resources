/* ============================================================================
 * brave-disable-hdr-images — clamp HDR images to SDR on a page
 * ============================================================================
 *
 * What it does
 * ------------
 *   1. Injects a page-wide CSSOM rule
 *      `* { dynamic-range-limit: standard !important; }` (CSSOM injection
 *      bypasses strict style-src CSP that blocks plain <style> text).
 *   2. Sets `dynamic-range-limit: standard !important` inline on <html>
 *      (the property is inherited, so CSS backgrounds/borders are covered).
 *   3. Watches for dynamically added <img>/<canvas>/<svg> elements
 *      (virtualized feeds like LinkedIn) and clamps each one inline.
 *
 * Effect
 * ------
 *   Gain-map / PQ / HLG images render at SDR headroom (0 stops above white)
 *   instead of the full display headroom. Protects against "brighter than
 *   white" HDR image abuse (see brave-browser#51224). Video is unaffected:
 *   dynamic-range-limit does not apply to <video>.
 *
 * Usage
 * -----
 *   linkedin.com##+js(brave-disable-hdr-images)
 *
 *   Works on any origin; scope it with the cosmetic filter host pattern.
 *
 * Verification
 * ------------
 *   getComputedStyle(document.querySelector('img')).dynamicRangeLimit
 *   -> "standard"
 * ============================================================================
 */

(() => {
  'use strict'

  const LIMIT = 'dynamic-range-limit'
  const VALUE = 'standard'

  // 1. Page-wide stylesheet via CSSOM: survives CSP style-src that blocks
  //    plain <style> textContent.
  const sheet = document.createElement('style')
  ;(document.head || document.documentElement).appendChild(sheet)
  try {
    sheet.sheet.insertRule(
      `* { ${LIMIT}: ${VALUE} !important; }`,
      0
    )
  } catch {
    // No stylesheet available yet; inline clamps below still cover elements.
  }

  // 2. Inherited clamp on the root (covers CSS backgrounds and borders).
  document.documentElement.style.setProperty(LIMIT, VALUE, 'important')

  // 3. MutationObserver for SPA / virtualized-feed content.
  const clamp = (el) => el.style.setProperty(LIMIT, VALUE, 'important')
  const scan = (node) => {
    if (node.nodeType !== Node.ELEMENT_NODE) return
    if (node.matches && node.matches('img, canvas, svg')) clamp(node)
    if (node.querySelectorAll) {
      node.querySelectorAll('img, canvas, svg').forEach(clamp)
    }
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) scan(node)
    }
  })
  observer.observe(document.documentElement, { childList: true, subtree: true })
  scan(document)
})()