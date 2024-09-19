import React, { useState } from 'react';
import './css/PictureZoom.css';

const PictureZoom = ({ images }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  // Open zoom modal with the clicked image
  const openZoom = (image) => {
    setActiveImage(image);
    setIsZoomed(true);
  };

  // Close the zoom modal
  const closeZoom = () => {
    setIsZoomed(false);
    setActiveImage(null);
  };

  return (
    <div className="picture-gallery">
      {/* Thumbnails */}
      <div className="thumbnail-list">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="thumbnail"
            onClick={() => openZoom(image)}
            style={{ width: '200px', height: '150px', objectFit: 'cover', cursor: 'pointer', margin: '10px' }}
          />
        ))}
      </div>

      {/* Zoomed Modal */}
      {isZoomed && activeImage && (
        <div className="zoomed-modal">
          <button className="close-button" onClick={closeZoom}>×</button>
          <div className="zoomed-content">
            <img src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PictureZoom;
