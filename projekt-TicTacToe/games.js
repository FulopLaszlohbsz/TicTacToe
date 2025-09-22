const Games = 
[
    {name: "TicTacToe", 
    sideMenu:`
    <button onClick="Games[0].areaGenerator(5)">5x5</button>
    <button>4x4</button>
    <button>3x3</button>
    <button>AI Player</button>
    <button>2 Player</button>`,
    areaGenerator: (size) => 
        {
            document.querySelector("section").innerHTML = "";
            let gameArea = document.createElement("div");
            gameArea.id = "game-area";
            gameArea.style.display = "grid";
            gameArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            gameArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;
            gameArea.style.height = "100%";
            gameArea.style.width = "100%";
            document.querySelector("section").appendChild(gameArea);
            for(let i = 0; i < size*size; i++)
            {
                let cell = document.createElement("div");
                cell.className = "cell";
                gameArea.appendChild(cell);
            }
        }
    }
];