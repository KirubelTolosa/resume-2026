import { useEffect, useMemo, useState } from 'react'
import en from './content/en.json'
import am from './content/am.json'
import Header from './components/Header.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import { applyTheme, getInitialTheme } from './utils/theme.js'
import { getInitialLocale } from './utils/i18n.js'

const contentByLocale = { en, am }

const App = () => {
  const [theme, setTheme] = useState(() => getInitialTheme())
  const [locale, setLocale] = useState(() => getInitialLocale())

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem('locale', locale)
  }, [locale])

  const content = useMemo(() => contentByLocale[locale] ?? en, [locale])
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
        locale={locale}
        onToggleLocale={() => setLocale(locale === 'en' ? 'am' : 'en')}
      />
      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-20" />
        <Hero basics={content.basics} hero={content.hero} resumeUrl={resumeUrl} />
        <About content={content.about} />
        <Skills content={content.skills} />
        <Experience content={content.experience} />
        <Projects content={content.projects} />
        <Education content={content.education} />
        <Contact content={content.contact} basics={content.basics} />
      </main>
      <Footer text={content.footer.text} />
    </div>
  )
}

export default App
