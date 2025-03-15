import React from 'react';

const DetectionResult = ({ detections }) => {
    if (!detections || detections.length === 0) {
        return <p>No objects detected.</p>;
    }

    return (
        <div id="results">
            <h2>Detected Objects:</h2>
            {detections.map((obj, index) => (
                <div key={index}>
                    — {obj.label || "Unknown"} | Confidence: {obj.score ? (obj.score * 100).toFixed(2) : '0.00'}%
                </div>
            ))}
        </div>
    );
};

export default DetectionResult;
