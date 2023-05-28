import React, { useState } from 'react';
import Company from './company';
import uniqid from 'uniqid';
import '../styles/App.css';
import '../styles/workExperience.css'

function WorkExperience(props) {

    const [companies, setCompanies] = useState([]);

    function addCompany(e) {
        e.preventDefault();
        setCompanies(
            companies.concat({
                name: '',
                id: uniqid(),
                positions: [{
                    title: '',
                    id: uniqid(),
                    years: ['', ''],
                    responsibilities: [{
                        text: '',
                        id: uniqid(),
                    }],
                }],
            })
        );
    }

    function addPosition(e) {
        e.preventDefault();
        let companyID = e.target.id.slice(3);
        setCompanies(
            companies.map((company) => {
                if (company.id === companyID) {
                    return {
                        name: company.name,
                        id: company.id,
                        positions: company.positions.concat({
                            title: '',
                            id: uniqid(),
                            years: ['', ''],
                            responsibilities: [{
                                text: '',
                                id: uniqid(),
                            }],
                        }),
                    }
                }
                return company;
            })
        )
    }

    function addResponsibility(e) {
        e.preventDefault();
        let positionID = e.target.id.slice(3);
        setCompanies(
            companies.map((company) => {
                let match = company.positions.findIndex((position) => position.id === positionID);
                if (match !== -1) {
                    return {
                        name: company.name,
                        id: company.id,
                        positions: company.positions.map((position) => {
                            if (position.id === positionID) {
                                return {
                                    title: position.title,
                                    id: position.id,
                                    years: position.years,
                                    responsibilities: position.responsibilities.concat({
                                        text: '',
                                        id: uniqid(),
                                    })
                                }
                            }
                            return position;
                        })
                    }
                }
                return company;
            })
        )
    }

    function deleteCompany(e) {
        e.preventDefault();
        let companyID = e.target.id.slice(3);
        let match = companies.findIndex((company) => company.id === companyID);
        let newComps = companies.length === 1 ? [] : companies.slice(0, match).concat(companies.slice(match + 1));
        setCompanies(newComps);
    }

    function deletePosition(e) {
        e.preventDefault();
        let positionID = e.target.id.slice(3);
        setCompanies(
            companies.map((company) => {
                let match = company.positions.findIndex((position) => position.id === positionID);
                if (match === -1) {
                    return company;
                }
                let poses = company.positions;
                let newPoses = poses.length === 1 ? [] : poses.slice(0, match).concat(poses.slice(match + 1));
                return {
                    name: company.name,
                    id: company.id,
                    positions: newPoses,
                }
            })
        );
    }

    function deleteResponsibility(e) {
        e.preventDefault();
        let resID = e.target.id.slice(3);
        setCompanies(
            companies.map((company) => {
                return {
                    name: company.name,
                    id: company.id,
                    positions: company.positions.map((position) => {
                        let match = position.responsibilities.findIndex((res) => resID === res.id);
                        if (match === -1) {
                            return position;
                        }
                        let pRes = position.responsibilities;
                        let newReses = pRes.length === 1 ? [] : pRes.slice(0, match).concat(pRes.slice(match + 1));
                        return {
                            title: position.title,
                            id: position.id,
                            years: position.years,
                            responsibilities: newReses,
                        }
                    })
                }
            })
        );
    }

    function handleInputChange(e) {
        setCompanies(
            companies.map((company) => {
                let companyID = e.target.id === company.id ? company.id : null;
                if (companyID) {
                    return {
                        name: e.target.value,
                        id: company.id,
                        positions: company.positions,
                    }
                }

                return {
                    name: company.name,
                    id: company.id,
                    positions: company.positions.map((position) => {
                        let positionID = e.target.id === position.id || e.target.id.slice(3) === position.id ? position.id : null;
                        let idType = e.target.id.slice(2, 3) === '-' ? e.target.id.slice(0, 3) : 'PorR';
                        let yearCheck = position.years;
                        if (idType.slice(0,1) === 'y') {
                            yearCheck = idType === 'yf-' ? [e.target.value, position.years[1]] : [position.years[0], e.target.value]; 
                        }
                        if (positionID) {
                            return {
                                title: idType === 'PorR' ? e.target.value : position.title,
                                id: position.id,
                                years: yearCheck,
                                responsibilities: position.responsibilities,
                            }
                        }
                        let rMatch = position.responsibilities.findIndex((res) => res.id === e.target.id);

                        if (rMatch !== -1) {
                            return {
                                title: position.title,
                                id: position.id,
                                years: position.years,
                                responsibilities: position.responsibilities.map((res) => {
                                    return {
                                        text: e.target.id === res.id ? e.target.value : res.text,
                                        id: res.id,
                                    }
                                })
                            }
                        }
                        return position;
                    })
                }
            })
        );
    }

    function updatePreview() {
        props.updatePreviewCompanies(companies);
    }

    return (
        <div className="workExperienceBox">
            <div className="headerBox">
                <h1>Work Experience</h1>
            </div>
            <div className="companiesContainer">
                {companies.map((company) => {
                    return <Company
                                company={company}
                                key={company.id}
                                handleInputChange={handleInputChange}
                                addPosition={addPosition}
                                addResponsibility={addResponsibility}
                                deleteCompany={deleteCompany}
                                deletePosition={deletePosition}
                                deleteResponsibility={deleteResponsibility}
                                updatePreview={updatePreview} />
                })}
                <button className="addCompanyButton" onClick={addCompany}>Add company</button>
            </div>
        </div>
    );
}

export default WorkExperience;