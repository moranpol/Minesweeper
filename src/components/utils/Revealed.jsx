export const revealed = (grid, x, y, newNonMines) => {
  let show = [];
  show.push(grid[x][y]);
  while (show.length !== 0) {
    let cell = show.pop();
    let i = cell.x;
    let j = cell.y;
    if (!cell.revealed) {
      newNonMines--;
      cell.revealed = true;
    }
    if (cell.value !== 0) {
      break;
    }

    //top left cell
    if (
      i > 0 &&
      j > 0 &&
      grid[i - 1][j - 1].value === 0 &&
      !grid[i - 1][j - 1].revealed
    ) {
      show.push(grid[i - 1][j - 1]);
    }

    //left cell
    if (j > 0 && grid[i][j - 1].value === 0 && !grid[i][j - 1].revealed) {
      show.push(grid[i][j - 1]);
    }

    //bottom left cell
    if (
      i < grid.length - 1 &&
      j > 0 &&
      grid[i + 1][j - 1].value === 0 &&
      !grid[i + 1][j - 1].revealed
    ) {
      show.push(grid[i + 1][j - 1]);
    }

    //bottom cell
    if (
      i < grid.length - 1 &&
      grid[i + 1][j].value === 0 &&
      !grid[i + 1][j].revealed
    ) {
      show.push(grid[i + 1][j]);
    }

    //bottom right cell
    if (
      i < grid.length - 1 &&
      j < grid[0].length - 1 &&
      grid[i + 1][j + 1].value === 0 &&
      !grid[i + 1][j + 1].revealed
    ) {
      show.push(grid[i + 1][j + 1]);
    }

    //right cell
    if (
      j < grid[0].length - 1 &&
      grid[i][j + 1].value === 0 &&
      !grid[i][j + 1].revealed
    ) {
      show.push(grid[i][j + 1]);
    }

    //top right cell
    if (
      i > 0 &&
      j < grid[0].length - 1 &&
      grid[i - 1][j + 1].value === 0 &&
      !grid[i - 1][j + 1].revealed
    ) {
      show.push(grid[i - 1][j + 1]);
    }

    //top cell
    if (i > 0 && grid[i - 1][j].value === 0 && !grid[i - 1][j].revealed) {
      show.push(grid[i - 1][j]);
    }

    //top left cell
    if (i > 0 && j > 0 && !grid[i - 1][j - 1].revealed) {
      newNonMines--;
      grid[i - 1][j - 1].revealed = true;
    }

    //left cell
    if (j > 0 && !grid[i][j - 1].revealed) {
      newNonMines--;
      grid[i][j - 1].revealed = true;
    }

    //bottom left cell
    if (i < grid.length - 1 && j > 0 && !grid[i + 1][j - 1].revealed) {
      newNonMines--;
      grid[i + 1][j - 1].revealed = true;
    }

    //bottom cell
    if (i < grid.length - 1 && !grid[i + 1][j].revealed) {
      newNonMines--;
      grid[i + 1][j].revealed = true;
    }

    //bottom right cell
    if (
      i < grid.length - 1 &&
      j < grid[0].length - 1 &&
      !grid[i + 1][j + 1].revealed
    ) {
      newNonMines--;
      grid[i + 1][j + 1].revealed = true;
    }

    //right cell
    if (j < grid[0].length - 1 && !grid[i][j + 1].revealed) {
      newNonMines--;
      grid[i][j + 1].revealed = true;
    }

    //top right cell
    if (i > 0 && j < grid[0].length - 1 && !grid[i - 1][j + 1].revealed) {
      newNonMines--;
      grid[i - 1][j + 1].revealed = true;
    }

    //top cell
    if (i > 0 && !grid[i - 1][j].revealed) {
      newNonMines--;
      grid[i - 1][j].revealed = true;
    }
  }
  return { grid, newNonMines };
};