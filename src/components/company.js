import React from 'react';
import CompanyExperience from './companyExperience';
import '../styles/App.css';
import '../styles/company.css'

class Company extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            saved: false,
        }
        this.save = this.save.bind(this);
        this.edit = this.edit.bind(this);
    }

    save(e) {
        e.preventDefault();
        this.setState({
            saved: true,
        })
    }

    edit(e) {
        e.preventDefault();
        this.setState({
            saved: false,
        })
    }

    render() {

        const company = this.props.company;
        let pbID = 'pb-' + company.id;
        let dcID = 'dc-' + company.id;
        if (this.state.saved) {
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
                                        saved={this.state.saved}
                                        handleInputChange={this.props.handleInputChange}
                                        addResponsibility={this.props.addResponsibility} />
                                )
                            })}
                    </div>
                    <div className="buttonBox">
                        <button className="editButton" onClick={this.edit}>Edit Company</button>
                    </div>
                </div>
            )
        }
        return (
            <div className="companyBox">
                <label className="companyLabel" htmlFor="companyName">Company Name:</label>
                <span className="deleteCompanySpan">
                    <button id={dcID} className="deleteCompanyButton" onClick={this.props.deleteCompany}>Delete</button>
                </span>
                <input
                    type="text"
                    name="companyName"
                    id={company.id}
                    className="companyNameInput"
                    value={company.name}
                    onChange={this.props.handleInputChange} />
                <div className="positionsContainer">
                    {company.positions.map((position) => {
                            return (
                                <CompanyExperience
                                    position={position}
                                    key={position.id}
                                    saved={this.saved}
                                    handleInputChange={this.props.handleInputChange}
                                    addResponsibility={this.props.addResponsibility}
                                    deletePosition={this.props.deletePosition}
                                    deleteResponsibility={this.props.deleteResponsibility} />
                            )
                        })}
                </div>
                <div className="buttonBox">
                    <button className="saveButton" onClick={this.save}>Save Company</button>
                    <button className="addPositionButton" id={pbID} onClick={this.props.addPosition}>Add position</button>
                </div>
            </div>
        );
    }
}

export default Company;