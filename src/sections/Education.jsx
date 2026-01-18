import SectionContainer from '../components/SectionContainer.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const Education = ({ content }) => {
  return (
    <SectionContainer id="education">
      <SectionTitle title={content.title} eyebrow="LEARNING" />
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
    </SectionContainer>
  )
}

export default Education

