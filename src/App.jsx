import { useState } from 'react'
import './App.css'

const modules = [
  { id: 'dashboard', label: 'Dashboard', icon: '⌂' },
  { id: 'patients', label: 'Patients', icon: '' },
  { id: 'families', label: 'Families', icon: '' },
  { id: 'qr', label: 'QR ID', icon: '' },
  { id: 'vaccination', label: 'Vaccination', icon: '' },
  { id: 'inventory', label: 'Inventory', icon: '' },
  { id: 'referrals', label: 'Referrals', icon: '' },
  { id: 'reports', label: 'Reports', icon: '' },
  { id: 'notifications', label: 'Alerts', icon: '' },
  { id: 'users', label: 'Users', icon: '' },
]

const stats = [
  { label: 'Total patients', value: '18,420', tone: 'primary' },
  { label: 'Vaccinated today', value: '364', tone: 'success' },
  { label: 'Low stock items', value: '12', tone: 'warning' },
  { label: 'Open referrals', value: '27', tone: 'accent' },
]

const moduleContent = {
  dashboard: {
    title: 'Community Health Dashboard',
    tag: 'Overview',
    description:
      'Monitor patient records, vaccination progress, stock levels, and referral status across all community health operations.',
    highlights: ['42 outreach events this month', '98.4% vaccination completion', '7 barangays synced'],
  },
  patients: {
    title: 'Patient Records',
    tag: 'Profiles',
    description:
      'Review demographics, health history, treatment plans, and family links for every registered patient in the community.',
    highlights: ['1,284 new patients this quarter', '98% records updated', '7 family clusters linked'],
  },
  families: {
    title: 'Family Profiles',
    tag: 'Households',
    description:
      'Track household groups, guardianship details, and shared care plans to support community-level health programs.',
    highlights: ['3,420 families registered', '241 high-risk households', '18 family care plans pending'],
  },
  qr: {
    title: 'QR Identification',
    tag: 'Fast Lookup',
    description:
      'Generate patient QR codes for quick verification and scan them from phones to retrieve records on the go.',
    highlights: ['1,680 QR codes generated', '92% scan success rate', 'Offline scan ready'],
  },
  vaccination: {
    title: 'Vaccination Schedule',
    tag: 'Immunization',
    description:
      'Manage scheduled doses, track completion, and send reminder alerts for follow-up appointments and catch-up campaigns.',
    highlights: ['2 mobile vaccination teams', '16 reminder batches sent', '8 communities due this week'],
  },
  inventory: {
    title: 'Medicine Inventory',
    tag: 'Supplies',
    description:
      'Track stock movements, monitor expiry dates, and receive low-stock alerts to avoid medicine gaps at local health posts.',
    highlights: ['3 stockouts prevented', '11 items expiring soon', '24 transactions today'],
  },
  referrals: {
    title: 'Referral Tracking',
    tag: 'Care Continuity',
    description:
      'Send patients to hospitals or specialty facilities and monitor referral progress until they receive treatment.',
    highlights: ['27 active referrals', '14 referrals accepted', '6 pending follow-ups'],
  },
  reports: {
    title: 'Reports & Export',
    tag: 'Compliance',
    description:
      'Generate DOH and LGU reports, produce printable slips, and prepare monthly summaries for local health units.',
    highlights: ['12 reports generated', '5 printable slips ready', '2 export formats available'],
  },
  notifications: {
    title: 'Notification Service',
    tag: 'Messaging',
    description:
      'Send reminders, alerts, and status messages through email, SMS, or messenger channels for patients and staff.',
    highlights: ['640 messages sent', '18 scheduled alerts', '4 failed sends retrying'],
  },
  users: {
    title: 'User & Access Management',
    tag: 'Access Control',
    description:
      'Manage staff roles, permissions, login access, and account security to keep health records protected and auditable.',
    highlights: ['49 active accounts', '6 role groups', '3 access approvals pending'],
  },
}

