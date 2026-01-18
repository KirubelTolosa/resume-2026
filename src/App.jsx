import { useEffect, useMemo, useState } from 'react'
import en from './content/en.json'
import Header from './components/Header.jsx'
import Hero from './sections/Hero.jsx'
import Skills from './sections/Skills.jsx'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects.jsx'
import Education from './sections/Education.jsx'
import Credentials from './sections/Credentials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import { applyTheme, getInitialTheme } from './utils/theme.js'

const App = () => {
  const [theme, setTheme] = useState(() => getInitialTheme())

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const content = useMemo(() => en, [])
  const resumeUrl = `${import.meta.env.BASE_URL}${content.basics.resumeFile}`

  useEffect(() => {
    document.title = content.meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', content.meta.description)
    }
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', content.meta.title)
    }
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) {
      ogDesc.setAttribute('content', content.meta.description)
    }
  }, [content])

  return (
    <div id="top" className="bg-bg text-text">
      <Header
        name={content.basics.name}
        navItems={content.nav}
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-20" />
        <Hero basics={content.basics} hero={content.hero} resumeUrl={resumeUrl} />
        <Experience content={content.experience} />
        <Projects content={content.projects} />
        <Skills content={content.skills} />
        <Education content={content.education} />
        <Credentials content={content.education} />
        <Contact content={content.contact} basics={content.basics} />
      </main>
      <Footer text={content.footer.text} />
    </div>
  )
}

export default App
