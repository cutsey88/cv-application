import PersonalInfoPreview from './personalInfoPreview';
import WorkExperiencePreview from './workExperiencePreview';
import EducationPreview from './educationPreview';
import '../styles/App.css';

function Preview(props) {
    
    return (
        <div className="previewContainer">
            <PersonalInfoPreview
                name={props.name}
                email={props.email}
                phone={props.phone} />
            <WorkExperiencePreview companies={props.companies}/>
            <EducationPreview schools={props.schools} />
        </div>
    );
}

export default Preview;