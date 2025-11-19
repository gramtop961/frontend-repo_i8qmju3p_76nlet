import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 560">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#0f766e"/>
              <stop offset="100%" stopColor="#0891b2"/>
            </linearGradient>
          </defs>
          <path fill="url(#g)" d="M0 96l48 10.7C96 117 192 139 288 133.3c96-5.3 192-37.3 288-58.6C672 53 768 43 864 69.3c96 26.7 192 90.7 288 112 96 21.3 192-0.7 240-11.3V0H0Z"/>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">Alles In Farbe – Ihr Malerbetrieb in Hamburg</h1>
          <p className="text-lg text-slate-600 mb-6">Hochwertige Innen- und Außenanstriche, Fassadengestaltung, Tapezierarbeiten und Lackierungen. Saubere Ausführung, transparente Beratung und termintreue Umsetzung.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/kontakt" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-teal-600 text-white font-semibold hover:bg-teal-700">Jetzt Beratung anfragen</Link>
            <Link to="/referenzen" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-teal-600 text-teal-700 font-semibold hover:bg-teal-50">Referenzen ansehen</Link>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop" alt="Maler bei der Arbeit" className="w-full rounded-xl shadow-lg object-cover h-80" loading="lazy"/>
        </div>
      </div>
    </section>
  )
}
