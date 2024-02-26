import './css/Document.css'
import background from '../assets/white-gold-background.svg'
import DocumentCard from './DocumentCard'

const Document = () => {
  const style = {
    backgroundImage: `url(${background})`
  }
  return (
    <div className="document" style={style}>
      <h2>Governing Documents</h2>
      <p>The functions and activities of the IFSB are governed by four Main Documents.</p>
      <div className="document-cards">
        <DocumentCard />
        <DocumentCard />
      </div>
    </div>
  )
}

export default Document