import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'
import LogoWhite from '../../assets/logo-white.svg'

const FOOTER_LINKS = {
  services: [
    { key: 'footer.links.services.aiConsulting', href: '/services/artificial-intelligence' },
    { key: 'footer.links.services.softwareModernisation', href: '/services/software-development' },
    { key: 'footer.links.services.discoveryWorkshops', href: '/services/strategic-consultancy' },
    { key: 'footer.links.services.dataAnalytics', href: '/services/data-analytics' },
    { key: 'footer.links.services.viewAll', href: '/services' },
  ],
  company: [
    { key: 'footer.links.company.aboutUs', href: '/about' },
    { key: 'footer.links.company.caseStudies', href: '/case-studies' },
    { key: 'footer.links.company.careers', href: '/careers' },
    { key: 'footer.links.company.blog', href: '/blog' },
    { key: 'footer.links.company.contact', href: '/contact' },
  ],
  legal: [
    { key: 'footer.links.legal.legal', href: '#' },
    { key: 'footer.links.legal.ethics', href: '#' },
    { key: 'footer.links.legal.privacy', href: '#' },
    { key: 'footer.links.legal.cookies', href: '#' },
  ],
}

const SOCIAL_LINKS = [
  {
    key: 'footer.social.linkedin',
    href: 'https://www.linkedin.com/company/one-beyond/',
    label: 'LinkedIn',
    icon: LinkedInIcon,
  },
  {
    key: 'footer.social.twitter',
    href: 'https://twitter.com/onebeyondltd',
    label: 'X (Twitter)',
    icon: XIcon,
  },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <Link to="/" aria-label={t('nav.logoAlt')} className={styles.logoLink}>
            <img src={LogoWhite} alt={t('nav.logoAlt')} className={styles.logo} />
          </Link>
          <p className={styles.brandDesc}>{t('footer.brandDesc')}</p>
          <ul className={styles.socials}>
            {SOCIAL_LINKS.map(({ key, href, label, icon: Icon }) => (
              <li key={key}>
                <a
                  href={href}
                  aria-label={label}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links columns */}
        <nav className={styles.linksGrid} aria-label={t('footer.navAriaLabel')}>
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>{t('footer.cols.services')}</h3>
            <ul className={styles.linkList}>
              {FOOTER_LINKS.services.map((l) => (
                <li key={l.key}>
                  <Link to={l.href} className={styles.link}>
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>{t('footer.cols.company')}</h3>
            <ul className={styles.linkList}>
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.key}>
                  <Link to={l.href} className={styles.link}>
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>{t('footer.cols.legal')}</h3>
            <ul className={styles.linkList}>
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l.key}>
                  <Link to={l.href} className={styles.link}>
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p className={styles.legal}>{t('footer.legalLine1')}</p>
          <p className={styles.legal}>{t('footer.legalLine2')}</p>
          <p className={styles.copyright}>
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
