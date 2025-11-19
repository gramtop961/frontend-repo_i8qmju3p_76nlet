import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function UeberUns(){
  return (
    <Layout>
      <Seo title="Über uns" description="Lernen Sie Gordon Nehls und das Team von Alles In Farbe kennen – Ihr Malerbetrieb aus Hamburg." path="/ueber-uns" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-3xl font-bold mb-4">Über Alles In Farbe – Gordon Nehls</h1>
          <p className="text-slate-700 mb-3">Ich bin Gordon Nehls, Maler aus Leidenschaft. Seit über 12 Jahren verschönere ich Räume und Fassaden in Hamburg und Umgebung. Für mich stehen Qualität, Sauberkeit und eine ehrliche Beratung an erster Stelle.</p>
          <p className="text-slate-700 mb-3">Gemeinsam finden wir die passende Farb- und Materialwahl für Ihr Projekt – langlebig, stilvoll und genau auf Ihre Anforderungen abgestimmt. Meine Kundinnen und Kunden schätzen die zuverlässige Planung und die saubere Ausführung.</p>
          <p className="text-slate-700">Ich freue mich darauf, auch Ihr Zuhause oder Ihr Objekt in neuem Glanz erstrahlen zu lassen.</p>
        </div>
        <div>
          <img className="w-full rounded-xl shadow-lg object-cover h-80" src="https://images.unsplash.com/photo-1751004865826-58b1d504388c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQb3J0cmFpdCUyMCVFMiU4MCU5MyUyME1hbGVybWVpc3RlciUyMGJlaXxlbnwwfDB8fHwxNzYzNTM3OTQwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Portrait – Malermeister bei der Arbeit" loading="lazy"/>
        </div>
      </section>
    </Layout>
  )
}
