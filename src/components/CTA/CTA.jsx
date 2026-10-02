import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './CTA.module.css'

export default function CTA() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className={`ob-strip ${styles.section}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={styles.heading}>{t('cta.heading')}</h2>
            <p className={styles.body}>{t('cta.body')}</p>
            <div className={styles.contact}>
              <a href="tel:01252235422" className={styles.phone}>
                <PhoneIcon />
                {t('cta.phone')}
              </a>
            </div>
          </div>

          <div className={styles.right}>
            {submitted ? (
              <div className={styles.success} role="alert">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40" className={styles.successIcon} aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l3 3 5-5" />
                </svg>
                <p className={styles.successText}>{t('cta.form.successText')}</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label={t('cta.formAriaLabel')}>
                <h3 className={styles.formTitle}>{t('cta.formTitle')}</h3>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="cta-name">
                    {t('cta.form.name')}
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    className={styles.input}
                    placeholder={t('cta.form.namePlaceholder')}
                    autoComplete="name"
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="cta-email">
                    {t('cta.form.email')}
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    className={styles.input}
                    placeholder={t('cta.form.emailPlaceholder')}
                    autoComplete="email"
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="cta-message">
                    {t('cta.form.message')}
                  </label>
                  <textarea
                    id="cta-message"
                    className={styles.textarea}
                    rows={4}
                    placeholder={t('cta.form.messagePlaceholder')}
                    required
                  />
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
  )
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
