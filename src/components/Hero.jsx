import { heroData } from '../data/home';

function Hero() {
  return (
    <section className="hero">
      <h1>{heroData.name}</h1>
      <h2>{heroData.title}</h2>
      <p>{heroData.intro}</p>
      <button className="cta-button">{heroData.ctaButton}</button>
    </section>
  );
}

export default Hero;