function App() {
  const [currentView, setCurrentView] = useState('dashboard')
  const activeModule = moduleContent[currentView] || moduleContent.dashboard

  const goToDashboard = () => setCurrentView('dashboard')

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">C</div>
          <div>
            <span className="brand-tag">Community</span>
            <h2>eHealth</h2>
          </div>
        </div>

        <nav className="nav-list" aria-label="Main navigation">
          {modules.map((module) => (
            <button
              key={module.id}
              type="button"
              className={`nav-button ${currentView === module.id ? 'active' : ''}`}
              onClick={() => setCurrentView(module.id)}
            >
              <span className="nav-icon">{module.icon}</span>
              {module.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Good morning</p>
            <h1>{activeModule.title}</h1>
          </div>

          <div className="top-actions">
            <button type="button" className="ghost-button">
              Export
            </button>
            <button type="button" className="primary-button">
              New record
            </button>
          </div>
        </header>

        {currentView === 'dashboard' ? (
          <>
            <section className="stats-grid">
              {stats.map((stat) => (
                <article key={stat.label} className={`stat-card ${stat.tone}`}>
                  <p>{stat.label}</p>
                  <strong>{stat.value}</strong>
                </article>
              ))}
            </section>

            <section className="content-grid">
              <article className="panel large-panel">
                <div className="panel-header">
                  <div>
                    <span className="panel-tag">Overview</span>
                    <h3>Quick access</h3>
                  </div>
                  <button type="button" className="link-button" onClick={goToDashboard}>
                    Refresh
                  </button>
                </div>

                <div className="module-grid">
                  {modules
                    .filter((module) => module.id !== 'dashboard')
                    .map((module) => (
                      <button
                        key={module.id}
                        type="button"
                        className="module-tile"
                        onClick={() => setCurrentView(module.id)}
                      >
                        <span className="tile-icon">{module.icon}</span>
                        <span>{module.label}</span>
                      </button>
                    ))}
                </div>
              </article>

              <article className="panel">
                <div className="panel-header">
                  <div>
                    <span className="panel-tag">Today</span>
                    <h3>Upcoming actions</h3>
                  </div>
                </div>

                <ul className="task-list">
                  <li>
                    <span className="dot green" />
                    Child immunization drive at Brgy. San Pedro
                  </li>
                  <li>
                    <span className="dot orange" />
                    12 medicine bundles need restocking
                  </li>
                  <li>
                    <span className="dot blue" />
                    3 referral documents awaiting review
                  </li>
                  <li>
                    <span className="dot purple" />
                    48 patient reminders scheduled for SMS
                  </li>
                </ul>
              </article>
            </section>
          </>
        ) : (
          <section className="content-grid detail-grid">
            <article className="panel feature-panel">
              <span className="panel-tag">{activeModule.tag}</span>
              <h2>{activeModule.title}</h2>
              <p>{activeModule.description}</p>

              <ul className="highlight-list">
                {activeModule.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="action-row">
                <button type="button" className="primary-button" onClick={goToDashboard}>
                  Go to Dashboard
                </button>
                <button
                  type="button"
                  className="ghost-button"
                  onClick={() => setCurrentView('patients')}
                >
                  Open Patients
                </button>
              </div>
            </article>

            <article className="panel">
              <div className="panel-header">
                <div>
                  <span className="panel-tag">Module</span>
                  <h3>Activity summary</h3>
                </div>
              </div>

              <div className="mini-summary">
                <div>
                  <span>Active records</span>
                  <strong>1,286</strong>
                </div>
                <div>
                  <span>Pending tasks</span>
                  <strong>18</strong>
                </div>
                <div>
                  <span>Sync status</span>
                  <strong>Online</strong>
                </div>
              </div>

              <button type="button" className="secondary-button" onClick={goToDashboard}>
                Back
              </button>
            </article>
          </section>
        )}
      </main>
    </div>
  )
}

export default App