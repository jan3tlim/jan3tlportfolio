import { about, experience, skills, profile } from '../data/content.js'
import { useReveal } from './useReveal.js'

export function About() {
  const [ref, shown] = useReveal()
  return (
    <section id="about" className="section section--alt">
      <div ref={ref} className={`container reveal ${shown ? 'in' : ''}`}>
        <div className="section__head">
          <h2 className="section__title">{about.heading}</h2>
        </div>
        <div className="about">
          <div className="about__body">
            {about.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <ul className="about__highlights">
            {about.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const [ref, shown] = useReveal()
  return (
    <section id="experience" className="section">
      <div ref={ref} className={`container reveal ${shown ? 'in' : ''}`}>
        <div className="section__head">
          <h2 className="section__title">Experience</h2>
        </div>
        <ol className="timeline">
          {experience.map((e, i) => (
            <li key={i} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <div className="timeline__top">
                  <h3>{e.role}</h3>
                  <span className="timeline__period">{e.period}</span>
                </div>
                <p className="timeline__org">{e.org}</p>
                <ul>
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Skills() {
  const [ref, shown] = useReveal()
  return (
    <section id="skills" className="section section--alt">
      <div ref={ref} className={`container reveal ${shown ? 'in' : ''}`}>
        <div className="section__head">
          <h2 className="section__title">Skills</h2>
        </div>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group} className="skills__group">
              <h3>{s.group}</h3>
              <div className="skills__items">
                {s.items.map((item) => (
                  <span key={item} className="tag tag--lg">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <h2 className="section__title">Let’s connect</h2>
        <p className="contact__lead">
          I’m open to internships and new projects. The fastest way to reach me is email.
        </p>
        <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact__links">
          {profile.links.github && (
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {profile.links.linkedin && (
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          {profile.links.resume && (
            <a href={profile.links.resume} target="_blank" rel="noreferrer">Résumé</a>
          )}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>© {profile.name}</span>
        <span className="footer__note">Built with React + Vite</span>
      </div>
    </footer>
  )
}
