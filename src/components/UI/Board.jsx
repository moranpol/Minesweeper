import React, { useState, useEffect } from "react";
import CreateBoard from "../utils/CreateBoard";
import { revealed } from "../utils/Revealed";
import Cell from "./Cell";

const Board = () => {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState();
  const [mineLocation, setMineLocation] = useState([]);

  const style = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };

  useEffect(() => {
    const freshBoard = () => {
      restartGame();
    };
    freshBoard();
  }, []);

  const restartGame = () => {
    const newBoard = CreateBoard(10, 10, 20);
    setNonMineCount(10 * 10 - 20);
    setMineLocation(newBoard.mineLocation);
    setGrid(newBoard.board);
  };

  const updateFlag = (event, x, y) => {
    event.preventDefault();
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = true;
    setGrid(newGrid);
  };

  const revealCell = (x, y) => {
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      alert("clicked on mine, you lost!");
      for (let i = 0; i < mineLocation.length; i++) {
        newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed = true;
      }
      setGrid(newGrid);
    } else {
      let revealedBoard = revealed(newGrid, x, y, nonMineCount);
      setGrid(revealedBoard.grid);
      setNonMineCount(revealedBoard.newNonMines);
    }
  };

  const updateText = () => {
    if (nonMineCount === undefined) {
      return "";
    } else if (nonMineCount !== 0) {
      return `Non-Mines: ${nonMineCount}`;
    } else {
      return alert("You won!!");
    }
  };

  return (
    <div className="parent">
      <div style={{ color: "black", textAlign: "center", fontSize: "35px" }}>
        {updateText()}
      </div>
      <div>
        {grid.map((singleRow, index1) => (
          <div style={style} key={index1}>
            {singleRow.map((singleCol, index2) => (
              <Cell
                details={singleCol}
                key={index2}
                updateFlag={updateFlag}
                revealCell={revealCell}
              />
            ))}
          </div>
        ))}
      </div>
      <div style={style}>
        <button type="button" onClick={restartGame}>
          Restart game
        </button>
      </div>
    </div>
  );
};

export default Board;
