import SectionContainer from '../components/SectionContainer.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const Credentials = ({ content }) => {
  return (
    <SectionContainer id="credentials">
      <SectionTitle title="Certifications & Awards" eyebrow="CREDENTIALS" />
      <div className="grid gap-6 lg:grid-cols-2">
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
    </SectionContainer>
  )
}

export default Credentials

