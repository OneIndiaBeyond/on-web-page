import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import ServiceDetail from './pages/ServiceDetail/ServiceDetail'
import CaseStudies from './pages/CaseStudies/CaseStudies'
import About from './pages/About/About'
import Careers from './pages/Careers/Careers'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/insights" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
