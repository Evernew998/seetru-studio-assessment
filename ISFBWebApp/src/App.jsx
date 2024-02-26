import './components/css/App.css'
import './components/css/Header.css'
import './components/css/Navbar.css'
//import Flexbox from './components/Flexbox'
import Sitemap from './components/Sitemap'
import HorizontalBar from './components/HorizontalBar'
import PolicyFooter from './components/PolicyFooter'
import Newsletter from './components/Newsletter'
import Banner from './components/Banner'
import Profile from './components/Profile'
import Document from './components/Document'
import FocusArea from './components/FocusArea'
//import Contact from './components/Contact'


const Footer = () => {
  return (
    <div>
      <Newsletter />
      <Sitemap />
      <HorizontalBar />
      <PolicyFooter />
    </div>
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
      <HorizontalBar />
      <Navbar />
    </div>
  )
}

const App = () => {

  const banner = ''
  const profileCards = [
    {
      durationYear: '2018- Current',
      name: 'Dr. Bello Lawal Danbatta',
      durationMonth: 'January 2018 - Current'
    },
    {
      durationYear: '2011 - 2017',
      name: 'Jaseem Ahmed',
      durationMonth: 'May 2011 - April 2017'
    },
    {
      durationYear: '2003 - 2011',
      name: 'Professor Datuk Rifaat Ahmed Abdel Karim',
      durationMonth: 'March 2003 - April 2011'
    }
  ]

  const documents = [
    {
      img: 'signing',
      title: 'Articles of Agreement',
      date: 'November 2018'
    },
    {
      img: 'pointing',
      title: 'IFSB Act 2002',
      date: 'September 2002'
    },
    {
      img: 'lawyer',
      title: 'IFSB By-Laws',
      date: 'November 2018'
    },
    {
      img: 'guidelines',
      title: 'Guidelines and Procedures for the Preparation of Standards/Guidelines',
      date: 'September 2002'
    },
  ]

  return (
    <div>
      {
        /* 
        <Header />
        <Contact />
      <div style={{height: '500px'}}></div>
      */
      }
      <Banner banner={banner}/>
      <FocusArea />
      <Document documents={documents}/>
      <Profile profileCards={profileCards}/>
      <Footer />
    </div>
  )
}

export default App
