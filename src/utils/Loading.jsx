// LoadingOverlay.js
import React from 'react';
import '../App.css'; // Import the CSS file for styling

const Loading = () => {
    return (
        <div className="loading-overlay">
            <div className="spinner"></div>
        </div>
    );
};

export default Loading;
