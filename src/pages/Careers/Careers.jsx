import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Layout from '../../components/Layout/Layout'
import styles from './Careers.module.css'

const PERKS = [
  { key: 'careers.perks.flexible', icon: 'clock' },
  { key: 'careers.perks.remote', icon: 'remote' },
  { key: 'careers.perks.growth', icon: 'growth' },
  { key: 'careers.perks.health', icon: 'health' },
  { key: 'careers.perks.team', icon: 'team' },
  { key: 'careers.perks.impact', icon: 'impact' },
]

// Static job listings — in production these would come from an API/CMS
const JOBS = [
  {
    key: 'careers.jobs.seniorDev',
    department: 'engineering',
    location: 'Remote / Farnborough',
    type: 'Full-time',
  },
  {
    key: 'careers.jobs.uxDesigner',
    department: 'design',
    location: 'Remote / Farnborough',
    type: 'Full-time',
  },
  {
    key: 'careers.jobs.projectManager',
    department: 'delivery',
    location: 'Farnborough, Hampshire',
    type: 'Full-time',
  },
  {
    key: 'careers.jobs.dataEngineer',
    department: 'engineering',
    location: 'Remote',
    type: 'Full-time',
  },
]

const DEPT_FILTERS = [
  { key: 'all', label: 'careers.filter.all' },
  { key: 'engineering', label: 'careers.filter.engineering' },
  { key: 'design', label: 'careers.filter.design' },
  { key: 'delivery', label: 'careers.filter.delivery' },
]

function PerkIcon({ name }) {
  const icons = {
    clock: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 14v10l6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    remote: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="10" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 32v6M28 32v6M14 38h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 21h8M16 26h4M30 21h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    growth: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M8 36L20 24l8 8L40 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 12h8v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    health: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 40s-16-9.5-16-22a10 10 0 0 1 16-8 10 10 0 0 1 16 8c0 12.5-16 22-16 22z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M19 24h10M24 19v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    team: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="2.5" />
        <path d="M4 40c0-6.627 5.373-12 12-12M32 28c6.627 0 12 5.373 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 40c0-6.627 3.582-12 8-12s8 5.373 8 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    impact: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 4l4 14h14l-11 8 4 14-11-8-11 8 4-14-11-8h14l4-14z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
  }
  return icons[name] || null
}

export default function Careers() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? JOBS
      : JOBS.filter((j) => j.department === activeFilter)

  return (
    <Layout>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <p className="section-label">{t('careers.label')}</p>
          <h1 className={styles.heroHeading}>{t('careers.heading')}</h1>
          <p className={styles.heroSubheading}>{t('careers.subheading')}</p>
          <a href="#open-roles" className="btn btn--primary">
            {t('careers.seeRoles')}
            <svg className="arrow-icon" viewBox="0 0 9 15" aria-hidden="true">
              <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </section>

      {/* Why One Beyond */}
      <section className={`ob-strip ${styles.why}`}>
        <div className="container">
          <div className={styles.whyHeader}>
            <span className="section-label">{t('careers.whyLabel')}</span>
            <h2 className={styles.sectionHeading}>{t('careers.whyHeading')}</h2>
            <p className={styles.sectionSubheading}>{t('careers.whySubheading')}</p>
          </div>
          <ul className={styles.perksGrid}>
            {PERKS.map((p) => (
              <li key={p.key} className={styles.perkCard}>
                <div className={styles.perkIcon} aria-hidden="true">
                  <PerkIcon name={p.icon} />
                </div>
                <h3 className={styles.perkTitle}>{t(`${p.key}.title`)}</h3>
                <p className={styles.perkDesc}>{t(`${p.key}.desc`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Culture statement */}
      <section className={styles.culture}>
        <div className="container">
          <blockquote className={styles.cultureQuote}>
            <p className={styles.cultureText}>{t('careers.cultureQuote')}</p>
          </blockquote>
        </div>
      </section>

      {/* Open roles */}
      <section id="open-roles" className={`ob-strip ${styles.roles}`}>
        <div className="container">
          <div className={styles.rolesHeader}>
            <h2 className={styles.sectionHeading}>{t('careers.openRoles')}</h2>
            <div className={styles.filters} role="group" aria-label={t('careers.filterLabel')}>
              {DEPT_FILTERS.map((f) => (
                <button
                  key={f.key}
                  className={`${styles.filterBtn} ${activeFilter === f.key ? styles.filterActive : ''}`}
                  onClick={() => setActiveFilter(f.key)}
                >
                  {t(f.label)}
                </button>
              ))}
            </div>
          </div>

          {filtered.length > 0 ? (
            <ul className={styles.jobsList}>
              {filtered.map((job) => (
                <li key={job.key} className={styles.jobCard}>
                  <div className={styles.jobInfo}>
                    <h3 className={styles.jobTitle}>{t(`${job.key}.title`)}</h3>
                    <div className={styles.jobMeta}>
                      <span className={styles.jobDept}>{t(`careers.filter.${job.department}`)}</span>
                      <span className={styles.jobLocation}>
                        <svg viewBox="0 0 16 20" fill="none" className={styles.locationIcon} aria-hidden="true">
                          <path d="M8 0C4.69 0 2 2.69 2 6c0 4.5 6 14 6 14s6-9.5 6-14c0-3.31-2.69-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor" />
                        </svg>
                        {job.location}
                      </span>
                      <span className={styles.jobType}>{job.type}</span>
                    </div>
                    <p className={styles.jobDesc}>{t(`${job.key}.desc`)}</p>
                  </div>
                  <Link to="/contact" className={`btn btn--primary ${styles.applyBtn}`}>
                    {t('careers.apply')}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.noRoles}>{t('careers.noRoles')}</p>
          )}

          <div className={styles.speculative}>
            <p className={styles.speculativeText}>{t('careers.speculative')}</p>
            <Link to="/contact" className="btn btn--outline">
              {t('careers.speculativeCta')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaHeading}>{t('careers.cta.heading')}</h2>
          <p className={styles.ctaBody}>{t('careers.cta.body')}</p>
          <Link to="/contact" className="btn btn--primary">
            {t('nav.cta')}
          </Link>
        </div>
      </section>
    </Layout>
  )
}
