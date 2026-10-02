import { useTranslation } from 'react-i18next'
import styles from './CaseStudies.module.css'

const CASE_STUDIES = [
  {
    key: 'caseStudies.haymarket',
    tag: 'caseStudies.tagDedicatedTeam',
    logo: '/images/clients/haymarket.svg',
    logoAlt: 'Haymarket',
    href: '#',
  },
  {
    key: 'caseStudies.infinitas',
    tag: 'caseStudies.tagWebApp',
    logo: '/images/clients/infinitas.svg',
    logoAlt: 'Infinitas Learning',
    href: '#',
  },
  {
    key: 'caseStudies.fineRare',
    tag: 'caseStudies.tagWebApp',
    logo: '/images/clients/fine-rare.svg',
    logoAlt: 'Fine + Rare',
    href: '#',
  },
  {
    key: 'caseStudies.costa',
    tag: 'caseStudies.tagModernisation',
    logo: '/images/clients/costa-express.svg',
    logoAlt: 'Costa Express',
    href: '#',
  },
  {
    key: 'caseStudies.yeo',
    tag: 'caseStudies.tagMobile',
    logo: '/images/clients/yeo.png',
    logoAlt: 'Yeo Messaging',
    href: '#',
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

export default function CaseStudies() {
  const { t } = useTranslation()

  return (
    <section id="case-studies" className={`ob-strip ${styles.section}`}>
      <div className="container">
        {/* Happy clients logos bar */}
        <div className={styles.logosBar}>
          <p className={styles.logosLabel}>{t('caseStudies.happyClients')}</p>
          <ul className={styles.logosList}>
            {CLIENT_LOGOS.map((logo) => (
              <li key={logo.alt}>
                <img src={logo.src} alt={logo.alt} className={styles.clientLogo} />
              </li>
            ))}
          </ul>
        </div>

        {/* Section header */}
        <div className={styles.header}>
          <span className="section-label">{t('caseStudies.label')}</span>
          <h2 className={styles.heading}>{t('caseStudies.heading')}</h2>
        </div>

        {/* Cards grid */}
        <ul className={styles.grid}>
          {CASE_STUDIES.map((cs) => (
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
                <h3 className={styles.cardTitle}>{t(`${cs.key}.title`)}</h3>
                <p className={styles.cardDesc}>{t(`${cs.key}.desc`)}</p>
              </div>
              <a href={cs.href} className={styles.cardLink}>
                {t('caseStudies.readMore')}
                <svg viewBox="0 0 9 15" className={styles.cardArrow} aria-hidden="true">
                  <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        {/* Testimonial */}
        <blockquote className={styles.testimonial}>
          <p className={styles.testimonialText}>{t('caseStudies.testimonialText')}</p>
          <footer className={styles.testimonialAuthor}>
            <strong>{t('caseStudies.testimonialName')}</strong>
            <span>{t('caseStudies.testimonialRole')}</span>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
