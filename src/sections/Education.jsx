import SectionContainer from '../components/SectionContainer.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const Education = ({ content }) => {
  return (
    <SectionContainer id="education">
      <SectionTitle title={content.title} eyebrow="LEARNING" />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {content.items.map((item) => (
            <div key={item.degree} className="rounded-2xl border border-border bg-panel p-6">
              <h3 className="text-lg font-semibold text-text">{item.degree}</h3>
              {item.focus && <p className="text-sm text-muted">{item.focus}</p>}
              <p className="mt-2 text-sm text-text/90">{item.school}</p>
              <p className="text-xs text-muted">{item.date}</p>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-panel p-6">
            <h3 className="text-sm font-semibold text-text">Certifications</h3>
            <ul className="mt-3 space-y-3 text-sm text-muted">
              {content.certifications.map((item) => (
                <li key={item.name}>
                  <p className="text-text">{item.name}</p>
                  <p>{item.date}</p>
                  {item.id && <p>ID: {item.id}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-panel p-6">
            <h3 className="text-sm font-semibold text-text">Awards</h3>
            <ul className="mt-3 space-y-3 text-sm text-muted">
              {content.awards.map((item) => (
                <li key={item.name}>
                  <p className="text-text">{item.name}</p>
                  <p>{item.date}</p>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Education

