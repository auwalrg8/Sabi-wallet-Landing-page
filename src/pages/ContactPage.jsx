import "./ContactPage.css"

const ContactPage = () => (
  <section id="contact" className="contact-page">
    <div className="contact-container">
      <header className="contact-header">
        <p className="contact-kicker">Contact</p>
        <h1>Talk to the Sabi Wallet team</h1>
        <p className="contact-intro">
          Need help, partnership info or press assets? Drop us a line and we will reply from
          <a href="mailto:sabiwallet@gmail.com"> sabiwallet@gmail.com</a> within one business day.
        </p>
      </header>
      <div className="contact-grid">
        <div className="contact-card">
          <h2>Office details</h2>
          <p>
            Sabi Wallet is proudly built in Kaduna for Nigeria and Africa. We love hearing ideas
            on how to make Bitcoin simple for every Nigerian.
          </p>
          <ul>
            <li>
              <span>Email:</span>
              <a href="mailto:sabiwallet@gmail.com">sabiwallet@gmail.com</a>
            </li>
            <li>
              <span>Location:</span>
              Kaduna, Nigeria
            </li>
            <li>
              <span>Open source:</span>
              <a href="https://github.com/auwalrg8/Sabi" target="_blank" rel="noreferrer">
                GitHub Repository
              </a>
            </li>
          </ul>
        </div>
        <form
          className="contact-form"
          action="mailto:sabiwallet@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <div className="form-group">
            <label htmlFor="contact-name">Full Name:</label>
            <input id="contact-name" type="text" placeholder="Amina Bello" />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email:</label>
            <input id="contact-email" type="email" placeholder="you@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="contact-subject">Subject:</label>
            <input
              id="contact-subject"
              type="text"
              placeholder="Tell us what you need."
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Message:</label>
            <textarea
              id="contact-message"
              rows="5"
              placeholder="How can Sabi Wallet help you today?"
            ></textarea>
          </div>
          <button type="submit" className="contact-submit">
            Send Message
          </button>
          <p className="form-note">
            All submissions go straight to sabiwallet@gmail.com. We aim to reply within one business day.
          </p>
        </form>
      </div>
    </div>
  </section>
)

export default ContactPage
