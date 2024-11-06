const express = require("express");
const uuid = require("uuid")
const server = express();
server.use(express.json())
server.use(express.static('public'))


//All your code goes here
let activeSessions={

}

server.get('/newgame', (req, res)=>{
let newID = uuid.v4()
let newGame={
    wordToGuess: "spike",
    guesses:[],
    wrongLetters:[],
    closeLetters:[],
    rightLetters: [],
    remainingGuesses: 6,
    gameOver: false
}
activeSessions[newID] = newGame
console.log(activeSessions);

res.status(201);
res.send({sessionID: newID});

})

server.get('/gamestate', (req, res) => {

    res.status(200);

    let gameState = activeSessions[req.query.sessionID]
    res.send({gameState})
    
})
server.get('/newgame', (req, res) => {
    if(newGame.guesses == newGame.wordToGuess){
        res.status(201);
    }
})
server.post('/guess', (req, res) => {
    
    res.status(201);
    let guess = req.body.guess.toLowerCase()
   let gameState = activeSessions[req.body.sessionID]
    
    gameState.guesses.push(guess)

    if(guess.length == 5){
        let guessedWordArr = []
        for (let i = 0; i < 5; i++) {
            guessedWordArr.push(guess[i])
        }
        gameState.remainingGuesses = gameState.remainingGuesses - 1;
        for (let j = 0; j < 5; j++) {
            if (guess[j] == gameState.wordToGuess[j]) {
                gameState.rightLetters.push(guess[j])
            } else if(guess[j] != gameState.wordToGuess[j] && guess[j] != gameState.wordToGuess[0] && guess[j] != gameState.wordToGuess[1] && guess[j] != gameState.wordToGuess[2] && guess[j] != gameState.wordToGuess[3] && guess[j] != gameState.wordToGuess[4] ){
                gameState.wrongLetters.push(guess[j])
            } else {
                gameState.closeLetters.push(guess[j])
            }
            
        }
        console.log(gameState);
        
    }
})

//Do not remove this line. This allows the test suite to start
//multiple instances of your server on different ports
module.exports = server;