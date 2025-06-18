export default function SkillTag({ name, level }) {
  const getIcon = () => {
    switch(level) {
      case 'advanced': return '🟢';
      case 'intermediate': return '🔵';
      default: return '⚪';
    }
  };

  return (
    <div className="skill-tag">
      <span className="skill-icon">{getIcon()}</span>
      <span className="skill-name">{name}</span>
    </div>
  );
}