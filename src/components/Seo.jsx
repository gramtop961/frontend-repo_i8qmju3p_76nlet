import { useEffect } from 'react'

function setMetaTag(name, content, attr = 'name') {
  let tag = document.head.querySelector(`${attr}="${name}"`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content || '')
}

export default function Seo({ title, description, ogImage, path = '/' }) {
  useEffect(() => {
    const site = 'Alles In Farbe – Gordon Nehls'
    const fullTitle = title ? `${title} | ${site}` : site
    document.title = fullTitle

    if (description) setMetaTag('description', description)

    // Open Graph
    setMetaTag('og:title', fullTitle, 'property')
    if (description) setMetaTag('og:description', description, 'property')
    setMetaTag('og:type', 'website', 'property')
    const base = window.location.origin
    setMetaTag('og:url', `${base}${path}`, 'property')
    if (ogImage) setMetaTag('og:image', ogImage, 'property')

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:title', fullTitle)
    if (description) setMetaTag('twitter:description', description)
    if (ogImage) setMetaTag('twitter:image', ogImage)
  }, [title, description, ogImage, path])

  return null
}
