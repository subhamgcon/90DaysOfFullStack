console.log('Hello')
let titleDiv = document.getElementById('titleDiv')
console.log('Before: ', titleDiv.innerText)
let message = 'Red Yellow Green DOM'
titleDiv.innerText = message

console.log('After: ', titleDiv.innerText)


titleDiv.innerHTML = `<p>${message}</p>`
titleDiv.style.color = 'red'
titleDiv.style.backgroundColor = 'black'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = () => console.log("You’re clicking red")
// yellowDiv.onclick = () =>
//   console.log("You’re clicking yellow")
// greenDiv.onclick = () => console.log("You’re clicking green")

const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)

console.log(squares[0].value)

// foreach
const timesClicked = {'red': 0,'yellow': 0,'green': 0,}
squares.forEach(square => {
  
  square.onclick = () =>{
timesClicked[square.value] +=1
    square.innerText = timesClicked[square.value]
    
  }
})



const clearScores= () => {

  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => square.innerText = '')
}
const clearGameBtn= document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()
