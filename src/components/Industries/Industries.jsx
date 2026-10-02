import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Industries.module.css'

const INDUSTRIES = [
  { key: 'industries.sme', href: '/about#industries' },
  { key: 'industries.hospitality', href: '/about#industries' },
  { key: 'industries.government', href: '/about#industries' },
  { key: 'industries.sport', href: '/about#industries' },
  { key: 'industries.largeEnterprise', href: '/about#industries' },
  { key: 'industries.nonprofits', href: '/about#industries' },
]

export default function Industries() {
  const { t } = useTranslation()

  return (
    <section id="industries" className={`ob-strip ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <span className="section-label">{t('industries.label')}</span>
            <h2 className={styles.heading}>{t('industries.heading')}</h2>
            <p className={styles.body}>{t('industries.body')}</p>
            <Link to="/contact" className="btn btn--primary">
              {t('industries.seeAll')}
              <svg className="arrow-icon" viewBox="0 0 9 15" aria-hidden="true">
                <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
              </svg>
            </Link>
          </div>

          <ul className={styles.grid}>
            {INDUSTRIES.map((ind) => (
              <li key={ind.key}>
                <Link to={ind.href} className={styles.card}>
                  <span className={styles.cardTitle}>{t(`${ind.key}.title`)}</span>
                  <span className={styles.cardLink}>
                    {t('industries.readMore')}
                    <svg viewBox="0 0 9 15" className={styles.arrow} aria-hidden="true">
                      <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
