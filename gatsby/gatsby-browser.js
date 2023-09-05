exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm("Open Source Updated")
  if (answer === true) {
    window.location.reload()
  }
}
