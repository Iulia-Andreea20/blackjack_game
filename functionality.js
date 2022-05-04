let sum
let cards = []
let hasBlackjack = false;
let isAlive = false;
let gameStarted = true;
let message = "";
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el");
//asking for an element by its selector
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let errMesage = document.querySelector("#err-message");
let retryEl = document.querySelector("#retry-btn");


//Object
// let player = {
//     name: "Per",
//     chips: 100,

//     sayHello: function () {
//         console.log("Hello, my name is " + this.name);
//     }

//=== document.getElementById("player-name-input").value
// document is an object and getElementById is a method
// of the document object
// same for console.log
// }

// player.sayHello();

function startGame() {

    if (gameStarted) {

        errMesage.textContent = ""
        sum = 0
        cards = []
        isAlive = true
        hasBlackjack = false
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        sum = firstCard + secondCard
        cards = [firstCard, secondCard]
        renderGame();
    }
    else {
        if (isAlive === false && hasBlackjack === false) {
            errMesage.textContent = "You're out of the game! Press Retry button to start a new game"
        } else if (isAlive && !hasBlackjack) {
            errMesage.textContent = "Press New Card button to draw a new card!";
        }
        else if (isAlive && hasBlackjack) {
            errMesage.textContent = "Congratulations, you got Blackjack! Press Retry button to start a new game";
        }
    }
    gameStarted = false;

    console.log(isAlive)
    console.log(sum)
}
//Math.random returs a random number between 0 and 0.999 (not including 1)
//Math.floor(Math.random() * 6) ==> 0 and 5
//Math.floor(Math.random() * 6) + 1 ==> 1 and 6

// console.log(cards)
function getRandomCard() {
    randomNumber = Math.floor(Math.random() * 13) + 1
    //Solution 1 for the Ace value: select 1 or 11 as a value randomly
    aceValues = [1, 11]
    if (randomNumber === 1) {
        // let aceEl = document.querySelector("#ace-el");
        // aceEl.textContent = "You have an Ace!\n Chlick on the one or eleven button to choose a proper value for you";
        return aceValues[Math.floor(Math.random() * aceValues.length)]
    } else if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13) {
        // aceEl.textContent = "";
        return 10
    } else {
        // aceEl.textContent = "";
        return randomNumber
    }

}

function oneValue() {
    cards.push(1);
    sum += 1;
}
function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You got Blackjack!";
        hasBlackjack = true;
    } else {
        if (!isAlive) {
            message = "Press Start Game button to start the game, then you can draw new cards!";
        }
        else {
            message = "You're out of the game!";
            isAlive = false;
        }
    }
    messageEl.textContent = message;

    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum;
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
}

function newCard() {
    errMesage.textContent = ""
    if (isAlive && !hasBlackjack) {
        console.log("Drawing a new card from the deck...");

        let thirdCard = getRandomCard();
        sum += thirdCard;

        cards.push(thirdCard);
        renderGame();
    }
    else if (hasBlackjack) {
        errMesage.textContent = "Congratulations, you got Blackjack! Press Retry button to start a new game";
    }
    else if (!isAlive) {
        errMesage.textContent = "You're out of the game! Press Retry button to start a new game";
    }

    console.log(isAlive)
    console.log(sum)
}

function newGame() {

    gameStarted = true;
    startGame();
    console.log(isAlive)
    console.log(sum)
}
