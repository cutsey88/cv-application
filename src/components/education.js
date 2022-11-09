import React from 'react';
import School from './school';
import uniqid from 'uniqid';

class Education extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            schools: [],
        }
        this.addSchool = this.addSchool.bind(this);
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
            <div>
                <div>
                    <h1>Education</h1>
                </div>
                <div>
                    {this.state.schools.map((school) => {
                        return <School
                                    school={school}
                                    key={school.id}
                                    handleInputChange={this.handleInputChange} />
                    })}
                    <button className="addSchoolButton" onClick={this.addSchool}>Add School</button>
                </div>
            </div>
        );
    }
}

export default Education;