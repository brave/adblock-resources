(async _ => {
  if (self.cookieStore === undefined) {
    // Do nothing on iOS. The problem doesn't exist there, and the
    // solution wouldn't work anyway
    return
  }
  const storeKey = 'brave::wide'
  const cookieKey = 'wide'
  // If we have a localStorage value, set it as a cookie.
  if (localStorage.getItem(storeKey) !== null) {
    // The cookie object is stored as a string. Parse it.
    const cookieObj = JSON.parse(localStorage.getItem(storeKey))
    await cookieStore.set(cookieObj)
  }

  // Persist the cookie value to localStorage every second.
  setInterval(async _ => {
    try {
      const wideCookie = await cookieStore.get(cookieKey)
      // We have to stringify the cookie object to store it in localStorage.
      if (wideCookie) {
        localStorage.setItem(storeKey, JSON.stringify(wideCookie))
      } else {
        localStorage.removeItem(storeKey)
      }
    } catch (e) {
      // swallow error from no cookie existing
    }
  }, 1000)
})()
