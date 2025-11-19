import { useState, useMemo } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Paintbrush, Phone, Mail } from 'lucide-react'

const nav = [
  { to: '/', label: 'Startseite' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/referenzen', label: 'Referenzen' },
  { to: '/bewertungen', label: 'Bewertungen' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const schema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Alles In Farbe – Gordon Nehls',
    image: `${window.location.origin}/og-cover.jpg`,
    url: window.location.origin,
    telephone: '+49-40-12345678',
    email: 'info@allesinfarbe.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Musterstraße 12',
      addressLocality: 'Hamburg',
      postalCode: '20095',
      addressCountry: 'DE'
    },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
      opens: '08:00',
      closes: '17:00'
    }],
    areaServed: 'Hamburg und Umgebung',
    sameAs: []
  }), [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 grid place-items-center text-white shadow">
                <Paintbrush size={18} />
              </div>
              <div className="leading-tight">
                <div className="font-semibold">Alles In Farbe</div>
                <div className="text-xs text-slate-500">Gordon Nehls</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {nav.map(n => (
                <NavLink key={n.to} to={n.to} className={({isActive}) => `text-sm font-medium hover:text-teal-700 ${isActive ? 'text-teal-700' : 'text-slate-700'}`}>{n.label}</NavLink>
              ))}
              <a href="tel:+494012345678" className="inline-flex items-center gap-2 text-sm font-semibold bg-teal-600 text-white px-3 py-2 rounded-md shadow hover:bg-teal-700">
                <Phone size={16} /> Jetzt anrufen
              </a>
            </nav>

            <button className="md:hidden p-2" onClick={() => setOpen(v=>!v)} aria-label="Menü">
              <Menu />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200">
            <div className="px-4 py-3 space-y-2">
              {nav.map(n => (
                <NavLink key={n.to} to={n.to} onClick={()=>setOpen(false)} className={({isActive}) => `block text-sm py-1 ${isActive ? 'text-teal-700' : 'text-slate-700'}`}>{n.label}</NavLink>
              ))}
              <a href="mailto:info@allesinfarbe.de" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700"><Mail size={16}/> info@allesinfarbe.de</a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-slate-900 text-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 grid place-items-center text-white"><Paintbrush size={16}/></div>
              <div className="font-semibold">Alles In Farbe – Gordon Nehls</div>
            </div>
            <p className="text-sm text-slate-400">Ihr Malerbetrieb in Hamburg. Hochwertige Innen- und Außenanstriche, Fassadengestaltung, Tapezierarbeiten und Lackierungen.</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Kontakt</div>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>Adresse: Musterstraße 12, 20095 Hamburg</li>
              <li>Telefon: <a className="hover:underline" href="tel:+494012345678">+49 (0)40 123 45 678</a></li>
              <li>E-Mail: <a className="hover:underline" href="mailto:info@allesinfarbe.de">info@allesinfarbe.de</a></li>
              <li>Öffnungszeiten: Mo–Fr 8–17 Uhr</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Links</div>
            <div className="flex flex-col text-sm text-slate-300 gap-1">
              {nav.map(n => <NavLink key={n.to} to={n.to} className="hover:underline w-fit">{n.label}</NavLink>)}
              <a className="hover:underline w-fit" href="/sitemap.xml" target="_blank" rel="noreferrer">Sitemap</a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">© {new Date().getFullYear()} Alles In Farbe – Gordon Nehls. Alle Rechte vorbehalten.</div>
      </footer>
    </div>
  )
}
