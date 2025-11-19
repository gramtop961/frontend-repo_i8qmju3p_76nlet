import { Link } from 'react-router-dom'
import { Star, CheckCircle2 } from 'lucide-react'

export function Intro() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl font-bold mb-3">Qualität, auf die Sie sich verlassen können</h2>
        <p className="text-slate-600 mb-4">Seit vielen Jahren steht Alles In Farbe – Gordon Nehls für saubere Arbeit, hochwertige Materialien und eine ehrliche, persönliche Beratung. Ob einzelne Räume, komplette Wohnungen oder die Hausfassade – wir planen sorgfältig und führen zuverlässig aus.</p>
        <ul className="space-y-2 text-slate-700">
          {['Saubere Ausführung', 'Termintreue & Zuverlässigkeit', 'Hochwertige Markenfarben', 'Transparente Angebote'].map(t => (
            <li key={t} className="flex items-center gap-2"><CheckCircle2 className="text-teal-600" size={18}/>{t}</li>
          ))}
        </ul>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          {[...Array(5)].map((_,i)=> <Star key={i} className="text-amber-500 fill-amber-500" size={18}/>) }
          <span className="text-sm text-slate-500">5.0 von 5 (Kundenstimmen)</span>
        </div>
        <blockquote className="text-slate-700 italic">“Herr Nehls hat uns super beraten und alles sauber umgesetzt. Wir sind begeistert vom Ergebnis!”</blockquote>
        <div className="text-sm text-slate-500 mt-3">— Familie Müller, Hamburg-Eimsbüttel</div>
        <Link to="/bewertungen" className="inline-flex mt-5 text-sm font-semibold text-teal-700 hover:underline">Weitere Bewertungen</Link>
      </div>
    </section>
  )
}

export function ServicesPreview() {
  const services = [
    { title: 'Innenanstrich', desc: 'Wände, Decken, Akzentflächen, Spachtelarbeiten' },
    { title: 'Außenanstrich', desc: 'Fassadenanstriche, Holzschutz, Witterungsschutz' },
    { title: 'Fassadengestaltung', desc: 'Gestaltung, Aufbereitung, Risse sanieren' },
    { title: 'Tapezierarbeiten', desc: 'Raufaser, Vlies, Muster- und Fototapeten' },
    { title: 'Lackieren', desc: 'Türen, Fenster, Heizkörper, Geländer' },
    { title: 'Schimmel- & Wasserschadensanierung', desc: 'Analyse und fachgerechte Beseitigung' },
  ]
  return (
    <section className="bg-white border-y border-slate-200 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Unsere Leistungen</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-5 shadow-sm bg-gradient-to-br from-white to-slate-50">
              <div className="font-semibold mb-1">{s.title}</div>
              <div className="text-sm text-slate-600">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/leistungen" className="inline-flex items-center font-semibold text-teal-700 hover:underline">Alle Leistungen im Überblick</Link>
        </div>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Bereit für frische Farbe?</h3>
            <p className="text-white/90">Fragen Sie jetzt Ihr unverbindliches Angebot an – wir melden uns zeitnah.</p>
          </div>
          <Link to="/kontakt" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-teal-700 font-semibold hover:bg-slate-100">Jetzt Beratung anfragen</Link>
        </div>
      </div>
    </section>
  )
}
