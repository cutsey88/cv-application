import React, { useState } from 'react';
import '../styles/App.css';
import '../styles/personalInfo.css';

function PersonalInfo() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function handleInputChange(e) {
        if (e.target.name === "name") {
            setName(e.target.value);
        } else if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "phone") {
            setPhone(e.target.value);
        }
    }
    
    return (
        <div className="personalInfoContainer">
            <div className="nameBox">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleInputChange} />
            </div>
            <div className="infoBox">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleInputChange} />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handleInputChange} />
            </div>
        </div>
    );
}

export default PersonalInfo;