function clock() {
  let hour = document.getElementById('hour')
  let minute = document.getElementById('minute')
  let second = document.getElementById('second')
  let secondHand = document.querySelector('[data-second-hand]')
  let toggleAmPm = document.getElementById('modulator')

  hour.innerHTML = new Date().getHours()
  minute.innerHTML = new Date().getMinutes()
  second.innerHTML = new Date().getSeconds()

  if (second.innerHTML % 2) {
    secondHand.style.opacity = "1"
  } else {
    secondHand.style.opacity = "0.2"
  }

  if(hour.innerHTML > 0 && hour.innerHTML < 12) {
    toggleAmPm.innerHTML = "am"
  } else {
    toggleAmPm.innerHTML = "pm"
  }

  getZeros(second)
  getZeros(minute)
  getZeros(hour)
}
setInterval(clock, 1000);

function getZeros(items) {
  if(items.innerHTML < 10) {
    return items.innerHTML = `0${items.innerHTML}`
  }
  return items.innerHTML
}
