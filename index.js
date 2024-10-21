const rockEl = document.getElementById("rock")
const paperEl = document.getElementById("paper")
const scissorsEl = document.getElementById("scissors")
const resetEl = document.getElementById("reset")
const autoPlayEl = document.getElementById("auto-play")
let updateEl = document.getElementById("update")
let update1El = document.getElementById("update1")
let update2El = document.getElementById("update2")
// let result = " ";
let score = JSON.parse(localStorage.getItem("score")) ||
    {
        Wins: 0,
        Ties: 0,
        Losses: 0,
    }
 
let moves = ["ROCK","PAPER","SCISSORS"]

rockEl.addEventListener("click",function(){
    // setTimeout(function(){
        gamePlay("ROCK")
    // }, 500)
})

paperEl.addEventListener("click",function(){
    // setTimeout(function(){
        gamePlay("PAPER")
    // }, 500)
})

scissorsEl.addEventListener("click",function(){
    // setTimeout(function(){
        gamePlay("SCISSORS")
    // }, 500)
})
resetEl.addEventListener("click",function(){
    score.Wins = 0;
    score.Ties = 0;
    score.Losses = 0;
    localStorage.removeItem("score")
    updateEl.textContent = ""
    update1El.textContent = ""
    update2El.textContent = `Wins: 0, Losses: 0, Ties: 0`
    clearInterval(intervalId) 
    isAutoplaying = false
    autoPlayEl.innerHTML = "AUTO PLAY"
})

autoPlayEl.addEventListener("click", () => {
    autoPlay()
})

let isAutoplaying = false
let intervalId;
const autoPlay = () => {
    if(!isAutoplaying){
        intervalId = setInterval(function(){
            const randomNum = Math.floor(Math.random()*3)
            const compMove = moves[randomNum]
            playerMove = compMove
            gamePlay(playerMove)
            isAutoplaying = true
        },1000)
        autoPlayEl.innerHTML = "Stop Autoplay"
    }else{
        clearInterval(intervalId) 
        isAutoplaying = false
        autoPlayEl.innerHTML = "AUTO PLAY"
    }   
}

function gamePlay(playerMove){
            randomNum = Math.floor(Math.random()*3)
            compMove = moves[randomNum]
        
            if (compMove === moves[0] && playerMove === "ROCK"){
                result = "IT'S A TIE!!";
            }else if (compMove === moves[0] && playerMove === "PAPER"){
                result = "YOU WIN!!";
            }else if (compMove === moves[0] && playerMove === "SCISSORS"){
                result = "YOU LOSE";
            }else if (compMove === moves[1] && playerMove === "ROCK"){
                result = "YOU LOSE";
            }else if (compMove === moves[1] && playerMove === "PAPER"){
                result = "IT'S A TIE!!";
            }else if (compMove === moves[1] && playerMove === "SCISSORS"){
                result = "YOU WIN!!";
            }else if (compMove === moves[2] && playerMove === "ROCK"){
                result = "YOU WIN!!";
            }else if (compMove === moves[2] && playerMove === "PAPER"){
                result = "YOU LOSE";
            }else if (compMove === moves[2] && playerMove === "SCISSORS"){
                result = "IT'S A TIE!!";
            }
        
            if(result === "YOU WIN!!"){
                score.Wins++
            }else if(result === "YOU LOSE"){
                score.Losses++
            }else if(result === "IT'S A TIE!!"){
                score.Ties++
            }
        
            if (compMove === moves[0]){
                updateEl.textContent = result
                update1El.innerHTML = `YOU <img class="img2" src="${playerMove}-emoji.png" alt="error">  <img class="img2" src="${moves[0]}-emoji.png" alt="error"> COMPUTER`
                update2El.textContent = `Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`
                
            }else if(compMove === moves[1]){
                updateEl.textContent = result
                update1El.innerHTML = `YOU <img class="img2" src="${playerMove}-emoji.png" alt="error"> <img class="img2" src="${moves[1]}-emoji.png" alt="error"> COMPUTER`
                update2El.textContent = `Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`
            }else{
                updateEl.textContent = result
                update1El.innerHTML = `YOU <img class="img2" src="${playerMove}-emoji.png" alt="error"> <img class="img2" src="${moves[2]}-emoji.png" alt="error"> COMPUTER ` 
                update2El.textContent = `Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`
            }
        
            localStorage.setItem("score",JSON.stringify(score))
    }