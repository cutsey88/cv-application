import React from 'react';
import CompanyExperience from './companyExperience';

class Company extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const company = this.props.company;
        let pbID = 'pb-' + company.id;
        return (
            <div className="companyBox">
                <label>
                    Company Name:
                    <input
                        type="text"
                        id={company.id}
                        className="companyNameInput"
                        value={company.name}
                        onChange={this.props.handleInputChange} />
                </label>
                <div className="positionsContainer">
                    {company.positions.map((position) => {
                            return (
                                <CompanyExperience
                                    position={position}
                                    key={position.id}
                                    handleInputChange={this.props.handleInputChange}
                                    addResponsibility={this.props.addResponsibility} />
                            )
                        })}
                </div>
                <button className="addPositionButton" id={pbID} onClick={this.props.addPosition}>Add position</button>
            </div>
        );
    }
}

export default Company;