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