import React, { useState } from 'react';
import '../styles/App.css';

function WorkExperiencePreview(props) {

    return (
        <div className="workExperienceContainer">
            <div className="headerBox">
                <h1>Work Experience</h1>
            </div>
            <div className="companiesContainer">
                {props.companies.map((company) => {
                    return (
                        <div className="companyBox" key={company.id + 'prev'}>
                            <div className="companyNameBox">
                                <p className="companyNameText">{company.name}</p>
                            </div>
                            <div className="positionsContainer">
                                {company.positions.map((position) => {
                                        return (
                                            <div className="positionBox" key={position.id + 'prev'}>
                                                <div className="positionInfoBox">
                                                    <div className="positionNameBox">
                                                        <p className="positionNameText">{position.title}</p>
                                                    </div>
                                                    <div className="positionYearsBox">
                                                        <p className="positionYearsText">{position.years[0].concat(' - ', position.years[1])}</p>
                                                    </div>
                                                </div>
                                                <ul className="responsibilitiesContainer">
                                                    {position.responsibilities.map((responsibility) => {
                                                        return  <li key={responsibility.id + 'prev'} className="responsibilityBox">
                                                                    <p className="responsibilityText">{responsibility.text}</p>
                                                                </li>
                                                    })}
                                                </ul>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default WorkExperiencePreview;