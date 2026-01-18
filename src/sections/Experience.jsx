import SectionContainer from '../components/SectionContainer.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ExperienceItem from '../components/ExperienceItem.jsx'

const Experience = ({ content }) => {
  return (
    <SectionContainer id="experience">
      <SectionTitle title={content.title} eyebrow="CAREER" />
      <div className="space-y-10">
        {content.items.map((item) => (
          <ExperienceItem key={`${item.company}-${item.role}`} {...item} />
        ))}
      </div>
    </SectionContainer>
  )
}

export default Experience

