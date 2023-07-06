(async _ => {
    if (self.cookieStore === undefined) {
        // do nothing on iOS. The problem doesn't exist there, and the
        // solution wouldn't work anyway
        return
    }
    const storeKey = 'brave::wide'
    const cookieKey = 'wide'
    if (localStorage[storeKey] !== undefined) {
        await cookieStore.set(cookieKey, localStorage[storeKey])
    }
    setInterval(async _ => {
        try {
            const wideCookie = await cookieStore(cookieKey)
            localStorage[storeKey] = wideCookie.value
        } catch () {
            // swallow error from no cookie existing
        }
    }, 1000)
})();
