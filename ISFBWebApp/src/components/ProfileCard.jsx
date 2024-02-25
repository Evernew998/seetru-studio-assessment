import './css/ProfileCard.css'
import drBelloPic from '../assets/dr-bello.png'

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <h4>2018- Current</h4>
            <div className="profile-card-info">
                <img src={drBelloPic} alt="A profile picture of Dr. Bello Lawal Danbatta" />
                <div className="profile-card-info-text">
                    <div className="profile-card-info-text-container">
                        <h5>Dr. Bello Lawal Danbatta</h5>
                        <p>January 2018 - Current</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard