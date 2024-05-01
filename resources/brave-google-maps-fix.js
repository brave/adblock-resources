// Fix for https://github.com/brave/brave-browser/issues/37075
(() => {
  if (location.pathname.startsWith("/maps/") || location.pathname === "/maps") {
    Object.defineProperty(WebGLShaderPrecisionFormat.prototype, 'precision', {
      value: 0,
      writable: false
    });
  }
})();
