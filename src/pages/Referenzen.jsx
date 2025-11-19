import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useEffect, useState } from 'react'

export default function Referenzen(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/portfolio`).then(r=>r.json()).then(setItems).catch(()=>{})
  },[])
  return (
    <Layout>
      <Seo title="Referenzen" description="Vorher-/Nachher-Bilder und eine Galerie ausgewählter Projekte unseres Malerbetriebs in Hamburg." path="/referenzen" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-3xl font-bold mb-6">Referenzen</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="font-semibold mb-1">{it.title}</div>
              <div className="text-sm text-slate-600 mb-3">{it.description}</div>
              <div className="grid grid-cols-2 gap-3">
                {it.before_image && <img className="rounded-lg object-cover h-48 w-full" src={it.before_image} alt={`${it.title} – vorher`} loading="lazy"/>}
                {it.after_image && <img className="rounded-lg object-cover h-48 w-full" src={it.after_image} alt={`${it.title} – nachher`} loading="lazy"/>}
              </div>
              {it.location && <div className="text-xs text-slate-500 mt-2">Ort: {it.location}</div>}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
