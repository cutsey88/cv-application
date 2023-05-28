import React, { useState, useEffect } from 'react';
import CompanyExperience from './companyExperience';
import '../styles/App.css';
import '../styles/company.css'

function Company(props) {
    
    const [saved, setSaved] = useState(false);

    function changeSaved(e) {
        e.preventDefault();
        saved ? setSaved(false) : setSaved(true);
    }

    useEffect(() => {
        if (saved) {
            props.updatePreview();
        }
    }, [saved])



    const company = props.company;
    let pbID = 'pb-' + company.id;
    let dcID = 'dc-' + company.id;
    if (saved) {
        return (
            <div className="companyBox">
                <div className="companyNameBox">
                    <p className="companyNameText">{company.name}</p>
                </div>
                <div className="positionsContainer">
                    {company.positions.map((position) => {
                            return (
                                <CompanyExperience
                                    position={position}
                                    key={position.id}
                                    saved={saved}
                                    handleInputChange={props.handleInputChange} />
                            )
                        })}
                </div>
                <div className="buttonBox">
                    <button className="editButton" onClick={changeSaved}>Edit Company</button>
                </div>
            </div>
        )
    }
    return (
        <div className="companyBox">
            <label className="companyLabel" htmlFor={company.id}>Company Name:</label>
            <span className="deleteCompanySpan">
                <button id={dcID} className="deleteCompanyButton" onClick={props.deleteCompany}>Delete</button>
            </span>
            <input
                type="text"
                name="companyName"
                id={company.id}
                className="companyNameInput"
                value={company.name}
                onChange={props.handleInputChange} />
            <div className="positionsContainer">
                {company.positions.map((position) => {
                        return (
                            <CompanyExperience
                                position={position}
                                key={position.id}
                                saved={saved}
                                handleInputChange={props.handleInputChange}
                                addResponsibility={props.addResponsibility}
                                deletePosition={props.deletePosition}
                                deleteResponsibility={props.deleteResponsibility} />
                        )
                    })}
            </div>
            <div className="buttonBox">
                <button className="saveButton" onClick={changeSaved}>Save Company</button>
                <button className="addPositionButton" id={pbID} onClick={props.addPosition}>Add position</button>
            </div>
        </div>
    );
}

export default Company;