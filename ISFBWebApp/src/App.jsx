import './components/css/App.css'
import './components/css/Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className='header-social-media'></div>
      <div className='header-right-side'>
        <nav className='header-nav'>
          <a href=''>E-Learning</a>
          <a href=''>FAQ</a>
          <a href=''>Career</a>
          <a href=''>Contact Us</a>
        </nav>
        <div className='language-toggle'></div>
      </div>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default App
