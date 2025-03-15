import React from 'react';

function Dashboard({ pastDetections }) {
    return (
        <div className="dashboard-container">
            <h2>Past Detections</h2>
            {pastDetections.length === 0 ? (
                <p>No previous detections found.</p>
            ) : (
                pastDetections.map((entry, index) => (
                    <div key={index} className="dashboard-entry">
                        <p><strong>Image:</strong> {entry.image}</p>
                        <p><strong>Detected:</strong> {entry.detections.join(', ')}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Dashboard;  // Corrected export
