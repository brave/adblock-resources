/// brave-fix.js
/// alias bf.js
delete Navigator.prototype.brave
delete window.navigator.brave

const brands = navigator?.userAgentData?.brands;
if (brands) {
  brands.forEach((item) => {
    if (item?.brand?.toLowerCase() === "brave") {
      item.brand = "Google Chrome";
    }
  })
  Object.defineProperty(NavigatorUAData.prototype, "brands", { value: brands });
}
