import Layout from '../../components/Layout/Layout'
import Hero from '../../components/Hero/Hero'
import ValueProps from '../../components/ValueProps/ValueProps'
import Services from '../../components/Services/Services'
import CaseStudies from '../../components/CaseStudies/CaseStudies'
import Industries from '../../components/Industries/Industries'
import CTA from '../../components/CTA/CTA'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ValueProps />
      <Services />
      <CaseStudies />
      <Industries />
      <CTA />
    </Layout>
  )
}
