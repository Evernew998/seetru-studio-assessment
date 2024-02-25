import './css/Profile.css'
import ProfileCard from './ProfileCard'

const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile-cards">
                <h3>Former Secretary-General</h3>
                <div className="profile-cards-container">
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                </div>
            </div>
        </div>
    )
}

export default Profile