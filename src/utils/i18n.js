export const AVAILABLE_LOCALES = ['en', 'am']

export const getInitialLocale = () => {
  const stored = localStorage.getItem('locale')
  if (stored && AVAILABLE_LOCALES.includes(stored)) {
    return stored
  }
  const browser = navigator.language?.toLowerCase() || 'en'
  const candidate = AVAILABLE_LOCALES.find((locale) => browser.startsWith(locale))
  return candidate || 'en'
}

