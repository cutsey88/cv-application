import React, { useState } from 'react';
import '../styles/App.css';
import '../styles/personalInfo.css';

function PersonalInfo(props) {
    
    return (
        <div className="personalInfoContainer">
            <div className="nameBox">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={props.name}
                    onChange={props.handleInputChange} />
            </div>
            <div className="infoBox">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={props.email}
                    onChange={props.handleInputChange} />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={props.phone}
                    onChange={props.handleInputChange} />
            </div>
        </div>
    );
}

export default PersonalInfo;