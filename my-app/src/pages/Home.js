import React, { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import DrawingCanvas from "../components/DrawingCanvas";
import "../styles.css";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container">
      <div className="left">
        <ImageGrid onSelectImage={setSelectedImage} />
      </div>
      <div className="right">
        {selectedImage ? (
          <DrawingCanvas image={selectedImage} />
        ) : (
          <p>Select an image to start drawing.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
