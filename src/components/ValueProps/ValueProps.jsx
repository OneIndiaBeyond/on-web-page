import { useTranslation } from 'react-i18next'
import styles from './ValueProps.module.css'

const VALUE_ITEMS = [
  { key: 'valueProps.digitise', icon: 'digitise' },
  { key: 'valueProps.disrupt', icon: 'disrupt' },
  { key: 'valueProps.personalise', icon: 'personalise' },
  { key: 'valueProps.scale', icon: 'scale' },
]

function DigitiseIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" fill="none">
      <rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 36v6M32 36v6M10 42h28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 20h8M12 26h14M28 20h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function DisruptIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" fill="none">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 14v6l4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 32l3-3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function PersonaliseIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" fill="none">
      <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" fill="none">
      <path d="M8 36L20 24l8 8L40 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 16h8v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const ICONS = { digitise: DigitiseIcon, disrupt: DisruptIcon, personalise: PersonaliseIcon, scale: ScaleIcon }

export default function ValueProps() {
  const { t } = useTranslation()

  return (
    <section className={`ob-strip ${styles.section}`}>
      <div className="container">
        <div className={styles.intro}>
          <h2 className={styles.heading}>{t('valueProps.heading')}</h2>
          <p className={styles.body}>{t('valueProps.body')}</p>
        </div>
        <ul className={styles.grid}>
          {VALUE_ITEMS.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <li key={item.key} className={styles.card}>
                <div className={styles.iconWrapper} aria-hidden="true">
                  <Icon />
                </div>
                <h3 className={styles.cardTitle}>{t(`${item.key}.title`)}</h3>
                <p className={styles.cardBody}>{t(`${item.key}.body`)}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
