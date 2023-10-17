(function() {
  const LS = window.localStorage;
  const sevenDaysOfMs = 1000 * 60 * 60 * 24 * 7;
  const storageKey = 'brave::yt-warning';
  const dialogLastSeenInMs = LS[storageKey];
  const sevenDaysAgoInMs = Date.now() - sevenDaysOfMs;

  // If we've shown the dialog in the last 7 days, don't display it again.
  if (
    dialogLastSeenInMs !== undefined &&
    sevenDaysAgoInMs > dialogLastSeenInMs
  ) {
    return;
  }

  const dialog = document.createElement('dialog');
  const dialogInner = document.createElement('div');

  const closeDialog = _ => {
    if (dialog.close !== undefined) {
      dialog.close();
      return;
    }

    dialog.parentElement.removeChild(dialog)
  }

  const xButton = document.createElement('button');
  xButton.textContent = 'x';
  xButton.style =
    'border-radius:30px; width: 30px; height: 30px; border: none; padding:10px; box-sizing: content-box; font-size:large; font-family:sans-serif; cursor: pointer; color: #687485; display: block; background: none; position: absolute; right: 15px; top: 10px;';
  xButton.addEventListener('click', () => {
    LS[storageKey] = Date.now();
    closeDialog()
  });
  dialogInner.appendChild(xButton);

  dialogInner.insertAdjacentHTML(
    'beforeend',
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="150"><path fill="#FBBC04" fill-rule="evenodd" d="M14.508 4.449c-1.114-1.932-3.902-1.932-5.017 0l-7.1 12.306c-1.113 1.93.28 4.343 2.51 4.343H19.1c2.229 0 3.622-2.412 2.508-4.343l-7.1-12.306ZM12 8.15a.77.77 0 0 1 .77.77v3.846a.77.77 0 0 1-1.54 0V8.92a.77.77 0 0 1 .77-.77Zm1.1 7.946a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" clip-rule="evenodd"/></svg><div style="margin-top:16px; font-weight:bold; font-size:large; font-family:sans-serif; color: #0d0f14;">Brave has temporarily disabled ad blocking on YouTube</div>'
  );

  dialogInner.insertAdjacentHTML(
    'beforeend',
    '<div style="margin-top:28px; font-size:large; font-family:sans-serif; color: #0d0f14;"><p style="padding: 0; margin: 0 0 28px;">Google is blocking content playback for users with ad blockers enabled. To ensure you can still use the site, we\'ve temporarily disabled Brave\'s YouTube ad blocking. We\'re working on a solution, and will release it as soon as possible.</p></div>'
  );

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Ok';
  closeButton.style =
    'margin-top:25px; width:100%; border-radius:30px; border: none; padding:10px; font-size:large; font-family:sans-serif; background: #3f39e8; cursor: pointer; color: #ffffff;';
  closeButton.autofocus = true;
  closeButton.addEventListener('click', () => {
    LS[storageKey] = Date.now();
    closeDialog()
  });
  dialogInner.appendChild(closeButton);

  dialogInner.style =
    'text-align:center; width: 100%; max-width: 450px; margin: 0 auto; background: #ffffff; border: none; border-radius: 8px; box-shadow: 0px 0px 22px 0px rgba(0,0,0,0.3); -webkit-box-shadow: 0px 0px 22px 0px rgba(0,0,0,0.3); -moz-box-shadow: 0px 0px 22px 0px rgba(0,0,0,0.3); padding: 30px 36px 48px; box-sizing: border-box; position: relative;';

  dialog.style =
    'background: rgba(13, 15, 20, 0.35); backdrop-filter: blur(10px); width: 100%; height: 100%; position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 100000; padding: 5vh 10px; box-sizing: border-box; margin: 0; overflow-y: auto;';

  dialog.setAttribute('open', 'open');
  dialog.appendChild(dialogInner);

  document.body.appendChild(dialog);
})();
