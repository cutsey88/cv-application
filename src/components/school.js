import React from 'react';

class School extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const school = this.props.school;
        let yFID = 'yf-' + school.id;
        let yTID = 'yt-' + school.id;
        let dmID = 'dm-' + school.id;
        return (
            <div>
                <label>
                    School Name:
                    <input
                        type="text"
                        id={school.id}
                        className="schoolNameInput"
                        value={school.name}
                        onChange={this.props.handleInputChange} />
                </label>
                <label>
                    From:
                    <input
                        type="text"
                        id={yFID}
                        className="schoolYearFromInput"
                        value={school.years[0]}
                        onChange={this.props.handleInputChange} />
                </label>
                <label>
                    To:
                    <input
                        type="text"
                        id={yTID}
                        className="schoolYearToInput"
                        value={school.years[1]}
                        onChange={this.props.handleInputChange} />
                </label>
                <label>
                    Degree/Major:
                    <input
                        type="text"
                        id={dmID}
                        className="degreeInput"
                        value={school.degree}
                        onChange={this.props.handleInputChange} />
                </label>
            </div>
        );
    }
}

export default School;