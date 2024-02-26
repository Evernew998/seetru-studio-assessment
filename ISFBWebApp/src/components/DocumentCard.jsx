import './css/DocumentCard.css'
import signingAgreementImg from '../assets/signing-agreement.png'
import pointingImg from '../assets/pointing.png'
import lawyerImg from '../assets/lawyer.png'
import guidelinesImg from '../assets/guidelines.png'

const DocumentCard = ({ img, title, date }) => {
  let image = signingAgreementImg

  if (img.includes('pointing')) {
    image = pointingImg
  }
  else if (img.includes('lawyer')) {
    image = lawyerImg
  }
  else if (img.includes('guidelines')) {
    image = guidelinesImg
  }

  return (
    <div className="document-card">
      <div className="document-card-image-container">
        <img src={image} alt="A picture of a close up of a business man signing agreement contract" />
      </div>
      <div className="document-card-text-container">
        <h3>Document</h3>
        <h4>{title}</h4>
        <p>November 2018</p>
      </div>
    </div>
  )
}

export default DocumentCard