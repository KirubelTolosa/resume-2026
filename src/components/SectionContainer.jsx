const SectionContainer = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`scroll-mt-24 py-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  )
}

export default SectionContainer

