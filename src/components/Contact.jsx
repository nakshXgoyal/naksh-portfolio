import { useState } from 'react'
import './Contact.css'

const EMAIL = 'nakshgoyal382@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      
    }
  }

  return (
    <section id="contact">
      <div className="container contact">
        <p className="eyebrow">contact</p>
        <h2 className="contact__title">Let's talk about the role.</h2>
        <p className="contact__subtitle">
          Open for a AIML engineer roles aand full stack roles ,always happy to talk through past
          projects in more depth.
        </p>
        <div className="contact__actions">
          <button className="btn btn--primary" onClick={copyEmail}>
            {copied ? 'Copied!' : EMAIL}
          </button>
          <a
            href="https://www.linkedin.com/in/naksh-goyal-82503b315"
            className="btn btn--ghost"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/nakshXgoyal"
            className="btn btn--ghost"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <footer className="footer mono">
        © {new Date().getFullYear()} Naksh.Goyal
      </footer>
    </section>
  )
}
