import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import { Intro, ServicesPreview, CtaBand } from '../components/Sections'

export default function Home() {
  return (
    <Layout>
      <Seo title="Startseite" description="Alles In Farbe – Ihr Malerbetrieb in Hamburg. Innen- und Außenanstrich, Fassadengestaltung, Tapezierarbeiten, Lackieren." path="/" />
      <Hero />
      <Intro />
      <ServicesPreview />
      <CtaBand />
    </Layout>
  )
}
