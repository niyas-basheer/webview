import React, { useState } from 'react';

const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <h1>Select an Image</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <h2>Selected Image:</h2>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '500px', marginTop: '20px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageSelector;
