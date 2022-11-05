import React from 'react';

class CompanyExperience extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const position = this.props.position;
        let rbID = 'rb-' + position.id;
        return (
            <div>
                <label>
                    Position:
                    <input
                        type="text"
                        id={position.id}
                        className="positionInput"
                        value={position.title}
                        onChange={this.props.handleInputChange} />
                </label>
                {position.responsibilities.map((responsibility) => {
                    return <input
                                type="text"
                                key={responsibility.id}
                                id={responsibility.id}
                                className="responsibilityInput"
                                value={responsibility.text}
                                onChange={this.props.handleInputChange} />
                })}
                <button
                    className="addResponsibilityButton"
                    id={rbID}
                    onClick={this.props.addResponsibility}>Add responsibility</button>
            </div>
        );
    }
}

export default CompanyExperience;