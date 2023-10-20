(_ => {
  const prefix = '{{1}}'
  console.log('Deleting from localStorage:', prefix)
  Object.keys(localStorage)
  .filter(item =>
    item.startsWith(prefix))
  .forEach(item =>
    localStorage.removeItem(item))
})();
