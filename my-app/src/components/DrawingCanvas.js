/* import React, { useRef, useEffect, useState } from "react";
import "../styles/DrawingCanvas.css";

function DrawingCanvas({ image }) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [strokes, setStrokes] = useState([]);
  const imgRef = useRef(new Image()); // Store the image in a ref to avoid reloading

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Only load the image if it's not already loaded
    if (imgRef.current.src !== image) {
      imgRef.current.src = image;
      imgRef.current.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous canvas
        ctx.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height);
      };
    }

    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    ctxRef.current = ctx;
  }, [image]); // The useEffect only runs when the image prop changes

  const startDrawing = (e) => {
    const startX = e.nativeEvent.offsetX;
    const startY = e.nativeEvent.offsetY;
    
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(startX, startY);
    setDrawing(true);

    // Start a new stroke
    setStrokes((prevStrokes) => [
      ...prevStrokes,
      { points: [{ x: startX, y: startY }] },
    ]);
  };

  const draw = (e) => {
    if (!drawing) return;

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    
    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();

    // Update the current stroke's points
    setStrokes((prevStrokes) => {
      const updatedStrokes = [...prevStrokes];
      const currentStroke = updatedStrokes[updatedStrokes.length - 1];
      currentStroke.points.push({ x, y });
      return updatedStrokes;
    });
  };

  const stopDrawing = () => setDrawing(false);

  const saveDrawing = () => {
    const drawingData = strokes
      .map((stroke) =>
        stroke.points.map((point) => `${point.x},${point.y}`).join("\n")
      )
      .join("\n\n");
  
    const blob = new Blob([drawingData], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "drawing.txt";
    link.click();
  };
  

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <button onClick={saveDrawing}>Save Drawing</button>
    </div>
  );
}

export default DrawingCanvas; */

import React, { useRef, useEffect, useState } from "react";
import "../styles/DrawingCanvas.css";

function DrawingCanvas({ image }) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [strokes, setStrokes] = useState([]);
  const imgRef = useRef(new Image());

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (imgRef.current.src !== image) {
      imgRef.current.src = image;
      imgRef.current.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height);
      };
    }

    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    ctxRef.current = ctx;
  }, [image]);

  const startDrawing = (e) => {
    const startX = e.nativeEvent.offsetX;
    const startY = e.nativeEvent.offsetY;
    
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(startX, startY);
    setDrawing(true);

    setStrokes((prevStrokes) => [
      ...prevStrokes,
      { points: [{ x: startX, y: startY }] },
    ]);
  };

  const draw = (e) => {
    if (!drawing) return;

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    
    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();

    setStrokes((prevStrokes) => {
      const updatedStrokes = [...prevStrokes];
      const currentStroke = updatedStrokes[updatedStrokes.length - 1];
      currentStroke.points.push({ x, y });
      return updatedStrokes;
    });
  };

  const stopDrawing = () => setDrawing(false);

  const saveDrawing = () => {
    const drawingData = strokes
      .map((stroke) =>
        stroke.points.map((point) => `${point.x},${point.y}`).join("\n")
      )
      .join("\n\n");
  
    const blob = new Blob([drawingData], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "drawing.txt";
    link.click();
  };

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <button onClick={saveDrawing}>Save Drawing</button>
    </div>
  );
}

export default DrawingCanvas;