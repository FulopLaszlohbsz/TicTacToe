const Games = 
[
    {name: "TicTacToe", 
    sideMenu:`
    <label>
    <input type="radio" name="sizebtn" value="5"></button>
    <span>5x5</span>
    </label>
    <label>
    <input type="radio" name="sizebtn"  value="4"></button>
    <span>4x4</span>
    </label>
    <label>
    <input type="radio" name="sizebtn"  value="3"></button>
    <span>3x3</span>
    </label>
    <label>
    <input type="radio" name="AIOrPlayer" value="AI"></button>
    <span>AI Opponent</span>
    </label>
    <label>
    <input type="radio" name="AIOrPlayer" value="Player"></button>
    <span>2 Player</span>
    </label>
    <button onClick = "Games[0].start()">Start</button>`,
    currentChar: "X",
    size: 0,
    steps: 0,
    start: () =>
        {
            const current = Games[0];
            current.currentChar = "X";
            current.size = document.querySelector('input[name="sizebtn"]:checked').value;
            current.steps = 0;
            Games[0].areaGenerator(current.size);
        },
    swapChar: () => 
        {
            Games[0].steps++;
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
            Games[0].size = size;
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
                            Games[0].CheckForWin();
                        }
                })
                gameArea.appendChild(cell);
            }
        },
        Win: () =>
        {
            document.querySelector("section").innerHTML = "";
        },
        CheckForWin: () => 
        {
            let cells = document.querySelectorAll(".cell");
            let grid = [];
            for(let i = 0; i < Games[0].size; i++)
                {
                let row = [];
                for(let j = 0; j < Games[0].size; j++)
                {
                    row.push(cells[i * Games[0].size + j]);
                }
                grid.push(row);
            }

            
            for(let i = 0; i < Games[0].size; i++)
                {
                    //Check rows
                    let temp = 0
                    for(let j = 0; j < Games[0].size; j++)
                        {
                            if(grid[i][j].innerHTML == "X")
                            {
                                temp++;
                            }
                            else if(grid[i][j].innerHTML == "O")
                            {
                                temp--;
                            }
                        }
                    if(Math.abs(temp) == Games[0].size)
                        {
                            if(temp > 0)
                                {
                                    alert(`X Wins!`)
                                    Games[0].Win();
                                    return;
                                }
                            else
                                {
                                    alert(`O Wins!`)
                                    Games[0].Win();
                                    return;
                                }
                        }
                        //Check columns
                    temp = 0
                    for(let j = 0; j < Games[0].size; j++)
                        {
                            if(grid[j][i].innerHTML == "X")
                                {
                                    temp++;
                                }
                            else if(grid[j][i].innerHTML == "O")
                                {
                                    temp--;
                                }
                        }
                    if(Math.abs(temp) == Games[0].size)
                        {
                            if(temp > 0)
                                {
                                    alert(`X Wins!`)
                                    Games[0].Win();
                                    return;
                                }
                            else
                                {
                                    alert(`O Wins!`)
                                    Games[0].Win();
                                    return;
                                }
                        }
                }
                //Check diagonals
                let temp = 0
                    for(let i = 0; i < Games[0].size; i++)
                    {
                        if(grid[i][i].innerHTML == "X")
                            {
                                temp++;
                            }
                            else if(grid[i][i].innerHTML == "O")
                            {
                                temp--;
                            }
                    }
                    if(Math.abs(temp) == Games[0].size)
                        {
                            if(temp > 0)
                                {
                                    alert(`X Wins!`)
                                    Games[0].Win();
                                    return;
                                }
                            else
                                {
                                    alert(`O Wins!`)
                                    Games[0].Win();
                                    return;
                                }
                        }
                    temp = 0
                    for(let i = 0; i < Games[0].size; i++)
                    {
                        if(grid[i][Games[0].size - 1 - i].innerHTML == "X")
                            {
                                temp++;
                            }
                            else if(grid[i][Games[0].size - 1 - i].innerHTML == "O")
                            {
                                temp--;
                            }
                    }
                    if(Math.abs(temp) == Games[0].size)
                        {
                            if(temp > 0)
                                {
                                    alert(`X Wins!`)
                                    Games[0].Win();
                                    return;
                                }
                            else
                                {
                                    alert(`O Wins!`)
                                    Games[0].Win();
                                    return;
                                }
                        }
                //Check Tie
                if(Games[0].steps == Games[0].size * Games[0].size)
                {
                    alert("It's a Tie!")
                    Games[0].Win();
                }
        }
    }
];