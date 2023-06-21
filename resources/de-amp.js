(function () {
  if (typeof deAmpEnabled !== 'undefined' && deAmpEnabled) {
    const attr = 'jsaction'
    const selector = `a[data-amp-title][${attr}]`
    let timer
    const idleCallback = (_ => {
      if (self.requestIdleCallback) {
        return (callback, timeout) => {
          return self.requestIdleCallback(callback, { timeout })
        }
      }

      // Fallback to setTimeout when requestIdleCallback doesn't exist.
      return (callback) => {
        return self.setTimeout(callback, 0)
      }
    })()
    const rmattr = () => {
      timer = undefined
      try {
        const nodes = document.querySelectorAll(selector)
        for (const node of nodes) {
          node.removeAttribute(attr)
        }
      } catch (ex) { }
    }
    const mutationHandler = (mutations) => {
      if (timer !== undefined) {
        return
      }
      let skip = true
      for (let i = 0; i < mutations.length && skip; i++) {
        const { type, addedNodes, removedNodes } = mutations[i]
        if (type === 'attributes') {
          skip = false
        }
        for (let j = 0; j < addedNodes.length && skip; j++) {
          if (addedNodes[j].nodeType === 1) {
            skip = false
            break
          }
        }
        for (let j = 0; j < removedNodes.length && skip; j++) {
          if (removedNodes[j].nodeType === 1) {
            skip = false
            break
          }
        }
      }
      if (skip) {
        return
      }

      timer = idleCallback(rmattr, 17)
    }

    const start = () => {
      rmattr()
      const observer = new MutationObserver(mutationHandler)
      observer.observe(document, {
        attributes: true,
        attributeFilter: [attr],
        childList: true,
        subtree: true
      })
    }

    self.addEventListener('DOMContentLoaded', start, { once: true })
  }
})();
