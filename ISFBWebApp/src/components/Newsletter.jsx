import './css/Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className='newsletter-text'>
        <h4>Newsletter</h4>
        <p>Subscribe To Our News Letter And Get Our Latest Updates</p>
      </div>
      <form className='newsletter-form'>
        <div className='newsletter-input-wrapper'>
          <input type='text' name='subscribe-email' placeholder='Your Email' />
          <button>Subscribe Now</button>
        </div>
      </form>
    </div>
  )
}

export default Newsletter