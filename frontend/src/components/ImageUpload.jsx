import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload({ setDetectionData }) {
    const [image, setImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setErrorMessage("");  // Clear previous error
    };

    const handleUpload = async () => {
        if (!image) {
            setErrorMessage("❌ Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post(
                'http://localhost:5000/api/detect/image', 
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            setDetectionData(response.data.detections);
            setErrorMessage("");  // Clear error after successful detection
        } catch (error) {
            console.error("❌ [ERROR] Upload Failed:", error.response?.data || error.message);

            if (error.response?.data?.error) {
                setErrorMessage(`❌ Error: ${error.response.data.error}`);
            } else {
                setErrorMessage("❌ Unexpected error occurred during detection.");
            }
        }
    };

    return (
        <div className="upload-container">
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload & Detect</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default ImageUpload;
