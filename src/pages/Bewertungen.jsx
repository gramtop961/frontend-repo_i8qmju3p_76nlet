import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useEffect, useState } from 'react'

export default function Bewertungen(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/testimonials`).then(r=>r.json()).then(setItems).catch(()=>{})
  },[])
  return (
    <Layout>
      <Seo title="Bewertungen" description="Was Kundinnen und Kunden über Alles In Farbe – Gordon Nehls sagen." path="/bewertungen" />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-3xl font-bold mb-6">Kundenbewertungen</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="text-lg font-semibold mb-2">{t.name}</div>
              <div className="text-slate-700 italic">„{t.quote}“</div>
              {t.location && <div className="text-xs text-slate-500 mt-2">{t.location}</div>}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
