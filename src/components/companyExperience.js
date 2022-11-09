import React from 'react';

class CompanyExperience extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const position = this.props.position;
        let rbID = 'rb-' + position.id;
        let yFID = 'yf-' + position.id;
        let yTID = 'yt-' + position.id;
        if (this.props.saved) {
            return (
                <div className="positionBox">
                    <div className="positionNameBox">
                        <p className="positionNameText">{position.title}</p>
                    </div>
                    <div className="positionYearsBox">
                        <p className="positionYearsText">{position.years[0].concat(' - ', position.years[1])}</p>
                    </div>
                    <ul className="responsibilitiesContainer">
                        {position.responsibilities.map((responsibility) => {
                            return <li className="responsibilityBox">
                                        <p className="responsibilityText">{responsibility.text}</p>
                                </li>
                        })}
                    </ul>
                </div>
            )
        }
        return (
            <div className="positionBox">
                <label>
                    Position:
                    <input
                        type="text"
                        id={position.id}
                        className="positionInput"
                        value={position.title}
                        onChange={this.props.handleInputChange} />
                </label>
                <label>
                    From:
                    <input
                        type="text"
                        id={yFID}
                        className="positionYearFromInput"
                        value={position.years[0]}
                        onChange={this.props.handleInputChange} />
                </label>
                <label>
                    To:
                    <input
                        type="text"
                        id={yTID}
                        className="positionYearToInput"
                        value={position.years[1]}
                        onChange={this.props.handleInputChange} />
                </label>
                <div className="responsibilitiesContainer">
                    {position.responsibilities.map((responsibility) => {
                        return <input
                                    type="text"
                                    key={responsibility.id}
                                    id={responsibility.id}
                                    className="responsibilityInput"
                                    value={responsibility.text}
                                    onChange={this.props.handleInputChange} />
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