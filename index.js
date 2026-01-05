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

    // Draw first screen 

    // Draw game 

    // Draw game over. 
    function gameOver(){
        const game = document.querySelector('.game');

        return game.innerHTML = '';

    }

    return {drawBoard, player, gameOver};
};

    function checkWinner(){
        // for (const row of gameboard){
        //     if (row[0] !== "" && row.every(cell => cell === row[0])) {
        //         console.log(`The winner is ${row[0]}`);
        //     // End the game 
        //     return row[0];
        //     }

        // }
        const grid = [
        [x0y0, x1y0, x2y0],
        [x0y1, x1y1, x2y1],
        [x0y2, x1y2, x2y2]
    ];
    const checkLine = (a, b, c) =>
        a.textContent &&
        a.textContent === b.textContent &&
        a.textContent === c.textContent;
    
    // Rows
    for (let row = 0; row < 3; row++) {
        if (checkLine(grid[row][0], grid[row][1], grid[row][2])) {
        console.log(`Row ${row} is a match`);
        return true;
    }
    // Columns 
    for (let col = 0; col < 3; col++) {
        if (checkLine(grid[0][col], grid[1][col], grid[2][col])) {
         console.log(`Row ${col} is a match`);
         return true;
    }
    // Diagonals 
    if (checkLine(grid[0][0], grid[1][1], grid[2][2])) {
        console.log('Main diagonal match');
        return true;
    }

    if (checkLine(grid[0][2], grid[1][1], grid[2][0])) {
        console.log('Winer');
        return true;    
    }       
}
}
    }
function playGame(){
    const board = Gameboard();
    let gameOver = false;
    let playerMove = false;
    

    const button = document.querySelectorAll('.square');
    button.forEach(btn => {
    btn.addEventListener('click', () => {
        if (gameOver){
            return;
        }

        if(btn.textContent !== 'X' && btn.textContent !== "O"){
            if(playerMove === false) {
                btn.innerHTML = `<p>X</p>`;
                btn.style.backgroundColor = 'green';  
                console.log("Yo fagot");
            } else {
                btn.innerHTML = `<p>O</p>`;
                btn.style.backgroundColor = 'red';    
                console.log("Whatup bitch");
                
            }
        } else {
            console.log("Can't play the same field twice!");
        }
        
        if(checkWinner()){
            gameOver = true;
            
            console.log("Game Over");
            setTimeout(() => {
            board.gameOver();
            }, 500); 
            return;
        }
        playerMove = !playerMove;
        
        
    })
    
    
})
    
    
};




playGame();











