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

    
    
};

const button = document.querySelectorAll('.square');
button.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(`Btn ${btn.id} clicked`);
    })
})


//playGame();











