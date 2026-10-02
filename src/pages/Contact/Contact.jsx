import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../../components/Layout/Layout'
import styles from './Contact.module.css'

const OFFICES = [
  { key: 'contact.offices.farnborough' },
  { key: 'contact.offices.london' },
]

export default function Contact() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <p className="section-label">{t('contact.label')}</p>
          <h1 className={styles.heroHeading}>{t('contact.heading')}</h1>
          <p className={styles.heroSubheading}>{t('contact.subheading')}</p>
        </div>
      </section>

      {/* Main content */}
      <section className={`ob-strip ${styles.main}`}>
        <div className="container">
          <div className={styles.grid}>
            {/* Contact info */}
            <div className={styles.info}>
              <h2 className={styles.infoHeading}>{t('contact.info.heading')}</h2>
              <p className={styles.infoPara}>{t('contact.info.body')}</p>

              <ul className={styles.contactDetails}>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <PhoneIcon />
                  </span>
                  <div>
                    <span className={styles.contactLabel}>{t('contact.info.phoneLabel')}</span>
                    <a href="tel:01252235422" className={styles.contactValue}>
                      {t('cta.phone')}
                    </a>
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <EmailIcon />
                  </span>
                  <div>
                    <span className={styles.contactLabel}>{t('contact.info.emailLabel')}</span>
                    <a href="mailto:hello@one-beyond.com" className={styles.contactValue}>
                      hello@one-beyond.com
                    </a>
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <LocationIcon />
                  </span>
                  <div>
                    <span className={styles.contactLabel}>{t('contact.info.addressLabel')}</span>
                    <span className={styles.contactValue}>{t('contact.info.address')}</span>
                  </div>
                </li>
              </ul>

              {/* Offices */}
              <div className={styles.offices}>
                <h3 className={styles.officesHeading}>{t('contact.offices.heading')}</h3>
                <ul className={styles.officesList}>
                  {OFFICES.map((o) => (
                    <li key={o.key} className={styles.officeCard}>
                      <strong className={styles.officeName}>{t(`${o.key}.name`)}</strong>
                      <span className={styles.officeAddress}>{t(`${o.key}.address`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formWrapper}>
              {submitted ? (
                <div className={styles.successMsg} role="alert">
                  <SuccessIcon />
                  <h2 className={styles.successHeading}>{t('contact.form.successHeading')}</h2>
                  <p className={styles.successBody}>{t('contact.form.successBody')}</p>
                </div>
              ) : (
                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label={t('cta.formAriaLabel')}
                >
                  <h2 className={styles.formHeading}>{t('contact.form.heading')}</h2>

                  <div className={styles.row}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="contact-name">
                        {t('cta.form.name')} *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        className={styles.input}
                        placeholder={t('cta.form.namePlaceholder')}
                        autoComplete="name"
                        required
                      />
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="contact-company">
                        {t('contact.form.company')}
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        className={styles.input}
                        placeholder={t('contact.form.companyPlaceholder')}
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="contact-email">
                      {t('cta.form.email')} *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className={styles.input}
                      placeholder={t('cta.form.emailPlaceholder')}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="contact-phone">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className={styles.input}
                      placeholder={t('contact.form.phonePlaceholder')}
                      autoComplete="tel"
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="contact-service">
                      {t('contact.form.service')}
                    </label>
                    <select id="contact-service" className={styles.select}>
                      <option value="">{t('contact.form.servicePlaceholder')}</option>
                      <option value="ai">{t('services.ai.title')}</option>
                      <option value="web">{t('services.webApp.title')}</option>
                      <option value="mobile">{t('services.mobile.title')}</option>
                      <option value="teams">{t('services.dedicatedTeams.title')}</option>
                      <option value="data">{t('services.dataAnalytics.title')}</option>
                      <option value="ux">{t('services.uxUi.title')}</option>
                      <option value="other">{t('contact.form.serviceOther')}</option>
                    </select>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="contact-message">
                      {t('cta.form.message')} *
                    </label>
                    <textarea
                      id="contact-message"
                      className={styles.textarea}
                      rows={5}
                      placeholder={t('cta.form.messagePlaceholder')}
                      required
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" className={styles.checkbox} required />
                      <span>{t('contact.form.consent')}</span>
                    </label>
                  </div>

                  <button type="submit" className={`btn btn--primary ${styles.submit}`}>
                    {t('cta.form.submit')}
                    <svg className="arrow-icon" viewBox="0 0 9 15" aria-hidden="true">
                      <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 8l10 6 10-6" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  )
}

function SuccessIcon() {
  return (
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: '50%',
        backgroundColor: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.5rem',
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32" aria-hidden="true">
        <path d="M5 12l5 5 9-10" />
      </svg>
    </div>
  )
}
