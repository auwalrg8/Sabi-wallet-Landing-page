import { Link } from "react-router-dom";
import "./PrivacyPage.css";

const PrivacyPage = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero-section">
        <div className="privacy-hero-container">
          <span className="privacy-badge">Legal</span>
          <h1 className="privacy-hero-title">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="privacy-hero-subtitle">
            Last updated: January 1, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content-section">
        <div className="privacy-container">
          <div className="privacy-intro">
            <p>
              Sabi Wallet (&ldquo;Sabi&rdquo;, &ldquo;we&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, and protect information in our non-custodial app.
            </p>
            <div className="privacy-highlight">
              <span className="privacy-highlight-icon">🔐</span>
              <p>Your money na your money. Sovereign privacy first.</p>
            </div>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">1. Non-Custodial App</h2>
            <p>
              Sabi is non-custodial – we don&apos;t access your keys, funds, or data. All processing is on-device. No servers store your info.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">2. Information We Collect</h2>
            <ul className="privacy-list">
              <li>
                <strong>No Personal Data by Default:</strong> No email, phone, or KYC required.
              </li>
              <li>
                <strong>Optional Data:</strong> If you use social recovery, we store encrypted contact npubs (local Hive only).
              </li>
              <li>
                <strong>Device Data:</strong> Anonymous analytics (crashes, usage) via Firebase – opt-out in Settings.
              </li>
              <li>
                <strong>Nostr:</strong> Public npub shared if you enable (your choice).
              </li>
              <li>
                <strong>P2P/VTU:</strong> Payment methods processed by third parties (e.g., Tapnob) – see their policies.
              </li>
              <li>
                <strong>No Logs:</strong> No transaction logs sent to us.
              </li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">3. How We Use Data</h2>
            <ul className="privacy-list">
              <li>Improve app (anonymous analytics).</li>
              <li>No selling/sharing of data.</li>
              <li>Nostr features are public by design.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">4. Third-Party Services</h2>
            <div className="privacy-third-party-grid">
              <div className="privacy-third-party-card">
                <h4>Breez SDK Spark</h4>
                <p>Lightning processing</p>
                <a href="https://breez.technology/privacy" target="_blank" rel="noopener noreferrer" className="privacy-link">
                  breez.technology/privacy
                </a>
              </div>
              <div className="privacy-third-party-card">
                <h4>Nostr Relays</h4>
                <p>Public events – no control by us</p>
              </div>
              <div className="privacy-third-party-card">
                <h4>Tapnob</h4>
                <p>Fiat ramp integration</p>
                <a href="https://tapnob.com/privacy" target="_blank" rel="noopener noreferrer" className="privacy-link">
                  tapnob.com/privacy
                </a>
              </div>
              <div className="privacy-third-party-card">
                <h4>Google Analytics/Firebase</h4>
                <p>Anonymous only – no identifiers</p>
              </div>
            </div>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">5. Security</h2>
            <ul className="privacy-list privacy-list-secure">
              <li>On-device encryption (Hive AES-256).</li>
              <li>No cloud storage of sensitive data.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">6. Your Rights</h2>
            <ul className="privacy-list">
              <li>
                <strong>Access/delete data:</strong> Settings → Delete Wallet (local only).
              </li>
              <li>
                <strong>Opt-out analytics:</strong> Settings toggle.
              </li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">7. Children&apos;s Privacy</h2>
            <p>
              Sabi Wallet is not intended for users under 18 years of age.
            </p>
          </div>

          <div className="privacy-section">
            <h2 className="privacy-section-title">8. Changes</h2>
            <p>
              We may update this Privacy Policy – check app for notices.
            </p>
          </div>

          <div className="privacy-contact">
            <h3>Contact Us</h3>
            <p>
              For questions about this Privacy Policy, contact us at{" "}
              <a href="mailto:hello@sabiwallet.online" className="privacy-link">
                hello@sabiwallet.online
              </a>
            </p>
          </div>

          <div className="privacy-navigation">
            <Link to="/" className="privacy-back-button">
              ← Back to Home
            </Link>
            <Link to="/terms" className="privacy-next-button">
              Terms & Conditions →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="privacy-footer">
        <p>© 2025 Sabi Wallet. Made in Kaduna ❤️ for Nigeria 🇳🇬</p>
      </footer>
    </div>
  );
};

export default PrivacyPage;
