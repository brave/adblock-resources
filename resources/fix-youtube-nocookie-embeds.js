(function () {
  const ytNoCookiePattern = /(https|http)?:\/\/(www\.)?youtube-nocookie/
  const fixYouTubeSrc = (elm) => {
    if (!elm.src || !elm.src.match(ytNoCookiePattern)) {
      return
    }
    elm.src.replace('youtube-nocookie.com', 'youtube.com')
  }

  const mutationHandler = (mutations) => {
    for (const aMutation of mutations) {
      const { target, attributeName } = aMutation
      if (attributeName !== 'src' || target.tagName !== 'IFRAME') {
        continue
      }
      fixYouTubeSrc(target)
    }
  }

  const start = () => {
    document
      .querySelectorAll('iframe[src*="youtube-nocookie.com"]')
      .forEach(fixYouTubeSrc)
    const observer = new MutationObserver(mutationHandler)
    observer.observe(document, {
      attributes: true,
      attributeFilter: ['src'],
      childList: true,
      subtree: true
    })
  }

  self.addEventListener('DOMContentLoaded', start, { once: true })
}());
