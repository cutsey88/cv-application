import React, { useState } from 'react';
import '../styles/App.css';

function EducationPreview(props) {
    
    return (
        <div className="educationContainer">
            <div className="headerBox">
                <h1>Education</h1>
            </div>
            <div className="schoolsContainer">
                {props.schools.map((school) => {
                    return (
                        <div className="schoolBox" key={school.id + 'prev'}>
                            <div className="schoolNameBox">
                                <p className="schoolNameText">{school.name}</p>
                            </div>
                            <div className="degreeBox">
                                <p className="degreeText">{school.degree}</p>
                            </div>
                            <div className="schoolYearsBox">
                                <p className="schoolYearsText">{school.years[0].concat(' - ', school.years[1])}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default EducationPreview;