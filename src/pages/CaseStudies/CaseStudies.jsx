import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Layout from '../../components/Layout/Layout'
import styles from './CaseStudies.module.css'

const CASE_STUDIES = [
  {
    key: 'caseStudies.haymarket',
    tag: 'caseStudies.tagDedicatedTeam',
    logo: '/images/clients/haymarket.svg',
    logoAlt: 'Haymarket',
    category: 'dedicated-team',
  },
  {
    key: 'caseStudies.infinitas',
    tag: 'caseStudies.tagWebApp',
    logo: '/images/clients/infinitas.svg',
    logoAlt: 'Infinitas Learning',
    category: 'web-app',
  },
  {
    key: 'caseStudies.fineRare',
    tag: 'caseStudies.tagWebApp',
    logo: '/images/clients/fine-rare.svg',
    logoAlt: 'Fine + Rare',
    category: 'web-app',
  },
  {
    key: 'caseStudies.costa',
    tag: 'caseStudies.tagModernisation',
    logo: '/images/clients/costa-express.svg',
    logoAlt: 'Costa Express',
    category: 'modernisation',
  },
  {
    key: 'caseStudies.yeo',
    tag: 'caseStudies.tagMobile',
    logo: '/images/clients/yeo.png',
    logoAlt: 'Yeo Messaging',
    category: 'mobile',
  },
]

const CLIENT_LOGOS = [
  { src: '/images/clients/nhs.png', alt: 'NHS' },
  { src: '/images/clients/haymarket-logo.png', alt: 'Haymarket' },
  { src: '/images/clients/lidl.png', alt: 'Lidl' },
  { src: '/images/clients/british-gas.svg', alt: 'British Gas' },
  { src: '/images/clients/gails.svg', alt: "Gail's" },
  { src: '/images/clients/butlins.svg', alt: 'Butlins' },
]

const FILTERS = [
  { key: 'all', label: 'caseStudiesPage.filterAll' },
  { key: 'dedicated-team', label: 'caseStudies.tagDedicatedTeam' },
  { key: 'web-app', label: 'caseStudies.tagWebApp' },
  { key: 'modernisation', label: 'caseStudies.tagModernisation' },
  { key: 'mobile', label: 'caseStudies.tagMobile' },
]

export default function CaseStudiesPage() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === activeFilter)

  return (
    <Layout>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <p className="section-label">{t('caseStudiesPage.label')}</p>
          <h1 className={styles.heroHeading}>{t('caseStudiesPage.heading')}</h1>
          <p className={styles.heroSubheading}>{t('caseStudiesPage.subheading')}</p>
        </div>
      </section>

      {/* Client logos */}
      <section className={styles.logosSection}>
        <div className="container">
          <p className={styles.logosLabel}>{t('caseStudies.happyClients')}</p>
          <ul className={styles.logosList}>
            {CLIENT_LOGOS.map((logo) => (
              <li key={logo.alt}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={styles.clientLogo}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case studies grid */}
      <section className={`ob-strip ${styles.gridSection}`}>
        <div className="container">
          {/* Filters */}
          <div className={styles.filters} role="group" aria-label={t('caseStudiesPage.filterLabel')}>
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`${styles.filterBtn} ${activeFilter === f.key ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {t(f.label)}
              </button>
            ))}
          </div>

          <ul className={styles.grid}>
            {filtered.map((cs) => (
              <li key={cs.key} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.tag}>{t(cs.tag)}</span>
                  <div className={styles.logoWrapper}>
                    <img
                      src={cs.logo}
                      alt={cs.logoAlt}
                      className={styles.cardLogo}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{t(`${cs.key}.title`)}</h2>
                  <p className={styles.cardDesc}>{t(`${cs.key}.desc`)}</p>
                </div>
                <Link to="#" className={styles.cardLink}>
                  {t('caseStudies.readMore')}
                  <svg viewBox="0 0 9 15" className={styles.cardArrow} aria-hidden="true">
                    <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      <section className={`ob-strip ${styles.testimonialSection}`}>
        <div className="container">
          <blockquote className={styles.testimonial}>
            <p className={styles.testimonialText}>{t('caseStudies.testimonialText')}</p>
            <footer className={styles.testimonialAuthor}>
              <strong>{t('caseStudies.testimonialName')}</strong>
              <span>{t('caseStudies.testimonialRole')}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaHeading}>{t('caseStudiesPage.cta.heading')}</h2>
          <p className={styles.ctaBody}>{t('caseStudiesPage.cta.body')}</p>
          <Link to="/contact" className="btn btn--primary">
            {t('nav.cta')}
            <svg className="arrow-icon" viewBox="0 0 9 15" aria-hidden="true">
              <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
            </svg>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
