import './styles/App.css';
import PersonalInfo from './components/personalInfo';
import WorkExperience from './components/workExperience';
import Education from './components/education'
import html2pdf from 'html2pdf.js';

function downloadPDF(e) {
  e.preventDefault();
  const form = document.querySelector('form');
  let opt = {
    margin: 1,
    filename: 'MyCV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'cm', format: 'letter', orientation: 'portrait'},
  }
  html2pdf(form, opt);
}

function App() {
  return (
    <div>
      <form>
        <PersonalInfo />
        <WorkExperience />
        <Education />
        <div className="buttonBox">
          <button className="submitForm" onClick={downloadPDF}>Download PDF</button>
        </div>
      </form>
      
    </div>
  );
}

export default App;
