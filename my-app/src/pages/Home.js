/* import React, { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import DrawingCanvas from "../components/DrawingCanvas";
import "../styles/App.css";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container">
      <div className="image-grid-container">
        <ImageGrid onSelectImage={setSelectedImage} />
      </div>
      <div className="drawing-canvas-container">
        {selectedImage ? (
          <DrawingCanvas image={selectedImage} />
        ) : (
          <p>Select an image to start drawing.</p>
        )}
      </div>
      <button onClick={() => navigate("/view-drawing")}>
        View Saved TXT Files as Drawing
      </button>
    </div>
  );
};

export default Home; */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import ImageGrid from "../components/ImageGrid";
import DrawingCanvas from "../components/DrawingCanvas";
import "../styles/App.css";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="container">
      <div className="image-grid-container">
        <ImageGrid onSelectImage={setSelectedImage} />
      </div>
      <div className="drawing-canvas-container">
        {selectedImage ? (
          <DrawingCanvas image={selectedImage} />
        ) : (
          <p>Select an image to start drawing.</p>
        )}
      </div>
      <button className="view-button" onClick={() => navigate("/view-drawing")}>
    View text file as drawing
  </button>
    </div>
  );
};

export default Home;


