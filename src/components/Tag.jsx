const Tag = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-panel px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  )
}

export default Tag

