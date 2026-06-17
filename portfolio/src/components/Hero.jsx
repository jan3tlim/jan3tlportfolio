import { profile, disciplines } from '../data/content.js'
import { asset } from '../lib/asset.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">Hello, I’m</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__disciplines">
            {disciplines.map((d, i) => (
              <span key={d.key} className="hero__chip">
                {d.label}
                {i < disciplines.length - 1 && <span className="hero__dot">·</span>}
              </span>
            ))}
          </div>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">View my work</a>
            <a className="btn btn--ghost" href="#contact">Get in touch</a>
          </div>
        </div>

        {profile.photo && (
          <div className="hero__portrait">
            <img src={asset(profile.photo)} alt={profile.photoAlt} />
          </div>
        )}

        <a href="#about" className="hero__scroll" aria-label="Scroll down">
          <span />
        </a>
      </div>
    </section>
  )
}
