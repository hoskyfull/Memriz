let board = document.getElementById('board')
board.style.gridTemplateColumns = '100px 100px 100px';
board.style.gridTemplateRows = '100px 100px 100px';
let tile = null

//Creates all the divs in the DOM and give each box a number 
for (let i = 0; i < 9; i++){
    let box = document.createElement('div')
    box.setAttribute('class', 'box')
    //if i do not put a variable and just leave im it will automatically assign a number
    box.setAttribute('id', `${i}`)
    board.appendChild(box);
}

//WE are making an array of the divs
let allBoxes = Array.from(document.querySelectorAll('.box'))
const startGame = () => (
    allBoxes.forEach(tile => tile.addEventListener('click', tileClick)))
    startGame()

// this is the fucntion that does th random selection
function randomselect (){
    if (tile === null){
        console.log(allBoxes) 
    } else {
        allBoxes[tile].style.background = '#eee';
    } 
    // Here, we make computer select a radom box with the math method
    let randomOne = Math.floor(Math.random()*allBoxes.length)
    //console.log just to check
    console.log(allBoxes[randomOne])
    tile = randomOne
    ///styling color 
    allBoxes[tile].style.background = 'rgb(114, 14, 14)';
    console.log(tile)
}
// each time I click, I will see success and oop if use select the non lit one
function tileClick (e) {
    if (e.target.id == tile){
        console.log('Success')
    }else {
        console.log('Oops')
    }
    // console.log(e.target.id)
}

setInterval(randomselect, 5000)
console.log(allBoxes)




