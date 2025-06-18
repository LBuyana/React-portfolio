import { useState } from 'react';
import { aboutData } from '../../data/about';
import DownloadButton from '../elements/DownloadButton';
import CertificationModal from '../elements/CertificationModal';
import SkillTag from '../elements/SkillTag';

export default function About() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="about-section" id="about">
      <div className="profile-container">
        <div className="profile-photo">
          <img src="/assets/profile.jpg" alt="Lathitha Buyana" />
          <DownloadButton />
        </div>
        
        <div className="bio-text">
          <h2>About Me</h2>
          <p>{aboutData.bio}</p>
        </div>
      </div>

      <div className="about-grid">
        <div className="education">
          <h3>Education</h3>
          <ul className="timeline">
            <li>
              <strong>BCom Information Systems</strong>
              <div>University of the Western Cape (2023)</div>
            </li>
            {aboutData.certifications.map(cert => (
              <li 
                key={cert.id} 
                className="certification"
                onClick={() => setSelectedCert(cert)}
              >
                <strong>{cert.name}</strong>
                <div>({cert.year}) - Click for details</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <div className="skills-grid">
            {aboutData.skills.map((skill, index) => (
              <SkillTag 
                key={index}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedCert && (
        <CertificationModal 
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}