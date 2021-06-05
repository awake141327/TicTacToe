const button1 = document.querySelector(".button-1")
const button2 = document.querySelector(".button-2")
const button3 = document.querySelector(".button-3")
const button4 = document.querySelector(".button-4")
const button5 = document.querySelector(".button-5")
const button6 = document.querySelector(".button-6")
const button7 = document.querySelector(".button-7")
const button8 = document.querySelector(".button-8")
const button9 = document.querySelector(".button-9")
const turnText = document.querySelector(".turnText")
const board = document.querySelector(".board-container")
const start = document.getElementById('start')
const reset = document.getElementById('reset')
let player1Turn = true
let b1Choice = ''
let b2Choice = ''
let b3Choice = ''
let b4Choice = ''
let b5Choice = ''
let b6Choice = ''
let b7Choice = ''
let b8Choice = ''
let b9Choice = ''



 function startGame() {
   turnText.textContent = "Player One(X) Turn"
   board.style.display = 'block'
   start.style.display = 'none'
 }

function resetGame() {
  player1Turn = true;
  turnText.textContent = "Player One(X) Turn"

  button1.innerHTML = ''
  button2.innerHTML = ''
  button3.innerHTML = ''
  button4.innerHTML = ''
  button5.innerHTML = ''
  button6.innerHTML = ''
  button7.innerHTML = ''
  button8.innerHTML = ''
  button9.innerHTML = ''

  b1Choice = ''
  b2Choice = ''
  b3Choice = ''
  b4Choice = ''
  b5Choice = ''
  b6Choice = ''
  b7Choice = ''
  b8Choice = ''
  b9Choice = ''

  button1.disabled = false
  button2.disabled = false
  button3.disabled = false
  button4.disabled = false
  button5.disabled = false
  button6.disabled = false
  button7.disabled = false
  button8.disabled = false
  button9.disabled = false
}

  function buttonOne() {
    if (player1Turn === true) {
      player1Turn = false;
      button1.innerHTML = `<img src="images/cross.png">`
      turnText.textContent = "Player Two(O) Turn"
      button1.disabled = true;
      b1Choice = 'x'
    } else if (player1Turn === false) {
      player1Turn = true;
      button1.innerHTML = `<img src="images/circle.png">`
      turnText.textContent = "Player One(X) Turn"
      button1.disabled = true;
      b1Choice = 'o'
    }
    gameLogic()
  }

  function buttonTwo() {
    if (player1Turn === true) {
      player1Turn = false;
      button2.innerHTML = `<img src="images/cross.png">`
      turnText.textContent = "Player Two(O) Turn"
      button2.disabled = true;
      b2Choice = 'x'
    } else if (player1Turn === false) {
      player1Turn = true;
      button2.innerHTML = `<img src="images/circle.png">`
      turnText.textContent = "Player One(X) Turn"
      button2.disabled = true;
      b2Choice = 'o'
    }
    gameLogic()
  }

  function buttonThree() {
    if (player1Turn === true) {
      player1Turn = false;
      button3.innerHTML = `<img  src="images/cross.png">`
      turnText.textContent = "Player Two(O) Turn"
      button3.disabled = true;
      b3Choice = 'x'
    } else if (player1Turn === false) {
      player1Turn = true;
      button3.innerHTML = `<img src="images/circle.png">`
      turnText.textContent = "Player One(X) Turn"
      button3.disabled = true;
      b3Choice = 'o'
    }
    gameLogic()
  }

  function buttonFour() {
    if (player1Turn === true) {
      player1Turn = false;
      button4.innerHTML = `<img src="images/cross.png">`
      turnText.textContent = "Player Two(O) Turn"
      button4.disabled = true;
      b4Choice = 'x'
    } else if (player1Turn === false) {
      player1Turn = true;
      button4.innerHTML = `<img src="images/circle.png">`
      turnText.textContent = "Player One(X) Turn"
      button4.disabled = true;
      b4Choice = 'o'
    }
    gameLogic()
  }

  function buttonFive() {
    if (player1Turn === true) {
      player1Turn = false;
      button5.innerHTML = `<img src="images/cross.png">`
      turnText.textContent = "Player Two(O) Turn"
      button5.disabled = true;
      b5Choice = 'x'
    } else if (player1Turn === false) {
      player1Turn = true;
      button5.innerHTML = `<img src="images/circle.png">`
      turnText.textContent = "Player One(X) Turn"
      button5.disabled = true;
      b5Choice = 'o'
    }
    gameLogic()
  }

  function buttonSix() {
    if (player1Turn === true) {
      player1Turn = false;
      button6.innerHTML = `<img src="images/cross.png">`
      turnText.textContent = "Player Two(O) Turn"
      button6.disabled = true;
      b6Choice = 'x'
    } else if (player1Turn === false) {
      player1Turn = true;
      button6.innerHTML = `<img src="images/circle.png">`
      turnText.textContent = "Player One(X) Turn"
      button6.disabled = true;
      b6Choice = 'o'
    }
    gameLogic()
  }

  function buttonSeven() {
    if (player1Turn === true) {
      player1Turn = false;
      button7.innerHTML = `<img src="images/cross.png">`
      turnText.textContent = "Player Two(O) Turn"
      button7.disabled = true;
      b7Choice = 'x'
    } else if (player1Turn === false) {
      player1Turn = true;
      button7.innerHTML = `<img src="images/circle.png">`
      turnText.textContent = "Player One(X) Turn"
      button7.disabled = true;
      b7Choice = 'o'
    }
    gameLogic()
  }

  function buttonEight() {
    if (player1Turn === true) {
      player1Turn = false;
      button8.innerHTML = `<img src="images/cross.png">`
      turnText.textContent = "Player Two(O) Turn"
      button8.disabled = true;
      b8Choice = 'x'
    } else if (player1Turn === false) {
      player1Turn = true;
      button8.innerHTML = `<img src="images/circle.png">`
      turnText.textContent = "Player One(X) Turn"
      button8.disabled = true;
      b8Choice = 'o'
    }
    gameLogic()
  }

  function buttonNine() {
    if (player1Turn === true) {
      player1Turn = false;
      button9.innerHTML = `<img src="images/cross.png">`
      turnText.textContent = "Player Two(O) Turn"
      button9.disabled = true;
      b9Choice = 'x'
    } else if (player1Turn === false) {
      player1Turn = true;
      button9.innerHTML = `<img src="images/circle.png">`
      turnText.textContent = "Player One(X) Turn"
      button9.disabled = true;
      b9Choice = 'o'
    }
    gameLogic()
  }

