import SectionContainer from '../components/SectionContainer.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Tag from '../components/Tag.jsx'

const Skills = ({ content }) => {
  return (
    <SectionContainer id="skills" className="bg-grid">
      <SectionTitle title={content.title} eyebrow="STACK" />
      <div className="grid gap-6 lg:grid-cols-2">
        {content.groups.map((group) => (
          <div key={group.name} className="rounded-2xl border border-border bg-panel p-6">
            <h3 className="text-sm font-semibold text-text">{group.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Skills

