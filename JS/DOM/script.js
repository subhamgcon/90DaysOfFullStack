let titleDiv = document.getElementById('titleDiv')
let message = "Red Yellow Green DOM"
titleDiv.style.color='red'
titleDiv.style.backgroundColor='black'
titleDiv.innerText = message

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

redDiv.onclick = () => {
    console.log("red")
}
yellowDiv.onclick = () => {
    console.log("yellow")
}

greenDiv.onclick = () => {
    console.log("green")
}
const squares = document.querySelectorAll('.colorSquare')

const timesClicked = {'red': 0,'yellow': 0,'green': 0}

squares.forEach(square => {
    square.onclick = () => {timesClicked[square.value]+=1
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