let computerCounter = document.getElementById('computer-counter')
let myCounter = document.getElementById('you-counter')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let resultDisplay = document.getElementById('result-display')
let endResult = document.getElementById('end-result')
let resultBlock = document.getElementById('result-block')
let computerIncrement = 0
let myIncrement = 0
let restartBtn = document.getElementById('restart')

function getRandomInt(max) {
    return Math.floor(Math.random() * 3)
}

let computerChoice = getRandomInt(3)


function rocks() {
    let randomizer = getRandomInt(3)
    if (randomizer === 0) {
        let message = "That was a draw!🤪"
        resultDisplay.textContent = message
    } else if (randomizer === 1) {
        let message = "Computer won this round😭"
        resultDisplay.textContent = message
        computerIncrement++
        computerCounter.textContent = computerIncrement
    } else if (randomizer === 2) {
        let message = "Yayy, You've won this round😎"
        resultDisplay.textContent = message
        myIncrement++
        myCounter.textContent = myIncrement
    }
    if (myIncrement >= 10 && computerIncrement <= 10) {
        message = "You won the Game!🎉"
        endResult.textContent = message
        myIncrement = 0
        computerIncrement = 0
        computerCounter.textContent = computerIncrement
        myCounter.textContent = myIncrement
    }
    else if (computerIncrement >= 10 && myIncrement <= 10) {
        message = "Sad, the computer won😪"
        endResult.textContent = message
        myIncrement = 0
        computerIncrement = 0
        computerCounter.textContent = computerIncrement
        myCounter.textContent = myIncrement
    }
    else if (myIncrement == 0 && computerIncrement == 0) {
        message = ""
        endResult.textContent = message
    }
}

function papers() {
    let randomizer = getRandomInt(3)
    if (randomizer === 0) {
        let message = "Wohoo!, You won again😁"
        resultDisplay.textContent = message
        myIncrement++
        myCounter.textContent = myIncrement
    } else if (randomizer === 1) {
        let message = "We have a tie😅"
        resultDisplay.textContent = message
    } else if (randomizer === 2) {
        let message = "You lost that round😬"
        resultDisplay.textContent = message
        computerIncrement++
        computerCounter.textContent = computerIncrement
    }
    if (myIncrement >= 10 && computerIncrement <= 10) {
        message = "You won the Game!🎉"
        endResult.textContent = message
        myIncrement = 0
        computerIncrement = 0
        computerCounter.textContent = computerIncrement
        myCounter.textContent = myIncrement
    }
    else if (computerIncrement >= 10 && myIncrement <= 10) {
        message = "Sad, the computer won😪"
        endResult.textContent = message
        myIncrement = 0
        computerIncrement = 0
        computerCounter.textContent = computerIncrement
        myCounter.textContent = myIncrement
    }
    else if (myIncrement == 0 && computerIncrement == 0) {
        message = ""
        endResult.textContent = message
    }
}

function scissorss() {
    let randomizer = getRandomInt(3)
    if (randomizer === 0) {
        let message = "Omo, try again🤣"
        resultDisplay.textContent = message
        computerIncrement++
        computerCounter.textContent = computerIncrement
    } else if (randomizer === 1) {
        let message = "Oporr, Na you oo!🙌🏾"
        resultDisplay.textContent = message
        myIncrement++
        myCounter.textContent = myIncrement
    } else if (randomizer === 2) {
        let message = "That was a draw!🤪"
        resultDisplay.textContent = message
    }
    if (myIncrement >= 10 && computerIncrement <= 10) {
        message = "You won the Game!🎉"
        endResult.textContent = message
        myIncrement = 0
        computerIncrement = 0
        computerCounter.textContent = computerIncrement
        myCounter.textContent = myIncrement
    }
    else if (computerIncrement >= 10 && myIncrement <= 10) {
        message = "Sad, the computer won😪"
        endResult.textContent = message
        myIncrement = 0
        computerIncrement = 0
        computerCounter.textContent = computerIncrement
        myCounter.textContent = myIncrement
    }
    else if (myIncrement == 0 && computerIncrement == 0) {
        message = ""
        endResult.textContent = message
    }
}

function restartgame() {
    myIncrement = 0
    computerIncrement = 0
    computerCounter.textContent = computerIncrement
    myCounter.textContent = myIncrement
    message = ""
    endResult.textContent = message
}
