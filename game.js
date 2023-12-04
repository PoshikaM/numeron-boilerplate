// Iteration 2: Generate 2 random number and display it on the screen
referenceTime = undefined
let timer=document.getElementById("timer")

let num1 = document.getElementById("number1")
let num2 = document.getElementById("number2")
resetGameTime()
let score = 0

function numbers(){
number1 = Math.floor(Math.random()*100)
number2 = Math.floor(Math.random()*100)
num1.innerText = number1
num2.innerText = number2
}
numbers()

// Iteration 3: Make the options button functional
let greater = document.getElementById("greater-than")
greater.addEventListener('click',function(){
  if(number1>number2){
    score=score+1
    numbers()
    clearInterval(referenceTime)
    resetGameTime()
    console.log("correct answer")
  }else{
    console.log("wrong answer")
    localStorage.setItem('score',score)
    window.location.href = './gameover.html'
  }
})


let equal = document.getElementById("equal-to")
equal.addEventListener('click',function(){
  if(number1==number2){
    score=score+1
    numbers()
    clearInterval(referenceTime)
    resetGameTime()
    console.log("correct answer")
  }else{
    console.log("wrong answer")
    localStorage.setItem('score',score)
    window.location.href = './gameover.html'
  }
})


let lesser = document.getElementById("lesser-than")
lesser.addEventListener('click',function(){
  if(number1<number2){
    score=score+1
    numbers()
    clearInterval(referenceTime)
    resetGameTime()
    console.log("correct answer")
  }else{
    console.log("wrong answer")
    localStorage.setItem('score',score)
    window.location.href = './gameover.html'
  }
})

// Iteration 4: Build a timer for the game
function resetGameTime(){
  let time = 5
  timer.innerText = time
  referenceTime = setInterval(() =>{
    time = time-1
    timer.innerText = time
    if (time==0){
      localStorage.setItem('score',score)
      window.location.href = './gameover.html'
    }
  },1000)
}





