import React, { useState, useEffect } from "react";
import CreateBoard from "../utils/CreateBoard";
import Cell from "./Cell";

const Board = () => {
  const [grid, setGrid] = useState([]);

  const style = {
    display: "flex",
    flexDirection: "row",
  };

  useEffect(() => {
    const freshBoard = () => {
      const newBoard = CreateBoard(10, 10, 20);
      setGrid(newBoard);
    };
    freshBoard();
  }, []);

  const updateFlag = (event, x, y) => {
    event.preventDefault();
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = true;
    console.log(newGrid[x][y]);
    setGrid(newGrid);
  };

  const revealCell = (x, y) => {
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      alert("clicked on mine");
    } else {
      newGrid[x][y].revealed = true;
      setGrid(newGrid);
    }
  };

  return (
    <div className="parent">
      {grid &&
        grid.length > 0 &&
        grid.map((singleRow) => {
          return (
            <div style={style}>
              {" "}
              {singleRow.map((singleCol) => {
                return (
                  <Cell
                    details={singleCol}
                    updateFlag={updateFlag}
                    revealCell={revealCell}
                  />
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Board;
