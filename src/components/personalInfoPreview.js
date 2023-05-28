import React, { useState } from 'react';
import '../styles/App.css';

function PersonalInfoPreview(props) {
    
    return (
        <div className="personalInfoContainer">
            <div className="nameBox">
                <p className="previewName">{props.name}</p>
            </div>
            <div className="infoBox">
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </div>
        </div>
    );
}

export default PersonalInfoPreview;