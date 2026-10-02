import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Layout from '../../components/Layout/Layout'
import styles from './Blog.module.css'

const POSTS = [
  {
    key: 'blog.posts.aiDevelopment',
    category: 'ai',
    date: '2024-09-15',
    readTime: 6,
  },
  {
    key: 'blog.posts.cloudMigration',
    category: 'engineering',
    date: '2024-09-01',
    readTime: 8,
  },
  {
    key: 'blog.posts.uxTrends',
    category: 'design',
    date: '2024-08-20',
    readTime: 5,
  },
  {
    key: 'blog.posts.dedicatedTeams',
    category: 'delivery',
    date: '2024-08-05',
    readTime: 7,
  },
  {
    key: 'blog.posts.dataStrategy',
    category: 'ai',
    date: '2024-07-22',
    readTime: 9,
  },
  {
    key: 'blog.posts.agileDelivery',
    category: 'delivery',
    date: '2024-07-10',
    readTime: 6,
  },
]

const CATEGORIES = [
  { key: 'all', label: 'blog.catAll' },
  { key: 'ai', label: 'blog.catAI' },
  { key: 'engineering', label: 'blog.catEngineering' },
  { key: 'design', label: 'blog.catDesign' },
  { key: 'delivery', label: 'blog.catDelivery' },
]

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Blog() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')

  const featured = POSTS[0]
  const rest = POSTS.slice(1)

  const filteredRest =
    activeCategory === 'all'
      ? rest
      : rest.filter((p) => p.category === activeCategory)

  return (
    <Layout>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <p className="section-label">{t('blog.label')}</p>
          <h1 className={styles.heroHeading}>{t('blog.heading')}</h1>
          <p className={styles.heroSubheading}>{t('blog.subheading')}</p>
        </div>
      </section>

      {/* Featured post */}
      <section className={`ob-strip ${styles.featuredSection}`}>
        <div className="container">
          <p className={styles.featuredLabel}>{t('blog.featured')}</p>
          <article className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <div className={styles.featuredPlaceholder}>
                <ArticleIcon />
              </div>
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.postMeta}>
                <span className={`${styles.catBadge} ${styles[`cat_${featured.category}`]}`}>
                  {t(`blog.cat${featured.category.charAt(0).toUpperCase() + featured.category.slice(1)}`)}
                </span>
                <span className={styles.postDate}>{formatDate(featured.date)}</span>
                <span className={styles.readTime}>
                  {t('blog.readTime', { n: featured.readTime })}
                </span>
              </div>
              <h2 className={styles.featuredTitle}>{t(`${featured.key}.title`)}</h2>
              <p className={styles.featuredExcerpt}>{t(`${featured.key}.excerpt`)}</p>
              <Link to="#" className="btn btn--primary">
                {t('blog.readPost')}
                <svg className="arrow-icon" viewBox="0 0 9 15" aria-hidden="true">
                  <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* All posts */}
      <section className={`ob-strip ${styles.allPosts}`}>
        <div className="container">
          <div className={styles.allHeader}>
            <h2 className={styles.allHeading}>{t('blog.allPosts')}</h2>
            <div className={styles.categories} role="group" aria-label={t('blog.filterLabel')}>
              {CATEGORIES.map((c) => (
                <button
                  key={c.key}
                  className={`${styles.catBtn} ${activeCategory === c.key ? styles.catActive : ''}`}
                  onClick={() => setActiveCategory(c.key)}
                >
                  {t(c.label)}
                </button>
              ))}
            </div>
          </div>

          <ul className={styles.postsGrid}>
            {filteredRest.map((post) => (
              <li key={post.key}>
                <article className={styles.postCard}>
                  <div className={styles.postImage}>
                    <div className={styles.postPlaceholder}>
                      <ArticleIcon />
                    </div>
                  </div>
                  <div className={styles.postContent}>
                    <div className={styles.postMeta}>
                      <span className={`${styles.catBadge} ${styles[`cat_${post.category}`]}`}>
                        {t(`blog.cat${post.category.charAt(0).toUpperCase() + post.category.slice(1)}`)}
                      </span>
                      <span className={styles.readTime}>
                        {t('blog.readTime', { n: post.readTime })}
                      </span>
                    </div>
                    <h3 className={styles.postTitle}>{t(`${post.key}.title`)}</h3>
                    <p className={styles.postExcerpt}>{t(`${post.key}.excerpt`)}</p>
                    <div className={styles.postFooter}>
                      <span className={styles.postDate}>{formatDate(post.date)}</span>
                      <Link to="#" className={styles.postLink}>
                        {t('caseStudies.readMore')}
                        <svg viewBox="0 0 9 15" className={styles.postArrow} aria-hidden="true">
                          <path d="M0 12.764l1.445 1.367L9.05 7.186 1.482 0 .01 1.34l6.129 5.82z" fill="currentColor" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {filteredRest.length === 0 && (
            <p className={styles.noResults}>{t('blog.noResults')}</p>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className={styles.newsletter}>
        <div className="container">
          <div className={styles.newsletterInner}>
            <div className={styles.newsletterText}>
              <h2 className={styles.newsletterHeading}>{t('blog.newsletter.heading')}</h2>
              <p className={styles.newsletterBody}>{t('blog.newsletter.body')}</p>
            </div>
            <form
              className={styles.newsletterForm}
              onSubmit={(e) => e.preventDefault()}
              aria-label={t('blog.newsletter.ariaLabel')}
            >
              <input
                type="email"
                className={styles.newsletterInput}
                placeholder={t('cta.form.emailPlaceholder')}
                required
                aria-label={t('cta.form.email')}
              />
              <button type="submit" className="btn btn--primary">
                {t('blog.newsletter.subscribe')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function ArticleIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" width="40" height="40">
      <rect x="8" y="6" width="32" height="36" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M15 16h18M15 22h18M15 28h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
