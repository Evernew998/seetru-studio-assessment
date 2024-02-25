import contactBanner from '../assets/contact-banner.png'
import establishmentBanner from '../assets/establishment-banner.png'
import './css/Banner.css'

const Banner = ({ banner }) => {
    let bannerType = 'banner-establishment-page'
    let backgroundImage = establishmentBanner
    let bannerText = 'ESTABLISHMENT'

    if (banner === 'contactBanner') {
        bannerType = 'banner-contact-page'
        backgroundImage = contactBanner
        bannerText = 'CONTACT US'
    }

    return (
        <div 
            className={`banner ${bannerType}`}
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <h1>{bannerText}</h1>
        </div>
    )
}

export default Banner