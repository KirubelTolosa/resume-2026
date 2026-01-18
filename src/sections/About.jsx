import SectionContainer from '../components/SectionContainer.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const About = ({ content }) => {
  return (
    <SectionContainer id="about">
      <SectionTitle title={content.title} eyebrow="PROFILE" />
      <div className="grid gap-6 text-sm text-text/90 md:grid-cols-2">
        {content.body.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </SectionContainer>
  )
}

export default About

