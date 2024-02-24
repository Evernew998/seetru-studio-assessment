import '../components/css/Sitemap.css'
import companyLogo from '../assets/seetru-company-logo.png'
import backgroundFooter from '../assets/Sitemap-background.svg'

const Sitemap = () => {
  return (
    <div className='sitemap' style={{backgroundImage: `url(${backgroundFooter})`}}>
      <div className='company-address-container'>
        <div className='company-address'>
          <img src={companyLogo} alt='logo' />
          <p>ISLAMIC FINANCIAL SERVICES BOARD</p>
          <address>
            Level 5, Sasana Kijang, 
            Bank Negara Malaysia, 2, Jalan Dato’ Onn,
            50480 Kuala Lumpur, Malaysia.
          </address>
          <div className='social-media-footer-container'>
            <a  href=''>a</a>
            <a  href=''>a</a>
            <a  href=''>a</a>
            <a  href=''>a</a>
          </div>
        </div>
      </div>
      <div className='sitemap-nav-container'>
        <div className='sitemap-nav'>
          <p>About IFSB</p>
            <ul>
              <li><a href=''>Establishment</a></li>
              <li><a href=''>Organisational Structure</a></li>
              <li><a href=''>Council</a></li>
              <li><a href=''>commitee</a></li>
              <li><a href=''>Working Groups</a></li>
              <li><a href=''>Task Forces</a></li>
              <li><a href=''>Secretariat</a></li>
              <li><a href=''>IFSB Standards</a></li>
            </ul>
        </div>
        <div className='sitemap-nav'>
          <p>IFSB Membership</p>
          <ul>
            <li><a href=''>List of Members</a></li>
            <li><a href=''>Requirements & Benefits</a></li>
            <li><a href=''>Application Procedure</a></li>
          </ul>
        </div>
        <div className='sitemap-nav'>
          <p>Implementation</p>
          <ul>
            <li><a href=''>FIS Workshop</a></li>
            <li><a href=''>Technical Assistance / Policy Advice / Self Assessment</a></li>
            <li><a href=''>E-Learning</a></li>
            <li><a href=''>Train of Trainers (ToT) Program</a></li>
            <li><a href=''>Impact and Consistency Assessment Program ( ICAP)</a></li>
          </ul>
        </div>
        <div className='sitemap-nav'>
          <p>PSIFIs</p>
          <ul>
            <li><a href=''>About PSIFIs</a></li>
            <li><a href=''>Key Exhibits</a></li>
            <li><a href=''>E-Learning</a></li>
            <li><a href=''>Data & Metadata</a></li>
            <li><a href=''>Selected Aggregated Indicators</a></li>
          </ul>
        </div>
        <div className='sitemap-nav'>
          <p>Resource Center</p>
          <ul>
            <li><a href=''>PSIFIs</a></li>
            <li><a href=''>Governing Document</a></li>
            <li><a href=''>IFSB Bulletin</a></li>
            <li><a href=''>Research / Reports / Proceedings</a></li>
            <li><a href=''>Public Lecture Series</a></li>
            <li><a href=''>Islamic Financial Stability Forums</a></li>
          </ul>
        </div>
        <div className='sitemap-nav'>
          <p>Events & Activities</p>
          <ul>
            <li><a href=''>IFSB Annual Events</a></li>
            <li><a href=''>Awareness Programme</a></li>
            <li><a href=''>IFSB-FIS Workshop</a></li>
            <li><a href=''>Meetings</a></li>
          </ul>
        </div>
        <div className='sitemap-nav'>
          <p>Media</p>
          <ul>
            <li><a href=''>Press Release</a></li>
            <li><a href=''>Speeches</a></li>
            <li><a href=''>Gallery</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sitemap