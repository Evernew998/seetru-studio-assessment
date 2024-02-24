import './css/Newsletter.css'
import upArrow from '../assets/up-arrow-icon.svg'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <button 
        className='up-button' style={{backgroundImage: `url(${upArrow})`}}
        onClick={() => window.scrollTo(0, 0)}
      >
      </button>
      <div className='newsletter-text'>
        <h4>Newsletter</h4>
        <p>Subscribe To Our News Letter And Get Our Latest Updates</p>
      </div>
      <form className='newsletter-form'>
        <div className='newsletter-input-wrapper'>
          <div></div>
          <input type='text' name='subscribe-email' placeholder='Your Email' />
          <button>Subscribe Now</button>
        </div>
      </form>
    </div>
  )
}

export default Newsletter