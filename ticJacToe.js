const gameBoard = document.querySelector("#gameBoard");
const infoDisplay = document.querySelector("#info");
const resetButton = document.querySelector("#reset");
const scoreDisplay = document.querySelector("#score");
const startCells = [
    "",  "",  "", "", "", "", "", "", ""
]
const colors = ["myTurn", "yourTurn"]

let go = "cross"

infoDisplay.textContent = "Circle's turn";
function createBoard() {
        startCells.forEach((_cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('square');
            cellElement.id = index;
            cellElement.addEventListener('click', addGO);
            gameBoard.append(cellElement);

        })

}
createBoard()
function addGO(e){
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go = go === "circle" ? "cross" : "circle";
    infoDisplay.textContent = go.toUpperCase() + "'s turn";
    goDisplay.style.color = go === "circle" ? goDisplay.classList.add(colors[0]) : go;
    e.target.removeEventListener('click', addGO);
    checkScore();
}


function checkScore(){
    const allSquares = document.querySelectorAll('.square')
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    winningCombinations.forEach((array) => {
       const circleWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains("circle"))
       
            if (circleWins) {
                infoDisplay.textContent = "Circle has won";
                allSquares.forEach(cell => square.replaceWith(square.cloneNode(true)));
                return
            }
        })
    
        winningCombinations.forEach((array) => {
        const crossWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains("cross"))
        

            if (crossWins) {
                infoDisplay.textContent = "Cross has won";
                allSquares.forEach(cell => square.replaceWith(square.cloneNode(true)));
        }
        })
}