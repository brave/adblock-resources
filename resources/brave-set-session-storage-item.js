/// - `key` - required, key name to be set.
/// - `value` - required, key value; possible values:
///     - positive decimal integer `<= 32767`
///     - one of the predefined constants:
///         - `undefined`
///         - `false`
///         - `true`
///         - `null`
///         - `emptyObj` - empty object
///         - `emptyArr` - empty array
///         - `''` - empty string
///         - `yes`
///         - `no`
(function () {
    const arg1 = '{{1}}'
    const arg2 = '{{2}}'
    if (arg1 === '' || arg1 === '{{1}}' || arg2 === '{{2}}') {
      throw new Error(`Invalid arguments: name=${arg1}, value=${arg2}`)
    }
    const key = arg1
    const value = arg2
    const getLimitedStorageItemValue = value => {
      if (!value) {
        throw new Error('Invalid empty storage value')
      }
      switch (value) {
        case 'undefined':
          return undefined
        case 'false':
          return false
        case 'true':
          return true
        case 'null':
          return null
        case 'emptyArr':
          return '[]'
        case 'emptyObj':
          return '{}'
        case 'yes':
        case 'no':
          return value
        case '':
          return ''
      }
      if (/^\d+$/.test(value)) {
        const numericValue = parseFloat(value)
        if (isNaN(numericValue)) {
          throw new Error(`Invalid storage item value: ${value}`)
        }
        if (Math.abs(numericValue) > 0x7FFF) {
          throw new Error(`Invalid storage item value: ${value}`)
        }
        return numericValue
      }
      throw new Error(`Invalid storage item value: ${value}`)
    }
    try {
      const safeValue = getLimitedStorageItemValue(value)
      window.sessionStorage[key] = safeValue
    } catch (e) {
      throw new Error(`Unable to apply set-session-storage-item scriptlet: ${e}`)
    }
})();
