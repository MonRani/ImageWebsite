import React from "react";

const SaveButton = ({ saveDrawing }) => {
  return (
    <div className="save-button-container">
      <button onClick={saveDrawing}>Save Drawing</button>
    </div>
  );
};

export default SaveButton;
