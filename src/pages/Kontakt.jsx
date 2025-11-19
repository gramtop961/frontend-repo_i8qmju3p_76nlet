import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useState } from 'react'

export default function Kontakt(){
  const [form, setForm] = useState({name:'', email:'', phone:'', message:'', consent:true})
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
      if (!res.ok) throw new Error('Fehler beim Senden')
      setStatus('Vielen Dank! Wir melden uns zeitnah bei Ihnen.')
      setForm({name:'', email:'', phone:'', message:'', consent:true})
    } catch(err) {
      setStatus('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.')
    }
  }

  return (
    <Layout>
      <Seo title="Kontakt" description="Nehmen Sie Kontakt auf – wir beraten Sie gern zu Ihrem Malerprojekt in Hamburg." path="/kontakt" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-3xl font-bold mb-4">Kontakt</h1>
          <p className="text-slate-700 mb-6">Wir freuen uns auf Ihre Anfrage. Nutzen Sie das Formular oder rufen Sie uns direkt an.</p>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input required className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium">E-Mail</label>
              <input type="email" required className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium">Telefon</label>
              <input className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium">Nachricht</label>
              <textarea required rows={5} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
            </div>
            <div className="flex items-center gap-2">
              <input id="consent" type="checkbox" checked={form.consent} onChange={e=>setForm({...form, consent:e.target.checked})} />
              <label htmlFor="consent" className="text-sm">Ich bin mit der Kontaktaufnahme einverstanden.</label>
            </div>
            <button className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-teal-600 text-white font-semibold hover:bg-teal-700">Senden</button>
            {status && <div className="text-sm text-slate-600">{status}</div>}
          </form>
        </div>
        <div>
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="font-semibold mb-2">Adresse</div>
            <div className="text-sm text-slate-600 mb-4">Musterstraße 12, 20095 Hamburg</div>
            <iframe title="Karte Hamburg" className="w-full h-72 rounded-lg" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Hamburg&output=embed"></iframe>
            <div className="text-sm text-slate-600 mt-4">Öffnungszeiten: Mo–Fr 8–17 Uhr</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
