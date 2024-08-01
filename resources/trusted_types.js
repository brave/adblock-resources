/// set-trusted-types.js
function setTrustedTypes() {
  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    window.trustedTypes.createPolicy("default", {
      createScript: string => string
    });
   }
   runAt(() => {}, 'interactive');
}
