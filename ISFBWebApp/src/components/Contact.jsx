import './css/Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className='contact-container'>
        <div className="company-location">
          <address>
            <span>ISLAMIC FINANCIAL SERVICES BOARD, </span>
            <br />
            Level 5, Sasana Kijang,
            <br />
            Bank Negara Malaysia,
            <br />
            2, Jalan Dato’ Onn, 
            <br />
            50480 Kuala Lumpur,
            <br />
            Malaysia.
          </address>
          <div className='google-map'>
            <iframe
              loading='lazy'
              allowFullScreen
              referrerPolicy='no-referrer-when-downgrade'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.760323540466!2d101.68804091136539!3d3.157770453084642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49415fc9784f%3A0x1d8e5e2030ebf711!2sIFSB%20-%20Islamic%20Financial%20Services%20Board!5e0!3m2!1sen!2smy!4v1708854897343!5m2!1sen!2smy">
            </iframe>
          </div>
        </div>
        <form className="contact-form">
          <h2>GET IN TOUCH WITH US</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
            sed diam
          </p>
          <div className='form-info-container'>
            <div className="form-info">
              <label htmlFor="name">Full Name</label>
              <input type="text" name='name'/>
            </div>
            <div className="form-info">
              <label htmlFor="email">Email</label>
              <input type="text" name='email'/>
            </div>
            <div className="form-info">
              <label htmlFor="phone">Phone</label>
              <input type="text" name='phone'/>
            </div>
            <div className="form-info">
              <label htmlFor="Subject">Subject</label>
              <input type="text" name='Subject'/>
            </div>
          </div>
          <button>SUBMIT NOW</button>
        </form>
      </div>
    </div>
  )
}

export default Contact