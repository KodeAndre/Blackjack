let firstCard = 4
let secondCard = 7
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        
    }

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
   
    messageEl.textContent = message
}

function startGame() {
    renderGame()
    document.getElementById("startgame").style.display="none"
    document.getElementById("newcard").style.display="block"
}

function newCard() {
    let card = 5
    console.log("Drawing a new card from the deck")
    sum += card
    cards.push(card)
    renderGame()
}

// for (let i = 0; i < 11; i ++) {
//     console.log(i)
// }