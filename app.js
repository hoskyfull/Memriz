//this variable can be changed to a bigger box. Just in case I make levels in game
let boardSize = 6
let boxesSelected = []
// calling the board from the html
let board = document.getElementById('board')
// here I create the columns and rows
board.style.gridTemplateColumns = 'repeat('+boardSize+',50px)';
board.style.gridTemplateRows = 'repeat('+boardSize+', 50px)';
let tile = null
let succesClick = 0
let score = 0
let start = document.getElementById('start').addEventListener('click', function (){
    selectTile()
})


//restarts game
function restart (){
    boxesSelected = []
    score = 0
    scoreBoard.innerText = score
    succesClick = 0
}


let stop = document.getElementById('restart').addEventListener('click', restart)
let scoreBoard = document.getElementById('score')
scoreBoard.innerText = score


//Creates all the divs through the DOM and give each box a number 
for (let i = 0; i <(boardSize*boardSize); i++){
    let box = document.createElement('div')
    //gave the div a class and id
    box.setAttribute('class', 'box')
    //if i do not put a variable and just leave im it will automatically assign a number
    box.setAttribute('id', `${i}`)
    board.appendChild(box);
}


//We are making an array of the divs
let allBoxes = Array.from(document.querySelectorAll('.box'))
let possiblBoxes = allBoxes
const startGame = () => (
    allBoxes.forEach(tile => tile.addEventListener('click', tileClick)))
    startGame()



// this is the function that does th random selection
function randomSelect (){
    // Here, we make computer select a radom box with the math method
    let randomOne = Math.floor(Math.random()*allBoxes.length);
    // this code was to work the a bug which would color only 
    //two but would show two (if it was the same box woulnt highlight)

    // for (let i = 0; i < possiblBoxes.length; i++){
    //     if (possiblBoxes[i].id == randomOne){
    //         possiblBoxes.splice(i, 1)
    //     }
    // }

    allBoxes[randomOne].style.background = 'rgb(114, 14, 14)';
    console.log(possiblBoxes)
    console.log(randomOne)
    return randomOne
}


// each time I click, I will see success and oop if use select the non lit one
function checkForWin (){
    if (score == 3){
        alert('You won')
        restart()
    }
}


//function to alert player when clicking right or wrong tile
function tileClick (e) {
    // boxesSelected.push(e.target.id)
    let tileId = Number(e.target.id)
    console.log(tileId)
    if (boxesSelected.includes(tileId)){
        succesClick += 1;
        console.log(succesClick)
    }else {
        alert('Oops')
        restart()
    }




    ///this explains under what winning conditions the game will restart
    if (succesClick == 3){
        score += 1
        scoreBoard.innerText = score
        console.log(score,'this is score')
        checkForWin()
        succesClick = 0
        boxesSelected = []
        selectTile();
    }
    // console.log('this is boxes selected: ', boxesSelected)
    // console.log(e.target.id)
}



//created a function that will will show how many to select at a time
//
function selectTile (){
    let selectedTile = null;
    for (let i = 0; i < 3; i++){
        selectedTile = randomSelect();
        boxesSelected.push(selectedTile);
        setTimeout(function (){
            allBoxes[boxesSelected[i]].style.background = '#eee';
        },1500)


    };
    console.log(selectedTile);
    console.log(boxesSelected, 'this is selected boxes');
}
// setInterval(randomselect, 2000)
console.log(allBoxes)




