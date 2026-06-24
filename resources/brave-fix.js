/// brave-fix.js
/// alias bf.js
delete Navigator.prototype.brave
delete navigator.prototype.brave
delete window.navigator.brave

const spoofBrands = (items) => {
  return items.map((item) => {
    if (item?.brand?.toLowerCase() === 'brave') {
      return { ...item, brand: 'Google Chrome' };
    }
    return item;
  });
};

const originalBrands = navigator?.userAgentData?.brands;
if (originalBrands) {
  const spoofedBrands = spoofBrands(originalBrands);
  Object.defineProperty(NavigatorUAData.prototype, 'brands', {
    value: spoofedBrands
  });
}

const originalGetHighEntropyValues =
  NavigatorUAData?.prototype?.getHighEntropyValues;

if (originalGetHighEntropyValues) {
  Object.defineProperty(NavigatorUAData.prototype, 'getHighEntropyValues', {
    value: async function getHighEntropyValues(hints) {
      const results = await originalGetHighEntropyValues.call(
        navigator.userAgentData,
        hints
      );
      for (const key of Object.keys(results)) {
        if (key === 'brands' || key === 'fullVersionList') {
          results[key] = spoofBrands(results[key]);
        }
      }
      return results;
    }
  });
}

Object.defineProperty(
  NavigatorUAData.prototype.getHighEntropyValues, 'toString', {
  value: () => 'function getHighEntropyValues() { [native code] }'
});
