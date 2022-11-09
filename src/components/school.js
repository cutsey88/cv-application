import React from 'react';

class School extends React.Component {
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

        const school = this.props.school;
        let yFID = 'yf-' + school.id;
        let yTID = 'yt-' + school.id;
        let dmID = 'dm-' + school.id;
        if (this.state.saved) {
            return (
                <div className="schoolBox">
                    <div className="schoolNameBox">
                        <p className="schoolNameText">{school.name}</p>
                    </div>
                    <div className="schoolYearsBox">
                        <p className="schoolYearsText">{school.years[0].concat(' - ', school.years[1])}</p>
                    </div>
                    <div className="degreeBox">
                        <p className="degreeText">{school.degree}</p>
                    </div>
                    <div className="buttonBox">
                        <button className="editButton" onClick={this.edit}>Edit</button>
                    </div>
                </div>
                
            )
        }
        return (
            <div className="schoolBox">
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
                <div className="buttonBox">
                    <button className="saveButton" onClick={this.save}>Save</button>
                </div>
            </div>
        );
    }
}

export default School;