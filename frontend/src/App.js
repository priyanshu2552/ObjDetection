import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import DetectionResult from './components/DetectionResult';

const App = () => {
    const [detections, setDetections] = useState([]);

    return (
        <div>
            <h1>Object Detection App</h1>
            <ImageUpload setDetectionData={setDetections} />
            <DetectionResult detections={detections} />
        </div>
    );
};

export default App;
