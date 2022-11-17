import React, { useState } from 'react';
import School from './school';
import uniqid from 'uniqid';
import '../styles/App.css';
import '../styles/education.css'

function Education() {

    const [schools, setSchools] = useState([]);

    function addSchool(e) {
        e.preventDefault();
        setSchools(
            schools.concat({
                name: '',
                id: uniqid(),
                years: ['', ''],
                degree: '',
            })
        );
    }

    function deleteSchool(e) {
        e.preventDefault();
        let schoolID = e.target.id.slice(3);
        let match = schools.findIndex((school) => schoolID === school.id);
        let newSchools = schools.length === 1 ? [] : schools.slice(0, match).concat(schools.slice(match + 1));
        setSchools(newSchools);
    }

    function handleInputChange(e) {
        setSchools(
            schools.map((school) => {
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
        )
    }

    
    return (
        <div className="educationBox">
            <div className="headerBox">
                <h1>Education</h1>
            </div>
            <div className="schoolsContainer">
                {schools.map((school) => {
                    return (
                        <School
                            school={school}
                            key={school.id}
                            deleteSchool={deleteSchool}
                            handleInputChange={handleInputChange} />
                            )
                })}
                </div>
                <button className="addSchoolButton" onClick={addSchool}>Add School</button>
            </div>
        );
};

export default Education;