function gameLogic() {
    if (
      (b1Choice==='x' && b2Choice==='x' && b3Choice==='x') ||
      (b1Choice==='x' && b4Choice==='x' && b7Choice==='x') ||
      (b1Choice==='x' && b5Choice==='x' && b9Choice==='x') ||
      (b2Choice==='x' && b5Choice==='x' && b8Choice==='x') ||
      (b3Choice==='x' && b5Choice==='x' && b7Choice==='x') ||
      (b3Choice==='x' && b6Choice==='x' && b9Choice==='x') ||
      (b4Choice==='x' && b5Choice==='x' && b6Choice==='x') ||
      (b7Choice==='x' && b8Choice==='x' && b9Choice==='x')
    ) {
      turnText.textContent = 'Player One Wins'
      button1.disabled = true
      button2.disabled = true
      button3.disabled = true
      button4.disabled = true
      button5.disabled = true
      button6.disabled = true
      button7.disabled = true
      button8.disabled = true
      button9.disabled = true
      reset.style.display = 'block'
    }
    else if (
        (b1Choice==='o' && b2Choice==='o' && b3Choice==='o') ||
        (b1Choice==='o' && b4Choice==='o' && b7Choice==='o') ||
        (b1Choice==='o' && b5Choice==='o' && b9Choice==='o') ||
        (b2Choice==='o' && b5Choice==='o' && b8Choice==='o') ||
        (b3Choice==='o' && b5Choice==='o' && b7Choice==='o') ||
        (b3Choice==='o' && b6Choice==='o' && b9Choice==='o') ||
        (b4Choice==='o' && b5Choice==='o' && b6Choice==='o') ||
        (b7Choice==='o' && b8Choice==='o' && b9Choice==='o')
      ) {
      turnText.textContent = "Player Two Wins"
      button1.disabled = true
      button2.disabled = true
      button3.disabled = true
      button4.disabled = true
      button5.disabled = true
      button6.disabled = true
      button7.disabled = true
      button8.disabled = true
      button9.disabled = true
      reset.style.display = 'block'
    } else if (
      (b1Choice==='x' || b1Choice==='o') &&
      (b2Choice==='x' || b2Choice==='o') &&
      (b3Choice==='x' || b3Choice==='o') &&
      (b4Choice==='x' || b4Choice==='o') &&
      (b5Choice==='x' || b5Choice==='o') &&
      (b6Choice==='x' || b6Choice==='o') &&
      (b7Choice==='x' || b7Choice==='o') &&
      (b8Choice==='x' || b8Choice==='o') &&
      (b9Choice==='x' || b9Choice==='o')
    ) {
      turnText.textContent = "It's A Tie"
      reset.style.display = 'block'
    }
  }
