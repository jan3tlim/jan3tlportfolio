import { useMemo, useState } from 'react'
import { projects, disciplines } from '../data/content.js'
import { useReveal } from './useReveal.js'

const filters = [{ key: 'all', label: 'All' }, ...disciplines]

function ProjectCard({ p }) {
  const [ref, shown] = useReveal()
  const disc = disciplines.find((d) => d.key === p.category)
  return (
    <article ref={ref} className={`card reveal ${shown ? 'in' : ''}`}>
      <div className={`card__thumb cat--${p.category}`}>
        {p.image ? (
          <img src={p.image} alt={p.title} loading="lazy" />
        ) : (
          <span className="card__placeholder">{disc?.label ?? p.category}</span>
        )}
        <span className="card__year">{p.year}</span>
      </div>
      <div className="card__body">
        <div className="card__head">
          <h3>{p.title}</h3>
          <span className={`badge cat--${p.category}`}>{disc?.label}</span>
        </div>
        <p className="card__blurb">{p.blurb}</p>
        <div className="card__tags">
          {p.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="card__links">
          {p.links?.live && (
            <a href={p.links.live} target="_blank" rel="noreferrer">Live ↗</a>
          )}
          {p.links?.code && (
            <a href={p.links.code} target="_blank" rel="noreferrer">Code ↗</a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')

  const shown = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Projects</h2>
          <p className="section__sub">Filter by discipline.</p>
        </div>

        <div className="filterbar" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={active === f.key}
              className={`filterbar__btn ${active === f.key ? 'is-active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
              <span className="filterbar__count">
                {f.key === 'all'
                  ? projects.length
                  : projects.filter((p) => p.category === f.key).length}
              </span>
            </button>
          ))}
        </div>

        <div className="grid">
          {shown.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
