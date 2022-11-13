import React from 'react';
import School from './school';
import uniqid from 'uniqid';
import '../styles/App.css';
import '../styles/education.css'

class Education extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            schools: [],
        }
        this.addSchool = this.addSchool.bind(this);
        this.deleteSchool = this.deleteSchool.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    addSchool(e) {
        e.preventDefault();
        this.setState({
            schools: this.state.schools.concat({
                name: '',
                id: uniqid(),
                years: ['', ''],
                degree: '',
            })
        })
    }

    deleteSchool(e) {
        e.preventDefault();
        let schoolID = e.target.id.slice(3);
        let schools = this.state.schools;
        let match = schools.findIndex((school) => schoolID === school.id);
        let newSchools = schools.length === 1 ? [] : schools.slice(0, match).concat(schools.slice(match + 1));
        this.setState({
            schools: newSchools,
        })
    }

    handleInputChange(e) {
        this.setState({
            schools: this.state.schools.map((school) => {
                let schoolID = e.target.id === school.id || e.target.id.slice(3) === school.id ? school.id : null;
                let idType = e.target.id.slice(2, 3) === '-' ? e.target.id.slice(0, 3) : 'main';
                let yearCheck = school.years;
                if (idType.slice(0,1) === 'y') {
                    yearCheck = idType === 'yf-' ? [e.target.value, school.years[1]] : [school.years[0], e.target.value]; 
                }
                if (schoolID) {
                    return {
                        name: idType === 'main' ? e.target.value : school.name,
                        id: school.id,
                        years: yearCheck,
                        degree: idType === 'dm-' ? e.target.value : school.degree,
                    }
                }
                return school;
            })
        })
    }

    render() {
        return (
            <div className="educationBox">
                <div className="headerBox">
                    <h1>Education</h1>
                </div>
                <div className="schoolsContainer">
                    {this.state.schools.map((school) => {
                        return <School
                                    school={school}
                                    key={school.id}
                                    deleteSchool={this.deleteSchool}
                                    handleInputChange={this.handleInputChange} />
                    })}
                </div>
                <button className="addSchoolButton" onClick={this.addSchool}>Add School</button>
            </div>
        );
    }
}

export default Education;