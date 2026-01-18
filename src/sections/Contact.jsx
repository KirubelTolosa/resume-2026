import SectionContainer from '../components/SectionContainer.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'

const Contact = ({ content, basics }) => {
  return (
    <SectionContainer id="contact" className="bg-grid">
      <SectionTitle title={content.title} eyebrow="CONNECT" />
      <div className="grid gap-8 rounded-3xl border border-border bg-panel p-8 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-sm text-muted">{content.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button as="a" href={`mailto:${basics.email}`} variant="primary">
              {content.emailLabel}
            </Button>
            <Button as="a" href={basics.linkedin} variant="ghost" target="_blank" rel="noreferrer">
              {content.linkedinLabel}
            </Button>
          </div>
        </div>
        <div className="space-y-3 text-sm text-muted">
          <p className="font-mono text-xs uppercase tracking-[0.3em]">Direct</p>
          <p>{basics.email}</p>
          <p>{basics.phone}</p>
          {basics.github && (
            <a href={basics.github} className="text-text underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
              {content.githubLabel}
            </a>
          )}
        </div>
      </div>
    </SectionContainer>
  )
}

export default Contact

