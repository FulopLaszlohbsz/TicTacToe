const Games = 
[
    {name: "TicTacToe", 
    sideMenu:`
    <button onClick="Games[0].areaGenerator(5)">5x5</button>
    <button onClick="Games[0].areaGenerator(4)">4x4</button>
    <button onClick="Games[0].areaGenerator(3)">3x3</button>
    <button>AI Player</button>
    <button>2 Player</button>`,
    currentChar: "X",
    swapChar: () => 
        {
            if(Games[0].currentChar == "X")
            {
                Games[0].currentChar = "O"
            }
            else
            {
                Games[0].currentChar = "X"
            }
        },
    areaGenerator: (size) => 
        {
            document.querySelector("section").innerHTML = "";
            let gameArea = document.createElement("div");
            gameArea.id = "game-area";
            gameArea.style.display = "grid";
            gameArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            gameArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;
            gameArea.style.height = "600px"
            gameArea.style.width = "600px"
            gameArea.style.margin = "auto"
            gameArea.style.marginTop = "5%"

            document.querySelector("section").appendChild(gameArea);
            for(let i = 0; i < size*size; i++)
            {
                let cell = document.createElement("div");
                cell.className = "cell";
                cell.addEventListener("click", () => {
                    if(cell.innerHTML == "")
                        {
                            cell.innerHTML = Games[0].currentChar
                            Games[0].swapChar()
                        }
                })
                gameArea.appendChild(cell);
            }
        }
    }
];