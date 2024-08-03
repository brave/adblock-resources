/// set-trusted-types.js

{function runAt(fn, when) {...}

function safeSelf() {...}

(function setTrustedTypes() {
  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    window.trustedTypes.createPolicy("default", {
      createScript: string => string
    });
   }
   runAt(() => {}, 'interactive');
}());
}
