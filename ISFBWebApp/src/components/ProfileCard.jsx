import './css/ProfileCard.css'
import drBelloPic from '../assets/dr-bello.png'
import jaseemPic from '../assets/jaseem.png'
import rifaatPic from '../assets/rifaat.png'

const ProfileCard = ({ durationYear, durationMonth, name }) => {
    let img = rifaatPic

    if (name.includes('Bello')) {
        img = drBelloPic
    }
    else if (name.includes('Jaseem')) {
        img = jaseemPic
    }
    
    return (
        <div className="profile-card">
            <h4>{durationYear}</h4>
            <div className="profile-card-info">
                <img src={img} alt="A profile picture of Dr. Bello Lawal Danbatta" />
                <div className="profile-card-info-text">
                    <div className="profile-card-info-text-container">
                        <h5>{name}</h5>
                        <p>{durationMonth}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard