import Layout from '../components/Layout'
import Seo from '../components/Seo'

const services = [
  { title: 'Innenanstrich', desc: 'Wände, Decken, Spachtelarbeiten, Akzentflächen' },
  { title: 'Außenanstrich', desc: 'Fassadenanstriche, Holzschutz, wetterbeständig' },
  { title: 'Fassadengestaltung', desc: 'Aufbereitung, Risssanierung, langlebige Systeme' },
  { title: 'Tapezierarbeiten', desc: 'Vlies, Raufaser, Muster- & Fototapeten' },
  { title: 'Lackieren', desc: 'Türen, Fenster, Heizkörper, Geländer' },
  { title: 'Schimmel- & Wasserschadensanierung', desc: 'Analyse, Beseitigung, Prävention' },
]

export default function Leistungen(){
  return (
    <Layout>
      <Seo title="Leistungen" description="Innen- und Außenanstrich, Fassadengestaltung, Tapezieren, Lackieren – alle Leistungen des Malerbetriebs im Überblick." path="/leistungen" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-3xl font-bold mb-6">Unsere Leistungen</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map(s => (
            <div key={s.title} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
              <p className="text-slate-600 mb-3">{s.desc}</p>
              <img className="w-full rounded-lg object-cover h-56" loading="lazy" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop" alt={s.title+ ' Beispielbild'} />
              <div className="mt-4 text-sm text-slate-600">Unverbindliches Angebot gefällig? <a href="/angebot" className="text-teal-700 font-semibold hover:underline">Jetzt anfragen</a></div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
