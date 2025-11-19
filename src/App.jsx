import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UeberUns from './pages/UeberUns'
import Leistungen from './pages/Leistungen'
import Referenzen from './pages/Referenzen'
import Bewertungen from './pages/Bewertungen'
import Kontakt from './pages/Kontakt'
import Angebot from './pages/Angebot'
import Blog from './pages/Blog'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ueber-uns" element={<UeberUns/>} />
      <Route path="/leistungen" element={<Leistungen/>} />
      <Route path="/referenzen" element={<Referenzen/>} />
      <Route path="/bewertungen" element={<Bewertungen/>} />
      <Route path="/kontakt" element={<Kontakt/>} />
      <Route path="/angebot" element={<Angebot/>} />
      <Route path="/blog" element={<Blog/>} />
    </Routes>
  )
}

export default App
