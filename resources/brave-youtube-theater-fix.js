(async _ => {
  if (self.cookieStore === undefined) {
    // Do nothing on iOS. The problem doesn't exist there, and the
    // solution wouldn't work anyway
    return
  }
  const storeKey = 'brave::wide'
  const cookieKey = 'wide'

  const wideCookie = await cookieStore.get(cookieKey)
  const wideCookieBackup = localStorage.getItem(storeKey)

  // Set the cookie from localStorage iff: 
  // 1) it doesn't already exist.
  // 2) we have a backup in localStorage.
  if (!wideCookie && wideCookieBackup) {
    // The cookie object is stored as a string. Parse it.
    const cookieObj = JSON.parse(wideCookieBackup)
    await cookieStore.set(cookieObj)
    // Refresh the page to make YT use the new cookie.
    location.reload()
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
})();
