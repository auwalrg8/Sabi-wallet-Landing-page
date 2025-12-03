import './App.css'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <h1 className="logo">Sabi Wallet 🇳🇬</h1>
          <p className="tagline">
            Nigeria's first non-custodial Bitcoin + Lightning wallet
          </p>
          <p className="subtitle">
            That feels exactly like Moniepoint & OPay
          </p>
        </div>
      </header>

      <main className="main-content">
        <section className="features">
          <div className="feature">
            <h2>📱 Send Sats Like Airtime</h2>
            <p>Send sats as easily as you dash airtime. Simple, fast, familiar.</p>
          </div>

          <div className="feature">
            <h2>💰 Receive Like Bank Alert</h2>
            <p>Instant notifications when you receive Bitcoin. Just like your bank.</p>
          </div>

          <div className="feature">
            <h2>🔄 P2P Trading</h2>
            <p>Buy & sell BTC/USDT P2P like NoOnes. Easy peer-to-peer trading.</p>
          </div>
        </section>

        <section className="promise">
          <h2>Your Money, Your Keys, Forever</h2>
          <div className="promise-points">
            <div className="point">❌ No seed phrase</div>
            <div className="point">❌ No KYC</div>
            <div className="point">❌ No custody</div>
          </div>
          <p className="built-for">Built for the street, by the street.</p>
        </section>

        <section className="cta">
          <h2>Coming Soon</h2>
          <p>Figma designs will be added soon</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Sabi Wallet. Your keys, your money, forever.</p>
      </footer>
    </div>
  )
}

export default App
