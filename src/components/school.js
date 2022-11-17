import React, { useState } from 'react';
import '../styles/App.css';
import '../styles/school.css';

function School(props) {

    const [saved, setSaved] = useState(false);

    function changeSaved(e) {
        e.preventDefault();
        saved ? setSaved(false) : setSaved(true);
    }

    const school = props.school;
    let yFID = 'yf-' + school.id;
    let yTID = 'yt-' + school.id;
    let dmID = 'dm-' + school.id;
    let dsID = 'ds-' + school.id;
    if (saved) {
        return (
            <div className="schoolBox">
                <div className="schoolNameBox">
                    <p className="schoolNameText">{school.name}</p>
                </div>
                <div className="degreeBox">
                    <p className="degreeText">{school.degree}</p>
                </div>
                <div className="schoolYearsBox">
                    <p className="schoolYearsText">{school.years[0].concat(' - ', school.years[1])}</p>
                </div>
                <div className="buttonBox">
                    <button className="editButton" onClick={changeSaved}>Edit</button>
                </div>
            </div>
            
        )
    }
    return (
        <div className="schoolBox">
            <label htmlFor="school">School Name:</label>
            <input
                type="text"
                id={school.id}
                name="school"
                className="schoolNameInput"
                value={school.name}
                onChange={props.handleInputChange} />
            <label htmlFor="degree">Degree/Major:</label>
            <input
                type="text"
                id={dmID}
                name="degree"
                className="degreeInput"
                value={school.degree}
                onChange={props.handleInputChange} />
            <label htmlFor="from">From:</label>
            <input
                type="tel"
                id={yFID}
                name="from"
                className="schoolYearFromInput"
                value={school.years[0]}
                onChange={props.handleInputChange} />
            <label htmlFor="to">To:</label>
            <input
                type="tel"
                id={yTID}
                name="to"
                className="schoolYearToInput"
                value={school.years[1]}
                onChange={props.handleInputChange} />
            <div className="buttonBox">
                <button className="saveButton" onClick={changeSaved}>Save</button>
                <button id={dsID} className="deleteButton" onClick={props.deleteSchool}>Delete</button>
            </div>
        </div>
        );
}

export default School;