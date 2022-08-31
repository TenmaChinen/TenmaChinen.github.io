
let snackbarTimer = null;

document.querySelector("head").innerHTML += `<link rel="stylesheet" href="components/snackbar/snackbar.css">`

function hideSnackbar() {
  snackbar.className = snackbar.className.replace("show", "");
  snackbar.style.animation = 'none';
  snackbar.offsetHeight; /* trigger reflow */
  snackbar.style.animation = null;
  snackbarTimer = null;
}

function getSnackbar() {
  const snackbar = document.getElementById("snackbar");
  // showSnackbar();
  return snackbar;
}

function showSnackbar(message) {
  if (snackbarTimer != null) {
    clearTimeout(snackbarTimer);
    hideSnackbar();
  }
  snackbar.innerHTML = message;
  snackbar.className = "show";
  snackbarTimer = setTimeout(hideSnackbar, 3000);
}