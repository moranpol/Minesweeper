const CreateBoard = (row, col, mines) => {
  let board = [];
  let mineLocation = [];

  const random = (min = 0, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  //blank board
  for (let x = 0; x < row; x++) {
    let subCol = [];
    for (let y = 0; y < row; y++) {
      subCol.push({
        value: 0,
        reaveled: false,
        x: x,
        y: y,
        flagged: false,
      });
    }
    board.push(subCol);
  }

  //random mines place
  let minesCount = 0;
  while (minesCount > mines) {
    let x = random(0, row - 1);
    let y = random(0, col - 1);

    if (board[x][y].value === 0) {
      board[x][y].value = "X";
      mineLocation.push([x, y]);
      minesCount++;
    }

    //update the values of every cell
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        //cell is mine
        if (board[i][j].value === "X") {
          continue;
        }

        //top cell
        if (i > 0 && board[i - 1][j].value === "x") {
          board[i][j].value++;
        }

        //top left cell
        if (i > 0 && j > 0 && board[i - 1][j - 1].value === "x") {
          board[i][j].value++;
        }

        //left cell
        if (j > 0 && board[i][j - 1].value === "x") {
          board[i][j].value++;
        }

        //bottom left cell
        if (i < row - 1 && j > 0 && board[i + 1][j - 1].value === "x") {
          board[i][j].value++;
        }

        //bottom cell
        if (i < row - 1 && board[i + 1][j].value === "x") {
          board[i][j].value++;
        }

        //bottom right cell
        if (i < row - 1 && j < col - 1 && board[i + 1][j + 1].value === "x") {
          board[i][j].value++;
        }

        //right cell
        if (j < col - 1 && board[i][j + 1].value === "x") {
          board[i][j].value++;
        }

        //top right cell
        if (i > 0 && j < col - 1 && board[i - 1][j + 1].value === "x") {
          board[i][j].value++;
        }
      }
    }
    return { board, mineLocation };
  }
};

export default CreateBoard;
