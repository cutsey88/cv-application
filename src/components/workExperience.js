import React from 'react';
import Company from './company';
import uniqid from 'uniqid';
import { text } from '@fortawesome/fontawesome-svg-core';

class WorkExperience extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            companies: [],
        }

        this.addCompany = this.addCompany.bind(this);
        this.addPosition = this.addPosition.bind(this);
        this.addResponsibility = this.addResponsibility.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    addCompany(e) {
        e.preventDefault();
        this.setState({
            companies: this.state.companies.concat({
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
        });
    }

    addPosition(e) {
        e.preventDefault();
        let companyID = e.target.id.slice(3);
        this.setState({
            companies: this.state.companies.map((company) => {
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
        })
    }

    addResponsibility(e) {
        e.preventDefault();
        let positionID = e.target.id.slice(3);
        this.setState({
            companies: this.state.companies.map((company) => {
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
        })
    }

    handleInputChange(e) {

        this.setState({
            companies: this.state.companies.map((company) => {
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
        })
    }

    render() {
        return (
            <div className="workExperienceBox">
                <div>
                    <h1>Work Experience</h1>
                </div>
                <div className="companiesContainer">
                    {this.state.companies.map((company) => {
                        return <Company
                                    company={company}
                                    key={company.id}
                                    handleInputChange={this.handleInputChange}
                                    addPosition={this.addPosition}
                                    addResponsibility={this.addResponsibility} />
                    })}
                    <button className="addCompanyButton" onClick={this.addCompany}>Add company</button>
                </div>
            </div>
        );
    }
}

export default WorkExperience;