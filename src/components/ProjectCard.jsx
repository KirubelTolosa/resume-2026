import Tag from './Tag.jsx'

const ProjectCard = ({ name, description, stack }) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-panel p-6 shadow-glow">
      <h3 className="text-lg font-semibold text-text">{name}</h3>
      <p className="mt-3 text-sm text-muted">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard

