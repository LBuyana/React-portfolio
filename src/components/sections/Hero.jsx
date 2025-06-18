import { heroData } from '../../data/home';

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">{heroData.name}</h1>
      <h2 className="hero-subtitle">{heroData.title}</h2>
      <p className="hero-description">{heroData.intro}</p>
      <button className="hero-button">
        {heroData.ctaButton}
      </button>
    </section>
  );
}