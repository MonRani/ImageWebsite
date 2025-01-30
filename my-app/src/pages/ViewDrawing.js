/* import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewDrawing = () => {
  const [coordinates, setCoordinates] = useState([]);
  const navigate = useNavigate();
  const canvasRef = useRef(null); // Reference to the canvas element

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const parsedCoordinates = text
        .trim()
        .split("\n")
        .map((line) => {
          const [x, y] = line.split(",").map(Number);
          return { x, y };
        });

      setCoordinates(parsedCoordinates);
    };
    reader.readAsText(file);
  };

  // Function to draw path on canvas
  const drawPath = (points) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();

    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
  };

  // Use useEffect to draw on the canvas whenever coordinates change
  useEffect(() => {
    if (coordinates.length > 0) {
      drawPath(coordinates); // Draw path when coordinates are updated
    }
  }, [coordinates]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Upload a TXT file to view the drawing</h2>
      <input type="file" accept=".txt" onChange={handleFileUpload} />
      <br />
      <canvas
        ref={canvasRef} // Attach the ref to the canvas element
        width="500"
        height="500"
        style={{ border: "1px solid black", marginTop: "20px" }}
      ></canvas>
      <br />
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default ViewDrawing; */

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewDrawing = () => {
  const [strokes, setStrokes] = useState([]);
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const parsedStrokes = text
        .trim()
        .split("\n\n")
        .map((stroke) =>
          stroke
            .split("\n")
            .map((line) => {
              const [x, y] = line.split(",").map(Number);
              return { x, y };
            })
        );

      setStrokes(parsedStrokes);
    };
    reader.readAsText(file);
  };

  const drawPath = (strokes) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    strokes.forEach((stroke) => {
      ctx.beginPath();
      ctx.moveTo(stroke[0].x, stroke[0].y);
      for (let i = 1; i < stroke.length; i++) {
        ctx.lineTo(stroke[i].x, stroke[i].y);
      }
      ctx.stroke();
    });
  };

  useEffect(() => {
    if (strokes.length > 0) {
      drawPath(strokes);
    }
  }, [strokes]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Upload a TXT file to view the drawing</h2>
      <input type="file" accept=".txt" onChange={handleFileUpload} />
      <br />
      <canvas
        ref={canvasRef}
        width="500"
        height="500"
        style={{ border: "1px solid black", marginTop: "20px" }}
      ></canvas>
      <br />
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default ViewDrawing;

