import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import DrawingCanvas from "./components/DrawingCanvas";
import "./styles/App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="app-container">
      <ImageGrid onSelectImage={setSelectedImage} />
      {selectedImage && <DrawingCanvas image={selectedImage} />}
    </div>
  );
}

export default App;