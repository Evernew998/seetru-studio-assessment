import './css/DocumentCard.css'
import signingAgreementImg from '../assets/signing-agreement.png'

const DocumentCard = () => {
  return (
    <div className="document-card">
      <div className="document-card-image-container">
        <img src={signingAgreementImg} alt="A picture of a close up of a business man signing agreement contract" />
      </div>
      <div className="document-card-text-container">
        <h3>Document</h3>
        <h4>Articles of Agreement</h4>
        <p>November 2018</p>
      </div>
    </div>
  )
}

export default DocumentCard