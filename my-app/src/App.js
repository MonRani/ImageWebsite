/* import React, { useState } from "react";
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

export default App; */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";  // Assuming Home is now in pages folder
import ViewDrawing from "./pages/ViewDrawing";  // This is the new page to view drawings
import "./styles/App.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-drawing" element={<ViewDrawing />} />
      </Routes>
    </Router>
  );
}

export default App;
