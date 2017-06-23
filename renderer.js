// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
myWV.addEventListener('dom-ready', () => {
  console.log('ready')

  myWV.addEventListener('will-navigate', onWVStateChange)
  myWV.addEventListener('did-navigate-in-page', onWVStateChange)
  myWV.addEventListener('did-start-loading', onWVStateChange)
  myWV.addEventListener('did-stop-loading', onWVStateChange)
  myWV.addEventListener('load-commit', onWVStateChange)
  myWV.addEventListener('did-get-redirect-request', onWVStateChange)
  myWV.addEventListener('did-get-response-details', onWVStateChange)
  myWV.addEventListener('did-finish-load', onWVStateChange)
  myWV.addEventListener('did-fail-load', onWVStateChange)
})

backBtn.addEventListener('click', e => myWV.goBack())
forwardBtn.addEventListener('click', e => myWV.goForward())

function onWVStateChange (e) {
  // update the back/forward buttons
  if (myWV.canGoBack()) {
    backBtn.removeAttribute('disabled')
    backBtn.textContent = 'GO BACK'
  } else {
    backBtn.setAttribute('disabled', 'disabled')
    backBtn.textContent = 'CANT GO BACK'
  }
  if (myWV.canGoForward()) {
    forwardBtn.removeAttribute('disabled')
    forwardBtn.textContent = 'GO FORWARD'
  } else {
    forwardBtn.setAttribute('disabled', 'disabled')
    forwardBtn.textContent = 'CANT GO FORWARD'
  }
}
