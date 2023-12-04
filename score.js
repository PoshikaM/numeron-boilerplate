// Iteration 5: Store the player score and display it on the game over screen

let scorefromgame = localStorage.getItem('score')
// console.log('score',scorefromgame)
let scoreBox = document.getElementById("score-box")
scoreBox.innerText = scorefromgame


let playAgain = document.getElementById("play-again-button")
playAgain.addEventListener('click',function(){
    window.location.href='./index.html'
})