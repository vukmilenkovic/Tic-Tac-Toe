function Gameboard(){
    const gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
    ];
    function player(name, symbol){

        console.log(`Hey player1 '${name}' you chose to be the symbol: ${symbol}`);
        return {name, symbol};
    };

    function checkwinner(){
        for (const row of gameboard){
            if (row[0] !== "" && row.every(cell => cell === row[0])) {
                console.log(`The winner is ${row[0]}`);
            // End the game 
            return row[0];
    }

        }

    }
    function drawBoard(x, y, symbol){
        checkwinner();
        gameboard[x][y] = symbol;
        // console.clear();
        gameboard.forEach((row, i) => {
            console.log(
            `${i} | ` +
            row.map(cell => cell === "" ? "[]" : `[${cell}]`).join(" ")
            );
        });
    }

    return {drawBoard, player, playGame, checkwinner};
};


function playGame(){
    const player1 = "X";
    const player2 = "O";
    let playerMove = false;

    const button = document.querySelectorAll('.square');
    button.forEach(btn => {
    btn.addEventListener('click', () => {
        if(playerMove === false) {
            btn.innerHTML = `<p>X</p>`;
            console.log("Yo fagot");
            return (playerMove = !playerMove);
        } else {
            btn.innerHTML = `<p>O</p>`;
            console.log("Whatup bitch");
            return (playerMove = !playerMove);
            
        }
        
    })
})
    
    
};




playGame();











