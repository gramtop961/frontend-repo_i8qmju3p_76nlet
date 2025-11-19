import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useState } from 'react'

export default function Angebot(){
  const [form, setForm] = useState({name:'', email:'', phone:'', project_type:'', area_sqm:'', interior:true, exterior:false, details:''})
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    const payload = { ...form, area_sqm: form.area_sqm ? parseFloat(form.area_sqm) : null }
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/quote`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error('Fehler beim Senden')
      setStatus('Danke! Wir melden uns mit einem unverbindlichen Angebot.')
      setForm({name:'', email:'', phone:'', project_type:'', area_sqm:'', interior:true, exterior:false, details:''})
    } catch(err) {
      setStatus('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.')
    }
  }

  return (
    <Layout>
      <Seo title="Angebot anfordern" description="Beschreiben Sie Ihr Malerprojekt – wir erstellen schnell ein unverbindliches Angebot." path="/angebot" />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-3xl font-bold mb-4">Angebot anfordern</h1>
        <p className="text-slate-700 mb-6">Beschreiben Sie Ihr Projekt – je genauer, desto besser können wir einschätzen.</p>
        <form onSubmit={submit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input required className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium">E-Mail</label>
              <input type="email" required className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Telefon</label>
              <input className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium">Art der Arbeiten</label>
              <input required className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2" placeholder="z. B. Innenanstrich, Fassade" value={form.project_type} onChange={e=>setForm({...form, project_type:e.target.value})} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Fläche (m²)</label>
              <input type="number" step="0.1" className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2" value={form.area_sqm} onChange={e=>setForm({...form, area_sqm:e.target.value})} />
            </div>
            <div className="flex items-center gap-6 mt-6">
              <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={form.interior} onChange={e=>setForm({...form, interior:e.target.checked})}/> Innen</label>
              <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" checked={form.exterior} onChange={e=>setForm({...form, exterior:e.target.checked})}/> Außen</label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Details</label>
            <textarea rows={6} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2" placeholder="Besonderheiten, Fotos/Links, gewünschter Zeitraum..." value={form.details} onChange={e=>setForm({...form, details:e.target.value})} />
          </div>
          <button className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-teal-600 text-white font-semibold hover:bg-teal-700">Unverbindliches Angebot erhalten</button>
          {status && <div className="text-sm text-slate-600">{status}</div>}
        </form>
      </section>
    </Layout>
  )
}
