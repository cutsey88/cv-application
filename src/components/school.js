import React from 'react';
import '../styles/App.css';
import '../styles/school.css';

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
        let dsID = 'ds-' + school.id;
        if (this.state.saved) {
            return (
                <div className="schoolBox">
                    <div className="schoolNameBox">
                        <p className="schoolNameText">{school.name}</p>
                    </div>
                    <div className="degreeBox">
                        <p className="degreeText">{school.degree}</p>
                    </div>
                    <div className="schoolYearsBox">
                        <p className="schoolYearsText">{school.years[0].concat(' - ', school.years[1])}</p>
                    </div>
                    <div className="buttonBox">
                        <button className="editButton" onClick={this.edit}>Edit</button>
                    </div>
                </div>
                
            )
        }
        return (
            <div className="schoolBox">
                <label htmlFor="school">School Name:</label>
                <input
                    type="text"
                    id={school.id}
                    name="school"
                    className="schoolNameInput"
                    value={school.name}
                    onChange={this.props.handleInputChange} />
                <label htmlFor="degree">Degree/Major:</label>
                <input
                    type="text"
                    id={dmID}
                    name="degree"
                    className="degreeInput"
                    value={school.degree}
                    onChange={this.props.handleInputChange} />
                <label htmlFor="from">From:</label>
                <input
                    type="tel"
                    id={yFID}
                    name="from"
                    className="schoolYearFromInput"
                    value={school.years[0]}
                    onChange={this.props.handleInputChange} />
                <label htmlFor="to">To:</label>
                <input
                    type="tel"
                    id={yTID}
                    name="to"
                    className="schoolYearToInput"
                    value={school.years[1]}
                    onChange={this.props.handleInputChange} />
                <div className="buttonBox">
                    <button className="saveButton" onClick={this.save}>Save</button>
                    <button id={dsID} className="deleteButton" onClick={this.props.deleteSchool}>Delete</button>
                </div>
            </div>
        );
    }
}

export default School;