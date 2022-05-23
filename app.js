let board = document.getElementById('board')
board.style.gridTemplateColumns = '100px 100px 100px';
board.style.gridTemplateRows = '100px 100px 100px';



for (let i = 1; i <= 9; i++){
    let box = document.createElement('div')
    box.setAttribute('class', 'box')
    box.setAttribute('id', `box${i}`)
    board.appendChild(box);
}

const winningCombos = [
    
]