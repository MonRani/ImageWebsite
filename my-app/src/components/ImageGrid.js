import React, { useState, useEffect } from "react";
import fetchImages from "../utils/api";
import "../styles/ImageGrid.css";

function ImageGrid({ onSelectImage }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages().then((data) => {
      // Ensure there are at least 10 images, pad with placeholder URLs
      const paddedImages = [...data];
      while (paddedImages.length < 10) {
        paddedImages.push("https://via.placeholder.com/300?text=No+Image"); // Placeholder image
      }
      setImages(paddedImages);
    });
  }, []);

  return (
    <div className="grid-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img} // This will either be a valid image URL or the placeholder URL
          alt={`${index + 1}`}
          onClick={() => onSelectImage(img)}
          className="grid-image"
        />
      ))}
    </div>
  );
}

export default ImageGrid;

