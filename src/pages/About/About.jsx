import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Layout from '../../components/Layout/Layout'
import styles from './About.module.css'

const STATS = [
  { key: 'about.stats.years' },
  { key: 'about.stats.clients' },
  { key: 'about.stats.projects' },
  { key: 'about.stats.team' },
]

const VALUES = [
  { key: 'about.values.collaboration', icon: 'collaboration' },
  { key: 'about.values.innovation', icon: 'innovation' },
  { key: 'about.values.quality', icon: 'quality' },
  { key: 'about.values.transparency', icon: 'transparency' },
]

const INDUSTRIES = [
  { key: 'industries.sme' },
  { key: 'industries.hospitality' },
  { key: 'industries.government' },
  { key: 'industries.sport' },
  { key: 'industries.largeEnterprise' },
  { key: 'industries.nonprofits' },
  { key: 'industries.fintech', fallback: 'FinTech & Finance' },
  { key: 'industries.healthcare', fallback: 'Healthcare' },
]

function ValueIcon({ name }) {
  const icons = {
    collaboration: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="16" cy="14" r="6" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="14" r="6" stroke="currentColor" strokeWidth="2.5" />
        <path d="M4 38c0-6.627 5.373-12 12-12h16c6.627 0 12 5.373 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 26v8M20 30h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    innovation: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 6a14 14 0 0 1 0 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 6a14 14 0 0 0 0 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
        <path d="M20 34h8M22 38h4M24 42v-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 2v4M24 38v4M2 20h4M42 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    quality: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 4L8 10v14c0 10.5 7 19.6 16 22 9-2.4 16-11.5 16-22V10L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M17 24l5 5 9-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    transparency: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 16v8l6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 12v-4M24 40v-4M8 24H4M44 24h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  }
  return icons[name] || null
}

export default function About() {
  const { t } = useTranslation()

  return (
    <Layout>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <p className="section-label">{t('about.label')}</p>
          <h1 className={styles.heroHeading}>{t('about.heading')}</h1>
          <p className={styles.heroSubheading}>{t('about.subheading')}</p>
        </div>
      </section>

      {/* Mission */}
      <section className={`ob-strip ${styles.mission}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionText}>
              <span className="section-label">{t('about.mission.label')}</span>
              <h2 className={styles.sectionHeading}>{t('about.mission.heading')}</h2>
              <p className={styles.para}>{t('about.mission.body1')}</p>
              <p className={styles.para}>{t('about.mission.body2')}</p>
              <Link to="/contact" className="btn btn--primary">
                {t('about.mission.cta')}
                <svg className="arrow-icon" viewBox="0 0 9 15" aria-hidden="true">
                  <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
                </svg>
              </Link>
            </div>
            <div className={styles.missionVisual}>
              <div className={styles.missionAccentBox}>
                <p className={styles.missionQuote}>{t('about.mission.quote')}</p>
                <span className={styles.missionQuoteAttrib}>{t('about.mission.quoteAttrib')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <ul className={styles.statsGrid}>
            {STATS.map((s) => (
              <li key={s.key} className={styles.statCard}>
                <span className={styles.statNumber}>{t(`${s.key}.number`)}</span>
                <span className={styles.statLabel}>{t(`${s.key}.label`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className={`ob-strip ${styles.valuesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label">{t('about.values.label')}</span>
            <h2 className={styles.sectionHeading}>{t('about.values.heading')}</h2>
            <p className={styles.sectionSubheading}>{t('about.values.subheading')}</p>
          </div>
          <ul className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <li key={v.key} className={styles.valueCard}>
                <div className={styles.valueIcon} aria-hidden="true">
                  <ValueIcon name={v.icon} />
                </div>
                <h3 className={styles.valueTitle}>{t(`${v.key}.title`)}</h3>
                <p className={styles.valueBody}>{t(`${v.key}.body`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className={`ob-strip ${styles.approach}`}>
        <div className="container">
          <div className={styles.approachGrid}>
            <div className={styles.approachText}>
              <span className="section-label">{t('about.approach.label')}</span>
              <h2 className={styles.sectionHeading}>{t('about.approach.heading')}</h2>
              <p className={styles.para}>{t('about.approach.body1')}</p>
              <p className={styles.para}>{t('about.approach.body2')}</p>
            </div>
            <div className={styles.approachSteps}>
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className={styles.approachStep}>
                  <div className={styles.stepDot}>
                    <span className={styles.stepNumber}>{n}</span>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{t(`about.approach.step${n}.title`)}</h3>
                    <p className={styles.stepDesc}>{t(`about.approach.step${n}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className={`ob-strip ${styles.industriesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label">{t('industries.label')}</span>
            <h2 className={styles.sectionHeading}>{t('about.industries.heading')}</h2>
            <p className={styles.sectionSubheading}>{t('about.industries.body')}</p>
          </div>
          <ul className={styles.industriesGrid}>
            {INDUSTRIES.map((ind) => (
              <li key={ind.key} className={styles.industryCard}>
                <span className={styles.industryTitle}>{t(`${ind.key}.title`, ind.fallback)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className={`ob-strip ${styles.faqSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label">{t('about.faq.label')}</span>
            <h2 className={styles.sectionHeading}>{t('about.faq.heading')}</h2>
          </div>
          <div className={styles.faqList}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <FAQItem key={n} q={t(`about.faq.q${n}`)} a={t(`about.faq.a${n}`)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaHeading}>{t('about.cta.heading')}</h2>
          <p className={styles.ctaBody}>{t('about.cta.body')}</p>
          <div className={styles.ctaActions}>
            <Link to="/contact" className="btn btn--primary">
              {t('nav.cta')}
              <svg className="arrow-icon" viewBox="0 0 9 15" aria-hidden="true">
                <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
              </svg>
            </Link>
            <Link to="/careers" className="btn btn--outline">
              {t('about.cta.careers')}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function FAQItem({ q, a }) {
  return (
    <details className={styles.faqItem}>
      <summary className={styles.faqQ}>
        {q}
        <svg className={styles.faqChevron} viewBox="0 0 16 10" fill="currentColor" aria-hidden="true">
          <path d="M1 1l7 7 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </summary>
      <p className={styles.faqA}>{a}</p>
    </details>
  )
}
