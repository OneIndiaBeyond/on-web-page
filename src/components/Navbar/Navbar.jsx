import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Navbar.module.css'
import LogoWhite from '../../assets/logo-white.svg'
import LogoBlack from '../../assets/logo-black.svg'

const NAV_ITEMS = [
  {
    key: 'nav.services',
    href: '/services',
    children: [
      { key: 'nav.strategicConsultancy', href: '/services/strategic-consultancy' },
      { key: 'nav.artificialIntelligence', href: '/services/artificial-intelligence' },
      { key: 'nav.softwareDevelopment', href: '/services/software-development' },
      { key: 'nav.webAppDevelopment', href: '/services/web-app-development' },
      { key: 'nav.mobileAppDevelopment', href: '/services/mobile-app-development' },
      { key: 'nav.dedicatedDeliveryTeams', href: '/services/dedicated-delivery-teams' },
      { key: 'nav.uxUiDesign', href: '/services/ux-ui-design' },
      { key: 'nav.supportChange', href: '/services/support-change' },
    ],
  },
  { key: 'nav.clients', href: '/case-studies' },
  {
    key: 'nav.company',
    href: '/about',
    children: [
      { key: 'nav.aboutUs', href: '/about' },
      { key: 'nav.ourApproach', href: '/about#approach' },
      { key: 'nav.faqs', href: '/about#faqs' },
      { key: 'nav.careers', href: '/careers' },
    ],
  },
  { key: 'nav.insights', href: '/blog' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const location = useLocation()
  const [isSticky, setIsSticky] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navbar is transparent on homepage, solid on all other pages
  const isHome = location.pathname === '/'
  const useDarkLogo = isSticky || !isHome

  const toggleDropdown = (key) =>
    setOpenDropdown((prev) => (prev === key ? null : key))

  const closeMobile = () => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }

  return (
    <header
      className={`${styles.header} ${isSticky ? styles.sticky : ''} ${!isHome ? styles.solidBg : ''}`}
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo} aria-label={t('nav.logoAlt')}>
          <img
            src={useDarkLogo ? LogoBlack : LogoWhite}
            alt={t('nav.logoAlt')}
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label={t('nav.ariaLabel')}>
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li
                key={item.key}
                className={`${styles.navItem} ${item.children ? styles.hasDropdown : ''}`}
                onMouseEnter={() => item.children && setOpenDropdown(item.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`${styles.navLink} ${useDarkLogo ? styles.navLinkDark : ''}`}
                  aria-haspopup={item.children ? 'true' : undefined}
                  aria-expanded={openDropdown === item.key ? 'true' : undefined}
                >
                  {t(item.key)}
                  {item.children && (
                    <svg className={styles.chevron} viewBox="0 0 16 9.827" aria-hidden="true">
                      <path d="M16 1.842L14.157-.001 7.988 5.932 1.846 0 .003 1.843l7.984 7.984h.031z" />
                    </svg>
                  )}
                </Link>
                {item.children && openDropdown === item.key && (
                  <ul className={styles.dropdown} role="menu">
                    {item.children.map((child) => (
                      <li key={child.key} role="none">
                        <Link
                          to={child.href}
                          className={styles.dropdownLink}
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {t(child.key)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className={`btn btn--primary ${styles.ctaBtn}`}
        >
          {t('nav.cta')}
        </Link>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={t('nav.menuToggle')}
          aria-expanded={mobileOpen}
        >
          <span
            className={`${styles.bar} ${useDarkLogo ? styles.barDark : ''} ${mobileOpen ? styles.barOpen1 : ''}`}
          />
          <span
            className={`${styles.bar} ${useDarkLogo ? styles.barDark : ''} ${mobileOpen ? styles.barOpen2 : ''}`}
          />
          <span
            className={`${styles.bar} ${useDarkLogo ? styles.barDark : ''} ${mobileOpen ? styles.barOpen3 : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className={styles.mobileNav} aria-label={t('nav.ariaLabel')}>
          <ul className={styles.mobileNavList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.key} className={styles.mobileNavItem}>
                {item.children ? (
                  <>
                    <button
                      className={styles.mobileNavBtn}
                      onClick={() => toggleDropdown(item.key)}
                      aria-expanded={openDropdown === item.key}
                    >
                      {t(item.key)}
                      <svg
                        className={`${styles.chevron} ${openDropdown === item.key ? styles.chevronUp : ''}`}
                        viewBox="0 0 16 9.827"
                        aria-hidden="true"
                      >
                        <path d="M16 1.842L14.157-.001 7.988 5.932 1.846 0 .003 1.843l7.984 7.984h.031z" />
                      </svg>
                    </button>
                    {openDropdown === item.key && (
                      <ul className={styles.mobileDropdown}>
                        {item.children.map((child) => (
                          <li key={child.key}>
                            <Link
                              to={child.href}
                              className={styles.mobileDropdownLink}
                              onClick={closeMobile}
                            >
                              {t(child.key)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={styles.mobileNavLink}
                    onClick={closeMobile}
                  >
                    {t(item.key)}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className={`btn btn--primary ${styles.mobileCta}`}
                onClick={closeMobile}
              >
                {t('nav.cta')}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
