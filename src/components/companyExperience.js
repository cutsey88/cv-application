import React from 'react';
import '../styles/App.css';
import '../styles/companyExperience.css';

class CompanyExperience extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const position = this.props.position;
        let rbID = 'rb-' + position.id;
        let yFID = 'yf-' + position.id;
        let yTID = 'yt-' + position.id;
        let dpID = 'dp-' + position.id;
        if (this.props.saved) {
            return (
                <div className="positionBox">
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
                            return  <li key={responsibility.id} className="responsibilityBox">
                                        <p className="responsibilityText">{responsibility.text}</p>
                                    </li>
                        })}
                    </ul>
                </div>
            )
        }
        return (
            <div className="positionBox">
                <label className="positionLabel" htmlFor="position">Position:</label>
                <span className="deletePositionSpan">
                    <button id={dpID} className="deletePositionButton" onClick={this.props.deletePosition}>Delete</button>
                </span>
                <input
                    type="text"
                    name="position"
                    id={position.id}
                    className="positionInput"
                    value={position.title}
                    onChange={this.props.handleInputChange} />
                <label htmlFor="from">From:</label>
                <input
                    type="tel"
                    name="from"
                    id={yFID}
                    className="positionYearFromInput"
                    value={position.years[0]}
                    onChange={this.props.handleInputChange} />
                <label htmlFor="to">To:</label>
                <input
                    type="tel"
                    name="to"
                    id={yTID}
                    className="positionYearToInput"
                    value={position.years[1]}
                    onChange={this.props.handleInputChange} />
                <div className="responsibilitiesContainer">
                    {position.responsibilities.map((responsibility) => {
                        let drID = 'dr-' + responsibility.id;
                        return (
                                <div key={drID} className="responsibilityBox">
                                    <label className="responsibilityLabel" htmlFor="responsibility">Responsibility:</label>
                                    <span className="deleteResponsibilitySpan">
                                        <button id={drID} className="deleteResponsibilityButton" onClick={this.props.deleteResponsibility}>Delete</button>
                                    </span>
                                    <textarea
                                        type="text"
                                        name="responsibility"
                                        key={responsibility.id}
                                        id={responsibility.id}
                                        className="responsibilityInput"
                                        rows={4}
                                        value={responsibility.text}
                                        onChange={this.props.handleInputChange}></textarea>
                                </div>
                        )
                    })}
                </div>
                <button
                    className="addResponsibilityButton"
                    id={rbID}
                    onClick={this.props.addResponsibility}>Add responsibility</button>
            </div>
        );
    }
}

export default CompanyExperience;