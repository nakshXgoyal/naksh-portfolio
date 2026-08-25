import './Projects.css'

const PROJECTS = [
  {
    name: 'Roots And Routes - Tourism support app',
    description:
      'A web application designed to suppport tourism in jharkhand, problem statement from SIH 2025 from jharkhand government ',
    stack: ['React', 'Node.js', 'Google Firebase'],
    link: 'https://roots-n-routes.web.app/',
  },
  {
    name: 'Credihire - Cheat proof ATS engine',
    description:
      'Intelligent recruitment dashboard that detect manipulated resumes ',
    stack: ['Vite', 'Tailwind CSS', 'React', 'Javascript NLP Heuristics'],
    link: '#',
  },
  {
    name: ' OurLibrary -Library Management System ',
    description:
      ' Web based LMS that allows libraries manage the record of books and users ',
    stack: ['React', 'Tailwind CSS', 'Firebase'],
    link: 'https://anuragxtiwari.github.io/OurLibrary/',
  },
]

export default function Projects() {
  return (
    <section id="work">
      <div className="container">
        <p className="eyebrow">work</p>
        <h2 className="section-title">Things I've shipped</h2>

        <div className="projects">
          {PROJECTS.map((project) => (
            <a key={project.name} href={project.link} className="project-card">
              <div className="project-card__head">
                <h3 className="project-card__name">{project.name}</h3>
                <span className="project-card__diff mono">
                  <span className="diff-add">click to open</span>
                </span>
              </div>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip mono">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
