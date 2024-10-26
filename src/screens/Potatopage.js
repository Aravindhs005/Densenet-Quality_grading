import React, { useState } from 'react';
import axios from 'axios';
import './styles/applepage.css';

export const PotatoPage = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleCameraCapture = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      handleFileUpload(file);
    }
  };

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5004/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
    } catch (error) {
      console.error("There was an error uploading the image!", error);
    }
  };

  return (
    <div className="workpage">
      <h1>🥔 - Potato</h1>
      <p>Capture or upload an image of an potato to analyze its ripeness!</p>

      <div className="workupload-container">
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleCameraCapture}
          className="upload-input"
        />
      </div>

      {image && (
        <div className="workimage-preview">
          <h2>Image Preview:</h2>
          <img src={image} alt="Captured Apple" className="workpreview-image" />
        </div>
      )}

      {result && (
        <div className="workresult">
          <h2>Prediction Results:</h2>
          <p>DenseNet Classifier: {result.densenet_prediction}</p>

          {/* Show More Details Button */}
          {!showMore && (
            <button onClick={() => setShowMore(true)} className="more-details-btn">
              Show More Details
            </button>
          )}

          {/* Show Other Results when the user clicks the button */}
          {showMore && (
            <div className="more-results">
              <p>SVM Classifier: {result.svm_prediction}</p>
              <p>Random Forest Classifier: {result.rf_prediction}</p>
              <p>Logistic Regression Classifier: {result.lr_prediction}</p>
              <p>KNN Classifier: {result.knn_prediction}</p>
            </div>
          )}

          {/* Hide More Details Button */}
          {showMore && (
            <button onClick={() => setShowMore(false)} className="more-details-btn">
              Hide Details
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PotatoPage;
