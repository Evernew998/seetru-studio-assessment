import contactBanner from '../assets/contact-banner.png'
import establishmentBanner from '../assets/establishment-banner.png'
import './css/Banner.css'

const Banner = ({ bannerObject }) => {
    let banner = contactBanner

    if (bannerObject.type === 'establishmentBanner') {
        banner = establishmentBanner
    }

    const style = {
        backgroundImage: `url(${banner})`,
        height: bannerObject.height,
        paddingTop: bannerObject.paddingTop,
        paddingBottom: bannerObject.paddingBottom
    }
    return (
        <div 
            className="banner"
            style={style}
        >
            <h1>{bannerObject.text}</h1>
        </div>
    )
}

export default Banner