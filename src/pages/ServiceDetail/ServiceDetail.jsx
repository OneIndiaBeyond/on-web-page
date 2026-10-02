import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Layout from '../../components/Layout/Layout'
import styles from './ServiceDetail.module.css'

const SERVICE_META = {
  'artificial-intelligence': {
    key: 'serviceDetail.ai',
    color: '#8b5cf6',
  },
  'software-development': {
    key: 'serviceDetail.softwareDev',
    color: '#c5268f',
  },
  'web-app-development': {
    key: 'serviceDetail.webApp',
    color: '#0ea5e9',
  },
  'mobile-app-development': {
    key: 'serviceDetail.mobileApp',
    color: '#10b981',
  },
  'dedicated-delivery-teams': {
    key: 'serviceDetail.dedicatedTeams',
    color: '#f59e0b',
  },
  'ux-ui-design': {
    key: 'serviceDetail.uxUi',
    color: '#ef4444',
  },
  'data-analytics': {
    key: 'serviceDetail.dataAnalytics',
    color: '#3b82f6',
  },
  'systems-integration': {
    key: 'serviceDetail.systemsIntegration',
    color: '#8b5cf6',
  },
  'strategic-consultancy': {
    key: 'serviceDetail.strategicConsultancy',
    color: '#c5268f',
  },
  'systems-security': {
    key: 'serviceDetail.systemsSecurity',
    color: '#64748b',
  },
  'support-change': {
    key: 'serviceDetail.supportChange',
    color: '#0ea5e9',
  },
  'application-migrations': {
    key: 'serviceDetail.appMigrations',
    color: '#10b981',
  },
  'erp-crm-systems': {
    key: 'serviceDetail.erpCrm',
    color: '#f59e0b',
  },
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const { t } = useTranslation()

  const meta = SERVICE_META[slug]

  if (!meta) {
    return (
      <Layout>
        <div className={styles.notFound}>
          <div className="container">
            <h1>{t('serviceDetail.notFound.heading')}</h1>
            <p>{t('serviceDetail.notFound.body')}</p>
            <Link to="/services" className="btn btn--primary">
              {t('serviceDetail.notFound.cta')}
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  const { key } = meta

  const benefits = [
    t(`${key}.benefit1`),
    t(`${key}.benefit2`),
    t(`${key}.benefit3`),
    t(`${key}.benefit4`),
  ]

  return (
    <Layout>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <Link to="/services" className={styles.breadcrumb}>
            ← {t('serviceDetail.backToServices')}
          </Link>
          <p className="section-label">{t('servicesPage.label')}</p>
          <h1 className={styles.heading}>{t(`${key}.heading`)}</h1>
          <p className={styles.subheading}>{t(`${key}.subheading`)}</p>
          <Link to="/contact" className="btn btn--primary">
            {t('serviceDetail.cta')}
            <svg className="arrow-icon" viewBox="0 0 9 15" aria-hidden="true">
              <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Body */}
      <section className={`ob-strip ${styles.body}`}>
        <div className="container">
          <div className={styles.bodyGrid}>
            <div className={styles.bodyText}>
              <h2 className={styles.bodyHeading}>{t(`${key}.bodyHeading`)}</h2>
              <p className={styles.bodyPara}>{t(`${key}.body1`)}</p>
              <p className={styles.bodyPara}>{t(`${key}.body2`)}</p>
            </div>

            <div className={styles.benefits}>
              <h3 className={styles.benefitsHeading}>{t('serviceDetail.benefitsHeading')}</h3>
              <ul className={styles.benefitsList}>
                {benefits.map((b, i) => (
                  <li key={i} className={styles.benefitItem}>
                    <span className={styles.checkmark} aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className={`ob-strip ${styles.process}`}>
        <div className="container">
          <h2 className={styles.processHeading}>{t('serviceDetail.processHeading')}</h2>
          <div className={styles.processSteps}>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className={styles.step}>
                <div className={styles.stepNum}>{n}</div>
                <h3 className={styles.stepTitle}>{t(`serviceDetail.process.step${n}.title`)}</h3>
                <p className={styles.stepDesc}>{t(`serviceDetail.process.step${n}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaHeading}>{t('serviceDetail.ctaSection.heading')}</h2>
          <p className={styles.ctaBody}>{t('serviceDetail.ctaSection.body')}</p>
          <div className={styles.ctaActions}>
            <Link to="/contact" className="btn btn--primary">
              {t('nav.cta')}
              <svg className="arrow-icon" viewBox="0 0 9 15" aria-hidden="true">
                <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
              </svg>
            </Link>
            <Link to="/case-studies" className="btn btn--outline">
              {t('serviceDetail.ctaSection.caseStudies')}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
