export default function CertificationModal({ cert, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h3>{cert.name} ({cert.year})</h3>
        <p>{cert.description}</p>
        <p>Issued by: {cert.issuer}</p>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}