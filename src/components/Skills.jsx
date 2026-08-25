import './Skills.css'

const GROUPS = [
  {
    label: 'FRONTEND',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Redux'],
  },
  {
    label: 'BACKEND',
    items: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    label: 'AIML',
    items: ['Machine Learning', 'AI models', 'Python'],
  },
  {
    label: 'TOOLING',
    items: ['Docker', 'Git', 'Chatgpt', 'AWS'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="eyebrow">skills</p>
        <h2 className="section-title">What I work with</h2>

        <div className="skills-grid">
          {GROUPS.map((group) => (
            <div key={group.label} className="skills-group">
              <h3 className="skills-group__label mono">{group.label}</h3>
              <ul className="skills-group__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
