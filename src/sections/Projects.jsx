import SectionContainer from '../components/SectionContainer.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

const Projects = ({ content }) => {
  return (
    <SectionContainer id="projects" className="bg-grid">
      <SectionTitle title={content.title} eyebrow="HIGHLIGHTS" />
      <div className="grid gap-6 md:grid-cols-2">
        {content.items.map((item) => (
          <ProjectCard key={item.name} {...item} />
        ))}
      </div>
    </SectionContainer>
  )
}

export default Projects

