import './components/css/App.css'
import './components/css/Header.css'
import './components/css/Navbar.css'
import './components/css/Sitemap.css'

const Sitemap = () => {
  return (
    <div className='sitemap'>
      <div className='sitemap-'></div>
      <div className='sitemap-nav-container'>
        <div className='sitemap-nav'>
          <div className='sitemap-nav-content'></div>
          <div className='sitemap-nav-content'></div>
          <div className='sitemap-nav-content'></div>
        </div>
        <div className='sitemap-nav'>
          <div className='sitemap-nav-content'></div>
          <div className='sitemap-nav-content'></div>
          <div className='sitemap-nav-content'></div>
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
      <Header />
      <div style={{height: '500px'}}></div>
      <Footer />
    </div>
  )
}

export default App
