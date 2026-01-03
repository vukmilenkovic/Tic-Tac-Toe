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
    const board = Gameboard();
    const player1 = board.player("Vuk", "X");
    const player2 = board.player("Hana", "Y");

    // Receive coordinates
    board.drawBoard(0, 0, player1.symbol);
    board.checkwinner();
    console.clear();
    board.drawBoard(1, 0, player2.symbol);
    board.checkwinner();
    board.drawBoard(0, 1, player1.symbol);
    board.checkwinner();
    board.drawBoard(2, 1, player2.symbol);
    board.checkwinner();
    console.clear();
    board.drawBoard(0, 2, player1.symbol);
    board.checkwinner();
    board.drawBoard(0, 1, player2.symbol);
    board.checkwinner();
    
};

playGame();











