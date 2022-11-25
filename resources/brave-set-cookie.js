/// - `name` - required, cookie name to be set
/// - `value` - required, cookie value; possible values:
///     - number `>= 0 && <= 15`
///     - one of the predefined constants:
///         - `true` / `True`
///         - `false` / `False`
///         - `yes` / `Yes` / `Y`
///         - `no`
///         - `ok` / `OK`
/// - `path` - optional, cookie path, defaults to `/`; possible values:
///     - `/` — root path
///     - `none` — to set no path at all
(function () {
    const arg1 = '{{1}}'
    const arg2 = '{{2}}'
    const arg3 = '{{3}}'
    if (arg1 === '' || arg1 === '{{1}}' || arg2 === '{{2}}') {
      throw new Error('Invalid set-cookie scriptlet arguments: ' +
        `name=${arg1}, value=${arg2}`)
    }
    const cookieName = arg1
    const cookieValue = arg2
    const cookiePath = (arg3 === '{{3}}') ? '/' : arg3
    const getLimitedCookieValue = value => {
      if (!value) {
        throw new Error('Invalid empty cookie value')
      }
      const validConsts = new Set(['true', 'True', 'false', 'False', 'yes',
          'Yes', 'Y', 'no', 'ok', 'OK'])
      if (validConsts.has(value)) {
        return value
      }
      if (/^\d+$/.test(value)) {
        const floatVal = parseFloat(value)
        if (isNaN(floatVal)) {
          throw new Error(`Invalid cookie value: ${floatVal}`)
        }
        if (Math.abs(floatVal) < 0 || Math.abs(floatVal) > 15) {
          throw new Error(`Invalid cookie value: ${floatVal}`)
        }
        return floatVal
      }
      throw new Error(`Invalid cookie value: ${value}`)
    }
    const isValidCookieRawPath = (rawPath) => {
      return rawPath === '/' || rawPath === 'none'
    }
    const getCookiePath = (rawPath) => {
      return (rawPath === '/') ? 'path=/' : ''
    }
    const createCookieStr = (rawName, rawValue, rawPath) => {
      if (!isValidCookieRawPath(rawPath)) {
        throw new Error(`Invalid cookie path: ${rawPath}`)
      }
      return ''.concat(encodeURIComponent(rawName), '=')
        .concat(encodeURIComponent(rawValue), '; ')
        .concat(getCookiePath(rawPath))
    }
    const limitedCookieValue = getLimitedCookieValue(cookieValue)
    const cookieStr = createCookieStr(cookieName, limitedCookieValue, cookiePath)
    document.cookie = cookieStr
})();
