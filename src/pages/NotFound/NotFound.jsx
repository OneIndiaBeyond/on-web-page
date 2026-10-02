import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Layout from '../../components/Layout/Layout'
import styles from './NotFound.module.css'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <Layout>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.inner}>
            <p className={styles.errorCode}>404</p>
            <h1 className={styles.heading}>{t('notFound.heading')}</h1>
            <p className={styles.body}>{t('notFound.body')}</p>
            <div className={styles.actions}>
              <Link to="/" className="btn btn--primary">
                {t('notFound.home')}
                <svg className="arrow-icon" viewBox="0 0 9 15" aria-hidden="true">
                  <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
                </svg>
              </Link>
              <Link to="/contact" className="btn btn--outline">
                {t('notFound.contact')}
              </Link>
            </div>

            <ul className={styles.links}>
              <li>
                <Link to="/services" className={styles.quickLink}>
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className={styles.quickLink}>
                  {t('nav.clients')}
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.quickLink}>
                  {t('nav.company')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className={styles.quickLink}>
                  {t('nav.insights')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
