const SectionTitle = ({ title, eyebrow = 'SECTION' }) => {
  return (
    <div className="mb-8">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-muted">{eyebrow}</p>
      <h2 className="text-2xl font-semibold text-text md:text-3xl">{title}</h2>
    </div>
  )
}

export default SectionTitle

