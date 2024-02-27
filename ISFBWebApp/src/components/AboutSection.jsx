import './css/AboutSection.css'
import companyImg from '../assets/company.png'

const AboutSection = ({ handleClick }) => {
  return (
    <div className="about-section">
      <h2>About PSIFIs</h2>
      <div className="about-section-content-container">
        <div className="about-section-content-graphics">
          <h3>A Credible and Accurate Islamic Finance Database</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua.
          </p>
          <div className="about-image-container">
            <img src={companyImg} alt="A picture of the company building." />
            <div className="about-image-text-container">
              <h4>IFSB HQ KUALA LUMPUR, MALAYSIA</h4>
            </div>
          </div>
        </div>
        <div className="about-section-content-texts">
            <div className="tabs">
              <button onClick={handleClick}>Vision</button>
              <button onClick={handleClick}>Mission</button>
              <button onClick={handleClick}>Core Values</button>
              <button onClick={handleClick}>Objective</button>
              <button onClick={handleClick}>Moto</button>
            </div>
            <div className="tab-texts">
              <p>The mission of the IFSB is to promote the stability and 
                resilience of the Islamic financial services industry. The 
                IFSB seeks to achieve its mission through the issuance, and 
                facilitating the implementation, of global and prudential and 
                supervisory standards and other initiatives that foster knowledge 
                sharing and cooperation.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                dolore magna aliquyam erat, sed diam voluptua. At
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection