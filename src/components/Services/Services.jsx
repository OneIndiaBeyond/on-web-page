import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Services.module.css'

const SERVICES = [
  { key: 'services.ai', icon: 'ai', href: '/services/artificial-intelligence' },
  { key: 'services.webApp', icon: 'web', href: '/services/web-app-development' },
  { key: 'services.mobile', icon: 'mobile', href: '/services/mobile-app-development' },
  { key: 'services.dedicatedTeams', icon: 'teams', href: '/services/dedicated-delivery-teams' },
  { key: 'services.erpCrm', icon: 'erp', href: '/services/erp-crm-systems' },
  { key: 'services.dataAnalytics', icon: 'data', href: '/services/data-analytics' },
  { key: 'services.systemsIntegration', icon: 'integration', href: '/services/systems-integration' },
  { key: 'services.uxUi', icon: 'ux', href: '/services/ux-ui-design' },
  { key: 'services.discoveryWorkshops', icon: 'discovery', href: '/services/strategic-consultancy' },
  { key: 'services.security', icon: 'security', href: '/services/systems-security' },
  { key: 'services.appSupport', icon: 'support', href: '/services/support-change' },
  { key: 'services.migrations', icon: 'migrations', href: '/services/application-migrations' },
]

const SERVICE_ICONS = {
  ai: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10.1 10.1l4.25 4.25M33.65 33.65l4.25 4.25M10.1 37.9l4.25-4.25M33.65 14.35l4.25-4.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 36v6M32 36v6M10 42h28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 18h40" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="10" cy="13" r="2" fill="currentColor" />
      <circle cx="16" cy="13" r="2" fill="currentColor" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="14" y="4" width="20" height="40" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M21 8h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="38" r="2" fill="currentColor" />
    </svg>
  ),
  teams: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M4 40c0-6.627 5.373-12 12-12M32 28c6.627 0 12 5.373 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 40c0-6.627 3.582-12 8-12s8 5.373 8 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  erp: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="26" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="4" y="26" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="26" y="26" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 36L20 24l8 8L40 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 12h8v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 44h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  integration: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="12" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="36" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 24h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  ),
  ux: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M15 20h18M15 26h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="34" cy="26" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  discovery: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="2.5" />
      <path d="M32 32l8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 16v6l4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 4L8 10v14c0 10.5 7 19.6 16 22 9-2.4 16-11.5 16-22V10L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M17 24l5 5 9-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 6v10M24 32v10M6 24h10M32 24h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  migrations: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 24h32M30 16l8 8-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="6" y="10" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" />
      <rect x="28" y="26" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
}

export default function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className={`ob-strip ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">{t('services.label')}</span>
          <h2 className={styles.heading}>{t('services.heading')}</h2>
          <p className={styles.subheading}>{t('services.subheading')}</p>
        </div>

        <ul className={styles.grid}>
          {SERVICES.map((svc) => (
            <li key={svc.key}>
              <Link to={svc.href} className={styles.card}>
                <div className={styles.iconBox} aria-hidden="true">
                  {SERVICE_ICONS[svc.icon]}
                </div>
                <span className={styles.cardTitle}>{t(`${svc.key}.title`)}</span>
                <span className={styles.cardArrow} aria-hidden="true">
                  <svg viewBox="0 0 9 15" fill="none">
                    <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <Link to="/services" className="btn btn--outline">
            {t('services.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  )
}
