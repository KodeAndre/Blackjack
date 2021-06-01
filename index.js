let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " | " + secondCard
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Stand or Draw another card?"
    } else if (sum === 21) {
        message = "You Win!"
        hasBlackjack = true
    } else {
        message = "You Lose!"
        isAlive = false
    }
    console.log("Blackjack: " + hasBlackjack)
    console.log("Alive: " + isAlive)
    console.log(message)
    messageEl.textContent = message
}

function newCard() {
    let card = 11
    console.log("Drawing a new card from the deck")
    sum += card
    console.log(card)
    startGame()
    document.getElementById("startgame").style.display="none"
}