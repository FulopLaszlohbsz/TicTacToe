const Games = 
[
    {name: "TicTacToe", 
    content: "Select the size, and the opponent you want to play against!",
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
    <input type="radio" name="AIOrPlayer" value="1"></button>
    <span>AI Opponent</span>
    </label>
    <label>
    <input type="radio" name="AIOrPlayer" value="0"></button>
    <span>2 Player</span>
    </label>
    <button onClick = "Games[0].start()">Start</button>`,
    currentChar: "X",
    size: 0,
    steps: 0,
    AI: 0,
    AIGrid: [],
    GameOver: false,
    start: () =>
        {
            Games[0].GameOver = false;
            Games[0].AIGrid = [];
            Games[0].AI = document.querySelector('input[name="AIOrPlayer"]:checked').value;
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
                cell.className = "cell"
                cell.value = i;
                if(Games[0].AI == 0)
                    {
                    cell.addEventListener("click", () => {
                    if(cell.innerHTML == "")
                        {
                            cell.innerHTML = Games[0].currentChar
                            
                            Games[0].swapChar();
                            Games[0].CheckForWin();
                        }
                    })
                }
                else
                {
                    cell.addEventListener("click", () => {
                    if(cell.innerHTML == "")
                        {
                            cell.innerHTML = Games[0].currentChar
                            Games[0].steps++
                            Games[0].IncrementAxis(cell.value);
                            Games[0].CheckForWin()
                            if(!Games[0].GameOver)
                                {
                                    Games[0].AITurn();
                                };
                        }
                    })
                }
                gameArea.appendChild(cell);
            }
            if(Games[0].AI == 1)
                {
                    for(let i = 0;i<Games[0].size;i++)
                        {
                            let row = []
                            for(let j = 0;j<Games[0].size;j++)
                                {
                                    row.push(0);
                                }
                                //console.log(row);
                            Games[0].AIGrid.push(row)
                        }
                    if(size == 3)
                        {
                            Games[0].AIGrid[1][1]++
                        }
                }
        },
    Win: (result) =>
        {
            if(result == "X")
                {
                    document.querySelector("section").innerHTML = 
                    `<div class="winText"><article>Game Over!<br>"X" Won!<br>${Games[0].content}</article></div>
                    <div class="winText"><button onclick="Games[0].start()"> Play Again!</button></div>`;
                }
            else if(result == "O")
               {
                document.querySelector("section").innerHTML = 
                    `<div class="winText"><article>Game Over!<br>"O" Won!<br>${Games[0].content}</article></div>
                    <div class="winText"><button onclick="Games[0].start()"> Play Again!</button></div>`;
               }
            else
               {
                document.querySelector("section").innerHTML = 
                    `<div class="winText"><article>Game Over!<br>It's a TIE!<br>${Games[0].content}</article></div>
                    <div class="winText"><button onclick="Games[0].start()"> Play Again!</button></div>`;;
               }
            
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
                                    //alert(`X Wins!`)
                                    Games[0].Win("X");
                                    Games[0].GameOver = true;
                                    return;
                                }
                            else
                                {
                                    //alert(`O Wins!`)
                                    Games[0].Win("O");
                                    Games[0].GameOver = true;
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
                                    //alert(`X Wins!`)
                                    Games[0].Win("X");
                                    Games[0].GameOver = true;
                                    return;
                                }
                            else
                                {
                                    //alert(`O Wins!`)
                                    Games[0].Win("O");
                                    Games[0].GameOver = true;
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
                                    //alert(`X Wins!`)
                                    Games[0].Win("X");
                                    Games[0].GameOver = true;
                                    return;
                                }
                            else
                                {
                                    //alert(`O Wins!`)
                                    Games[0].Win("O");
                                    Games[0].GameOver = true;
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
                                    //alert(`X Wins!`)
                                    Games[0].Win("X");
                                    Games[0].GameOver = true;
                                    return;
                                }
                            else
                                {
                                    //alert(`O Wins!`)
                                    Games[0].Win("O");
                                    Games[0].GameOver = true;
                                    return;
                                }
                        }
                //Check Tie
                if(Games[0].steps == Games[0].size * Games[0].size)
                {
                    //alert("It's a Tie!")
                    Games[0].Win("Tie");
                    Games[0].GameOver = true;
                    return;
                }
        },
    IsXWinning: () =>
        {
            let cells = document.querySelectorAll(".cell");
            let grid = [];
            for(let i = 0; i < Games[0].size; i++)
                {
                let row = [];
                for(let j = 0; j < Games[0].size; j++)
                {
                    row.push(cells[i * Games[0].size + j]);
                    if(cells[i * Games[0].size + j].innerHTML != "")
                        {
                            Games[0].AIGrid[i][j] = -1;
                        }
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
                        }
                    if(temp == Games[0].size-1)
                        {
                            for(let j = 0;j<Games[0].size;j++)
                                {
                                    if(Games[0].AIGrid[i][j]>=0)
                                        {
                                            Games[0].AIGrid[i][j]+=25
                                        }
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
                        }
                    if(temp == Games[0].size-1)
                        {
                            for(let j = 0;j<Games[0].size;j++)
                                {
                                    if(Games[0].AIGrid[j][i] >= 0)
                                        {
                                            Games[0].AIGrid[j][i]+=25
                                        }
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
                    }
                    if(temp == Games[0].size-1)
                        {
                            for(let i = 0;i<Games[0].size;i++)
                                {
                                    if(Games[0].AIGrid[i][i] >= 0)
                                        {
                                            Games[0].AIGrid[i][i] += 25
                                        }
                                }
                            
                        }
                    temp = 0
                    for(let i = 0; i < Games[0].size; i++)
                    {
                        if(grid[i][Games[0].size - 1 - i].innerHTML == "X")
                            {
                                temp++;
                            }
                    }
                    if(temp == Games[0].size-1)
                        {
                           for(let i = 0;i<Games[0].size;i++)
                                {
                                    if(Games[0].AIGrid[i][Games[0].size-1-i] >= 0)
                                        {
                                            Games[0].AIGrid[i][Games[0].size-1-i] += 25
                                        }
                                }
                        }
        },
    AITurn: () => 
        {
            Games[0].IsXWinning();
            let cells = document.querySelectorAll(".cell");
            let grid = [];
            for(let i = 0; i < Games[0].size; i++)
                {
                let row = [];
                for(let j = 0; j < Games[0].size; j++)
                {
                    row.push(cells[i * Games[0].size + j]);
                    if(cells[i * Games[0].size + j].innerHTML != "")
                        {
                            Games[0].AIGrid[i][j] = -1;
                        }
                }
                grid.push(row);
            }
            let AllGoodMoves = [];
            let index = [0,0]
            let max = 0;
            for(let i = 0;i<Games[0].size;i++)
                {
                    for(let j = 0;j<Games[0].size;j++)
                    {
                        if(Games[0].AIGrid[i][j] > max)
                            {
                                max = Games[0].AIGrid[i][j]
                                AllGoodMoves = [[i,j]]
                            }
                        else if(Games[0].AIGrid[i][j] == max)
                            {
                                AllGoodMoves.push([i,j])
                            }
                    }
                }
            index = AllGoodMoves[ Math.floor(Math.random() * ((AllGoodMoves.length-1) - 0 + 1) + 0)]
            //console.log(index)
            grid[index[0]][index[1]].innerHTML = "O"
            Games[0].steps++
            Games[0].IncrementAxis(index[0]*Games[0].size + index[1])
            Games[0].CheckForWin()
        },
    IncrementAxis: (index) => 
        {
            let MatrixValue = [];
            MatrixValue.push(parseInt((index-index%Games[0].size)/Games[0].size))
            MatrixValue.push(parseInt(index%Games[0].size))
            
            
            for(let i = 0;i<Games[0].size;i++)
                {
                    //console.log(MatrixValue[0]+ "|"+ i + "   " +i +"|" +MatrixValue[1])
                    if(Games[0].AIGrid[MatrixValue[0]][i] >= 0)
                        {
                            Games[0].AIGrid[MatrixValue[0]][i]++
                        }
                    if(Games[0].AIGrid[i][MatrixValue[1]] >= 0)
                        {
                            Games[0].AIGrid[i][MatrixValue[1]]++
                        }
                }
            let diag1 = false;
            let diag2 = false;
            //debugger
            if(MatrixValue[0] == MatrixValue[1])
                {
                    diag1 = true;
            for(let i = 0; i < Games[0].size; i++)
                    {
                        if(Games[0].AIGrid[i][i] >= 0)
                            {
                                Games[0].AIGrid[i][i]++
                            }
                        
                    }
            }
            //debugger
            if(MatrixValue[0] + MatrixValue[1] == Games[0].size - 1)
                {
                    diag2 = true;
                    for(let i = 0; i < Games[0].size; i++)
                        {
                            if(Games[0].AIGrid[i][Games[0].size-1 -i] >= 0)
                            {
                                Games[0].AIGrid[i][Games[0].size-1 -i]++
                            }
                        }
                }
            //NEGATE CORNERS
            if(diag1)
                {
                    Games[0].AIGrid[0][0]--
                    Games[0].AIGrid[Games[0].size-1][Games[0].size-1]--
                }
            if(diag2)
                {
                    Games[0].AIGrid[0][Games[0].size-1]--
                    Games[0].AIGrid[Games[0].size-1][0]--
                }

            //IF ITS THE MIDDLE
            if((Games[0].size%2 !=1) && diag1 && diag2)
                {
                    Games[0].AIGrid[Math.round(Games[0].size/2)][Math.round(Games[0].size/2)]--
                }
                //console.log(Games[0].AIGrid)
        }
    },
    {
        name: ``,
        content: ``,
        sideMenu: ``,
    },
    {
        name: ``,
        content: ``,
        sideMenu: ``,
    }
];