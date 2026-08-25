import './Timeline.css'

const LOG = [
  {
    date: 'Present',
    role: 'Open to work',
    org: '',
    message:
      'currently looking for oppotunities to improve my skills.',
  },
  {
    date: 'sept-nov, 2025',
    role: 'Virtual Internship - Artificial Intelligence',
    org: 'IBM',
    message:
      'Completed a 6-week virtual internship in Artificial Intelligence, gaining hands-on experience in Python, machine learning, data preprocessing, and AI-based problem solving.',
  },
  {
    date: '2023 — 2027',
    role: 'B.Tech, Computer Science-AIML',
    org: 'Dr. APJ Abdul kalam technical university, Lucknow',
    message:
      'Focused on data structures, distributed systems, and web development. Led a 4-person team through the capstone project.',
  },
]

export default function Timeline() {
  return (
    <section id="log">
      <div className="container">
        <p className="eyebrow">experience</p>
        <h2 className="section-title">git log --author=naksh</h2>

        <div className="log">
          {LOG.map((entry) => (
            <div key={entry.hash} className="log__entry">
              <div className="log__rail">
                <span className="log__node" />
                <span className="log__line" />
              </div>
              <div className="log__content">
                <div className="log__meta mono">
                  <span className="log__hash">{entry.hash}</span>
                  <span className="log__date">{entry.date}</span>
                </div>
                <h3 className="log__role">{entry.role}</h3>
                <p className="log__org">{entry.org}</p>
                <p className="log__message">{entry.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
