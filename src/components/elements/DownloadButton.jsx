import { aboutData } from '../../data/about';

export default function DownloadButton() {
  return (
    <a 
      href={aboutData.cvUrl} 
      className="download-btn"
      download="Lathitha_Buyana_CV.pdf"
    >
      Download CV
    </a>
  );
}