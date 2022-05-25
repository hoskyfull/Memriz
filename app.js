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
let stop = document.getElementById('restart').addEventListener('click',function(){
    boxesSelected = []
    score = 0
    succesClick = 0
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
// let scoreBox = document.createElement('div')
// scoreBox.setAttribute('id', boxScore)

//We are making an array of the divs
let allBoxes = Array.from(document.querySelectorAll('.box'))
const startGame = () => (
    allBoxes.forEach(tile => tile.addEventListener('click', tileClick)))
    startGame()

// this is the function that does th random selection
function randomSelect (){
    // Here, we make computer select a radom box with the math method
    let randomOne = Math.floor(Math.random()*allBoxes.length);
    //console.log just to check
    console.log(allBoxes[randomOne])
    // tile = randomOne
    ///styling color for the elements that is suppsed to be lit
    allBoxes[randomOne].style.background = 'rgb(114, 14, 14)';
    console.log(randomOne)
    return randomOne
}
// each time I click, I will see success and oop if use select the non lit one
function tileClick (e) {
    // boxesSelected.push(e.target.id)
    let tileId = Number(e.target.id)
    console.log(tileId)
    if (boxesSelected.includes(tileId)){
        succesClick += 1;
        console.log(succesClick)
    }else {
        console.log('Oops')
    }
    if (succesClick == 3){
        score += 1
        console.log(score,'this is score')
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
        },1000)

    };
    console.log(selectedTile);
    console.log(boxesSelected, 'this is selected boxes');


}

// setInterval(randomselect, 2000)
console.log(allBoxes)




