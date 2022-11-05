import React from 'react';
import Company from './company';
import uniqid from 'uniqid';

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

    addCompany() {
        this.setState({
            companies: this.state.companies.concat({
                name: '',
                id: uniqid(),
                positions: [{
                    title: '',
                    id: uniqid(),
                    responsibilities: [{
                        text: '',
                        id: uniqid(),
                    }],
                }],
            })
        });
    }

    addPosition(e) {
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
        if (e.target.className === 'companyNameInput') {
            this.setState({
                companies: this.state.companies.map((company) => {
                    if (company.id === e.target.id) {
                        return {
                            name: e.target.value,
                            id: company.id,
                            positions: company.positions,
                        }
                    }
                    return company
                })
            })
        }

        if (e.target.className === 'positionInput') {
            this.setState({
                companies: this.state.companies.map((company) => {
                    let match = company.positions.findIndex((position) => position.id === e.target.id);
                    if (match !== -1) {
                        return {
                            name: company.name,
                            id: company.id,
                            positions: company.positions.map((position) => {
                                if (position.id === e.target.id) {
                                    return {
                                        title: e.target.value,
                                        id: position.id,
                                        responsibilities: position.responsibilities,
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

        if (e.target.className === 'responsibilityInput') {
            this.setState({
                companies: this.state.companies.map((company) => {
                    let match = company.positions.findIndex(function(position) {
                        let resMatch = position.responsibilities.findIndex((responsibility) =>
                            responsibility.id === e.target.id
                        )
                        if (resMatch !== -1) {
                            return true;
                        }
                        return false;
                    })
                    if (match !== -1) {
                        return {
                            name: company.name,
                            id: company.id,
                            positions: company.positions.map((position) => {
                                let rMatch = position.responsibilities.findIndex((res) => res.id === e.target.id);
                                if (rMatch !== -1) {
                                    return {
                                        title: position.title,
                                        id: position.id,
                                        responsibilities: position.responsibilities.map((responsibility) => {
                                            if (responsibility.id === e.target.id) {
                                                return {
                                                    text: e.target.value,
                                                    id: responsibility.id,
                                                }
                                            }
                                            return responsibility;
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
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Work Experience</h1>
                </div>
                <div>
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