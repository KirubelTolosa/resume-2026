import Tag from './Tag.jsx'

const ExperienceItem = ({ role, company, location, dates, bullets, stack }) => {
  return (
    <div className="relative border-l border-border pl-6">
      <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border border-border bg-panel" />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-text">
          {role} · {company}
        </h3>
        <span className="text-xs text-muted">{dates}</span>
      </div>
      <p className="text-sm text-muted">{location}</p>
      <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-text/90">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </div>
  )
}

export default ExperienceItem

