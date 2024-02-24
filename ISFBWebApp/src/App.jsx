import './components/css/App.css'
import './components/css/Header.css'
import './components/css/Navbar.css'
import './components/css/Sitemap.css'
import Flexbox from './components/Flexbox'
import companyLog from './assets/seetru-company-logo.png'

const Sitemap = () => {
  return (
    <div className='sitemap'>
      <div className='company-address-container'>
        <div className='company-address'>
          <img src={companyLog} alt='logo' />
          <p>ISLAMIC FINANCIAL SERVICES BOARD</p>
          <address>
            Level 5, Sasana Kijang, 
            Bank Negara Malaysia, 2, Jalan Dato’ Onn,
            50480 Kuala Lumpur, Malaysia.
          </address>
          <div className='social-media-footer-container'>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
          </div>
        </div>
      </div>
      <div className='sitemap-nav-container'>
        <div className='sitemap-nav'>
          <p>About IFSB</p>
            <ul>
              <li>Establishment</li>
              <li>Organisational Structure</li>
              <li>Council</li>
              <li>commitee</li>
              <li>Working Groups</li>
              <li>Task Forces</li>
              <li>Secretariat</li>
              <li>IFSB Standards</li>
            </ul>
        </div>
        <div className='sitemap-nav'>
          <p>IFSB Membership</p>
          <ul>
            <li>List of Members</li>
            <li>Requirements & Benefits</li>
            <li>Application Procedure</li>
          </ul>
        </div>
        <div className='sitemap-nav'>
          <p>Implementation</p>
          <ul>
            <li>FIS Workshop</li>
            <li>Technical Assistance / Policy Advice / Self Assessment</li>
            <li>E-Learning</li>
            <li>Train of Trainers (ToT) Program</li>
            <li>Impact and Consistency Assessment Program ( ICAP)</li>
          </ul>
        </div>
        <div className='sitemap-nav'>
          <p>PSIFIs</p>
          <ul>
            <li>About PSIFIs</li>
            <li>Key Exhibits</li>
            <li>E-Learning</li>
            <li>Data & Metadata</li>
            <li>Selected Aggregated Indicators</li>
          </ul>
        </div>
        <div className='sitemap-nav'>
          <p>Resource Center</p>
          <ul>
            <li>PSIFIs</li>
            <li>Governing Document</li>
            <li>IFSB Bulletin</li>
            <li>Research / Reports / Proceedings</li>
            <li>Public Lecture Series</li>
            <li>Islamic Financial Stability Forums</li>
          </ul>
        </div>
        <div className='sitemap-nav'>
          <p>Events & Activities</p>
          <ul>
            <li>IFSB Annual Events</li>
            <li>Awareness Programme</li>
            <li>IFSB-FIS Workshop</li>
            <li>Meetings</li>
          </ul>
        </div>
        <div className='sitemap-nav'>
          <p>Media</p>
          <ul>
            <li>Press Release</li>
            <li>Speeches</li>
            <li>Gallery</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <Sitemap />
  )
}

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left-content'>

      </div>
      <div className='navbar-right-content'>
        <div className='main-nav'>
          <a href='' style={{marginRight: '32px'}}>Home</a>
          <a href='' style={{marginRight: '41px'}}>About IFSB</a>
          <a href='' style={{marginRight: '34px'}}>Standard Development</a>
          <a href='' style={{marginRight: '34px'}}>Publication</a>
          <a href='' style={{marginRight: '42px'}}>PSIFIs</a>
          <a href='' style={{marginRight: '30px'}}>Consultation</a>
          <a href='' style={{marginRight: '35px'}}>Implementation</a>
          <a href=''>Event & Activities</a>
        </div>
        <div className='navbar-member-zone'>
          <img src='' alt='pro'/>
          <a href=''>{"IFSB Member's Zone"}</a>
        </div>
      </div>
    </nav>
  )
}

const Header = () => {
  return (
    <div className='header-container'>
      <div className="header">
        <div className='header-left-content'>
          <div className='header-social-media'>
            <a href=''></a>
          </div>
        </div>
        <div className='header-right-content'>
          <nav className='header-nav'>
            <a href='' style={{marginRight: '46px'}}>E-learning</a>
            <a href='' style={{marginRight: '50px'}}>FAQ</a>
            <a href='' style={{marginRight: '45px'}}>Career</a>
            <a href=''>Contact Us</a>
          </nav>
          <div className='header-language-toggle'>
            <button>EN</button>
            <div className='language-toggle-line'></div>
            <button>AR</button>
          </div>
        </div>
      </div>
      <div className='header-horizontal-bar'></div>
      <Navbar />
    </div>
  )
}

const App = () => {
  return (
    <div>
      {
        /* <Header />
      <div style={{height: '500px'}}></div>
      */
      }
      <Footer />
    </div>
  )
}

export default App
