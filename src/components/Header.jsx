const Header = ({ name, navItems, theme, onToggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3 font-mono text-sm font-semibold text-text">
          <span className="rounded-full border border-border bg-panel px-3 py-1">KT</span>
          <span className="hidden sm:inline">{name}</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-text">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-border bg-panel px-3 py-2 text-xs font-semibold text-muted hover:text-text"
            aria-label="Toggle theme"
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

