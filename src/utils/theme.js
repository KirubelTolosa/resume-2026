export const getInitialTheme = () => {
  const stored = localStorage.getItem('theme')
  if (stored) {
    return stored
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

export const applyTheme = (theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

