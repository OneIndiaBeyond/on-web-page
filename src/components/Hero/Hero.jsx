import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className={styles.hero} aria-label={t('hero.ariaLabel')}>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.bgPattern} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={`section-label ${styles.label}`}>{t('hero.label')}</p>
          <h1 className={styles.headline}>
            <span className={styles.headlineTeal}>{t('hero.headlineTeal')}</span>
            <br />
            <span className={styles.headlineWhite}>{t('hero.headlineWhite')}</span>
          </h1>
          <p className={styles.subheadline}>{t('hero.subheadline')}</p>
          <div className={styles.actions}>
            <Link to="/services" className="btn btn--primary">
              {t('hero.ctaPrimary')}
              <ArrowIcon />
            </Link>
            <Link to="/contact" className="btn btn--outline-white">
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollDot} />
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 9 15"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
    </svg>
  )
}
