function startPuzzle(time) {
  startTimer(time, 'no')
  startBeeping(1, 0, 'on')
}

startPuzzle(10)


function startTimer(timerStartNum, ifGranted) {
  if (timerStartNum > 0 && ifGranted === 'no') {
 timer = document.querySelector('.timerNum')
  timer.innerHTML = timerStartNum;
  let timerId = setTimeout(() => {
    startTimer(timerStartNum --- 1, checkIfGranted())
  }, 1000)} else if (ifGranted === 'no') {
  timer.innerHTML = '<p class="failText">ACCESS DENIED</p>'
  timer.classList.add('off')
  } else {
    timer.innerHTML = '<p class="grantedText">ACCESS GRANTED</p>'
  timer.classList.add('off')
  } }




function startBeeping(num, previousNum, timerStatus, hackedLamps) {
  let range = num + 1
  let beepingSpeed = 200;
  if (hackedLamps === 2) {
    range = num + Math.floor(Math.random() * 6) + 1;
    beepingSpeed = 650;
  }
  if (previousNum > 0) {
  let currentPreviousNum = document.querySelector(`.lamp${previousNum}`)
  currentPreviousNum.classList.remove('lampOn')}
  if (num < 9 && timerStatus === 'on') {
  let currentNum = document.querySelector(`.lamp${num}`)
  currentNum.classList.add('lampOn')
  setTimeout(() => {
    console.log(num)
    startBeeping(range, previousNum = num, checkTimerStatus(), checkHackedCountity())
  }, beepingSpeed);} else if (timerStatus === 'on') {startBeeping(1, 0, 'on', checkHackedCountity())}
}


function checkTimerStatus() {
  let timer = document.querySelector('.timerNum')
  if (timer.classList.contains('off')) {
return 'off'
  } else {return 'on'}
}


let granted = 0;

function chekClick(num) {
  let lamp = document.querySelector(`.lamp${num}`)
  if (lamp.classList.contains('lampOn')) {
    lamp.classList.remove('lampOn')
    lamp.classList.add('lampHacked')
    granted++;
  }

}

function checkIfGranted() {
  if (granted === 8) {
    return "yes"
  } else {
  return "no"
  }}


  function checkHackedCountity() {
    let hackedLamps = granted;
    return hackedLamps
  }