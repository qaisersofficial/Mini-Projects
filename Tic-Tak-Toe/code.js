const Display_status = document.querySelector('.status');

let Active = true;

let currentPlayer = "X";
let indexes = ["", "", "", "", "", "", "", "", ""];
const winMsg = () => `Player ${currentPlayer} has won!`;
const drawMsg = () => `It's a draw!`;

const currentPlayerMove = ()=> `${currentPlayer}'s move`;

Display_status.innerHTML = currentPlayerMove();

document.querySelectorAll('.box').forEach(box=> box.addEventListener('click', handleBoxClick));

document.querySelector('.Reset').addEventListener('click',handleReset);

function handleBoxClick  (clickedBoxEvent)  {
    const clickedBox = clickedBoxEvent.target;
    const clickedBoxIndex = parseInt( clickedBox.getAttribute('data-cell-index') );
    if(indexes[clickedBoxIndex] !== '' || !Active){
        return;
    }
    handleBoxPlayed(clickedBox, clickedBoxIndex);
    handleStatusValidation(); 
}

    function handleBoxPlayed (clickedBox, clickedBoxIndex) {
        indexes[clickedBoxIndex] = currentPlayer;
        clickedBox.innerHTML = currentPlayer;
    }
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
];
function handleStatusValidation () {
    let roundWon =false;
    for(let i =0 ; i <= 7; i++){
        const winCondition = winConditions[i];
        let a = indexes[winCondition[0]];
        let b = indexes[winCondition[1]];
        let c = indexes[winCondition[2]];
        if(a === '' || b === '' || c === ''){
            continue;
        }
        if(a === b && b === c){
            roundWon = true;
            break;
    }
}
        if(roundWon){
                Display_status.innerHTML = winMsg();
                Active = false;
                return;
        }
        let roundDraw = !indexes.includes("");
        if(roundDraw){
            Display_status.innerHTML = drawMsg();
            Active = false;
            return;
        }
        handlePlayerChange();
}
function handlePlayerChange(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    Display_status.innerHTML = currentPlayerMove();
}
function handleReset(){
    Active = true;
    currentPlayer = "X";
    indexes = ["", "", "", "", "", "", "", "", ""];
    Display_status.innerHTML = currentPlayerMove();
    document.querySelectorAll('.box').forEach(box => box.innerHTML="" );
}