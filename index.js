function moveDodgerLeft() {
  const dodger = document.getElementById('dodger')
  let left = parseInt(dodger.style.left) || 0
  if (left > 0) {
    dodger.style.left = `${left - 5}px`
  }
}

function moveDodgerRight() {
  const dodger = document.getElementById('dodger')
  let left = parseInt(dodger.style.left) || 0
  if (left < 360) {
    dodger.style.left = `${left + 5}px`
  }
}
