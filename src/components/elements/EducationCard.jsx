export default function EducationCard({ item }) {
  return (
    <div className="education-card">
      <div className="education-header">
        <h4>{item.title}</h4>
        {item.inProgress && (
          <span className="progress-badge">In Progress</span>
        )}
      </div>
      <p className="institution">{item.institution}</p>
      <p className="year">{item.year}</p>
    </div>
  );
}