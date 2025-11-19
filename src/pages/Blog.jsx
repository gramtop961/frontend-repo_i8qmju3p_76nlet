import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Blog(){
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/blog`).then(r=>r.json()).then(setPosts).catch(()=>{})
  },[])
  return (
    <Layout>
      <Seo title="Blog & Tipps" description="Tipps rund ums Streichen, Fassaden, Farben und Pflege." path="/blog" />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-3xl font-bold mb-6">Blog & Nachrichten</h1>
        <div className="space-y-6">
          {posts.map((p, idx) => (
            <article key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-1">{p.title}</h2>
              {p.excerpt && <p className="text-slate-600 mb-3">{p.excerpt}</p>}
              <Link to={`/blog/${p.slug || idx}`} className="text-teal-700 font-semibold hover:underline">Mehr erfahren</Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
