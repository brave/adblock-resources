(async _ => {
  if (self.cookieStore === undefined) {
    // Do nothing on iOS. The problem doesn't exist there, and the
    // solution wouldn't work anyway
    return
  }
  const storeKey = 'brave::wide'
  const cookieKey = 'wide'
  // If we have a localStorage value, set it as a cookie.
  if (localStorage[storeKey] !== undefined) {
    await cookieStore.set(cookieKey, localStorage[storeKey])
  }
  // Persist the cookie value to localStorage every second.
  setInterval(async _ => {
    try {
      const wideCookie = await cookieStore.get(cookieKey)
      localStorage[storeKey] = wideCookie
    } catch (e) {
      // swallow error from no cookie existing
    }
  }, 1000)
})();
