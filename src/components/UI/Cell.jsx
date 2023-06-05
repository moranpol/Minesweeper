import React from "react";

const Cell = ({ details, updateFlag, revealCell }) => {
  const style = {
    cellStyle: {
      width: 40,
      height: 40,
      backgroundColor: "grey",
      border: "1px solid white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
    },
  };

  return (
    <div
      style={style.cellStyle}
      onClick={() => {
        revealCell(details.x, details.y);
      }}
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
    >
      {details.revealed ? details.value : ""}
      {!details.revealed && details.flagged ? "F" : ""}
    </div>
  );
};

export default Cell;
