(_ => {
  const origPerfNow = window.performance.now;
  let previous = 0;

  window.performance.now = function () {
    let current = origPerfNow.apply(this);
    if (current <= previous) {
      current = previous + Number.EPSILON * 100000;
    }

    return previous = current;
  }
})();
