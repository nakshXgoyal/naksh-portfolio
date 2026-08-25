import { useEffect, useState } from 'react'
import './Hero.css'

const COMMAND = 'I AM NAKSH GOYAL'
const OUTPUT = [
  '> Naksh — Full-Stack Developer and AIML engineer',
  '> Builds: React, AIML, Node.js',
  '> Status: open to opportunities',
]

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      i += 1
      setTyped(COMMAND.slice(0, i))
      if (i === COMMAND.length) {
        clearInterval(typing)
        setTimeout(() => setShowOutput(true), 300)
      }
    }, 110)
    return () => clearInterval(typing)
  }, [])

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">available for interviews</p>
          <h1 className="hero__title">
            I build software that
            <br />
            ships and scales.
          </h1>
          <p className="hero__subtitle">
            Full-stack developer focused on clean architecture, fast
            interfaces, and code a teammate can pick up without asking me
            what it does.
          </p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              View work
            </a>
            <a href="https://drive.google.com/file/d/16-Vd1R2r1StNIVFU-g4FU7eW8RuontZU/view?pli=1" className="btn btn--ghost">
              Download resume
            </a>
          </div>
        </div>

        <div className="terminal" role="img" aria-label="Terminal showing developer introduction">
          <div className="terminal__bar">
            <span className="terminal__dot terminal__dot--r" />
            <span className="terminal__dot terminal__dot--y" />
            <span className="terminal__dot terminal__dot--g" />
            <span className="terminal__title mono">naksh@portfolio: ~</span>
          </div>
          <div className="terminal__body mono">
            <div className="terminal__line">
              <span className="terminal__prompt">$</span> {typed}
              <span className="terminal__cursor" />
            </div>
            {showOutput &&
              OUTPUT.map((line, idx) => (
                <div
                  key={line}
                  className="terminal__output"
                  style={{ animationDelay: `${idx * 140}ms` }}
                >
                  {line}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
