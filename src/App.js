import { useState } from 'react';
import './styles/App.css';
import PersonalInfo from './components/personalInfo';
import WorkExperience from './components/workExperience';
import Education from './components/education';
import Preview from './components/preview';
import html2pdf from 'html2pdf.js';

function downloadPDF(e) {
  e.preventDefault();
  const form = document.getElementById('preview');
  let opt = {
    margin: 0,
    filename: 'MyCV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 1, letterRendering: true },
    jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait'},
  }
  html2pdf(form, opt);
}

function App() {

  const [previewCompanies, setPreviewCompanies] = useState([]);
  const [previewSchools, setPreviewSchools] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleInputChange(e) {
      if (e.target.name === "name") {
          setName(e.target.value);
      } else if (e.target.name === "email") {
          setEmail(e.target.value);
      } else if (e.target.name === "phone") {
          setPhone(e.target.value);
      }
  }

  function updatePreviewCompanies(comps) {
    setPreviewCompanies(comps);
  }

  function updatePreviewEducation(schools) {
    setPreviewSchools(schools);
  }

  return (
    <div className="contentBox">
      <div>
        <form>
          <PersonalInfo
            name={name}
            email={email}
            phone={phone}
            handleInputChange={handleInputChange} />
          <WorkExperience updatePreviewCompanies={updatePreviewCompanies}/>
          <Education updatePreviewEducation={updatePreviewEducation} />
          <div className="buttonBox">
            <button className="submitForm" onClick={downloadPDF}>Download PDF</button>
          </div>
        </form>
      </div>
      <div id="preview">
        <Preview
          name={name}
          email={email}
          phone={phone}
          companies={previewCompanies}
          schools={previewSchools} />
      </div>
    </div>
  );
}

export default App;
