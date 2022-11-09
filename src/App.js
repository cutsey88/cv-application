import './App.css';
import PersonalInfo from './components/personalInfo';
import WorkExperience from './components/workExperience';
import Education from './components/education'

function App() {
  return (
    <div>
      <form>
        <PersonalInfo />
        <WorkExperience />
        <Education />
      </form>
    </div>
  );
}

export default App;
