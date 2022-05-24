let boardSize = 8
let boxesSelected = []


// calling the board from the html
let board = document.getElementById('board')
// here I create the columns and rows
board.style.gridTemplateColumns = 'repeat('+boardSize+', 25px)';
board.style.gridTemplateRows = 'repeat('+boardSize+', 25px)';
let tile = null
let score = 0
let start = document.getElementById('start').addEventListener('click', function (){
    setInterval(randomSelect, 1000)
})
let restart = document.getElementById('restart').addEventListener('click',function(){
    clearInterval()
})


//Creates all the divs through the DOM and give each box a number 
for (let i = 0; i <(boardSize*boardSize); i++){
    let box = document.createElement('div')
    //gave the div a class and id
    box.setAttribute('class', 'box')
    //if i do not put a variable and just leave im it will automatically assign a number
    box.setAttribute('id', `${i}`)
    //
    board.appendChild(box);
}

//We are making an array of the divs
let allBoxes = Array.from(document.querySelectorAll('.box'))
const startGame = () => (
    allBoxes.forEach(tile => tile.addEventListener('click', tileClick)))
    startGame()

// this is the function that does th random selection
function randomSelect (){
    if (tile === null){
        // console.log(allBoxes) 
    } else {
        allBoxes[tile].style.background = '#eee';
    } 
    // Here, we make computer select a radom box with the math method
    let randomOne = Math.floor(Math.random()*allBoxes.length);
    //console.log just to check
    console.log(allBoxes[randomOne])
    tile = randomOne
    ///styling color for the elements that is suppsed to be lit
    allBoxes[tile].style.background = 'rgb(114, 14, 14)';
    console.log(tile)
}

function saveRandomArray (){

}
// each time I click, I will see success and oop if use select the non lit one
function tileClick (e) {
    // boxesSelected.push(e.target.id)
    if (e.target.id == tile){
        console.log('Success')
    }else {
        console.log('Oops')
    }
    // console.log('this is boxes selected: ', boxesSelected)
    // console.log(e.target.id)
}

function startbutton(e){

}

// setInterval(randomselect, 2000)
console.log(allBoxes)




