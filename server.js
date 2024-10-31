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
    let guess = req.body.guess

        if(newGame.remainingGuesses != 0 && newGame.gameOver != false) {
            for (let i = 0; i < 7; i++) {
                newGame.guesses.push(document.getElementById('guess'))
                
            }
        }
})

//Do not remove this line. This allows the test suite to start
//multiple instances of your server on different ports
module.exports = server;