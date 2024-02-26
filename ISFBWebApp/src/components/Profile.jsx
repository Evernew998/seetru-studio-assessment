import './css/Profile.css'
import drBelloProfile from '../assets/dr-bello-profile.png'
import ProfileCard from './ProfileCard'

const Profile = ({ profileCards }) => {
    return (
        <div className='profile'>
            <div className="profile-info-container">
                <div className="profile-image-container">
                    <div className="profile-image">
                        <img src={drBelloProfile} alt="A picture of Dr. Bello Lawal Danbatta" />
                    </div>
                </div>
                <div className="profile-info">
                    <h2>Secretary General</h2>
                    <h3>Dr. Bello Lawal Danbatta was appointed the Secretary-General of the IFSB effective 29 January 2018.</h3>
                    <p>Dr. Danbatta, previously the Director of the Centre of Consultancy and Executive Programmes 
                        at INCEIF, has over 26 years combined experience in the private, academia, as well as in 
                        the financial services regulation and supervision sectors across Africa, Europe, Asia and 
                        the Middle East. He is a Member of the Accounting and Auditing Board of Accounting and 
                        Auditing Organisation for Islamic Financial Institutions (AAOIFI), the Basel Consultative 
                        Group (BCG), the International Ethics Standards Board for Accountants (IESBA), the 
                        International Auditing and Assurance Standards Board (IAASB) and has chaired various 
                        working groups for the issuance of financial accounting standards for Islamic financial 
                        institutions. He has also been involved in the development and drafting of standards, 
                        guidelines and frameworks for capital adequacy, accounting, as well as supervision and 
                        regulation of Islamic finance for various countries. Dr. Danbatta holds a Ph.D. in Islamic 
                        Banking and Finance from the International Islamic University Malaysia (IIUM), and an MBA 
                        in Corporate Finance. He is a Chartered Accountant (Fellow) with the Association of 
                        Certified Chartered Accountant (ACCA-UK), a Licensed International Financial Analyst 
                        (LIFA-UK), and a member of the Chartered Institute of Islamic Finance Professionals (CIIFP), 
                        Member of Nigerian Institute of Management (NIM), Institute of Chartered Accountants of 
                        Nigeria (ICAN), and International Council for Islamic Finance Educators (ICIFE). Dr. Danbatta 
                        is a known Islamic banking and finance consultant, and has been active in providing Islamic 
                        finance training and consultancy to central banks, securities commissions, deposit insurance 
                        corporations and Islamic banks. He also has a number of publications on Islamic banking, 
                        corporate governance and earnings management. In addition to these corporate engagements, 
                        he also held the positions of Assistant Professor at Sultan Qaboos University Oman, a Research
                        Fellow at the Accounting Research Institute (ARI) of University Technology MARA (UiTM), 
                        Malaysia and Academic Fellow at Insaniah University Malaysia. He has worked with the Highland 
                        Bank of Nigeria Plc, Peugeot Automobiles and Securities and Exchange Commission of Nigeria.
                    </p>
                </div>
            </div>
            <div className="profile-cards">
                <h3>Former Secretary-General</h3>
                <div className="profile-cards-container">
                    {profileCards.map(
                        profile => 
                            <ProfileCard 
                                key={profile.name} 
                                name={profile.name}
                                durationMonth={profile.durationMonth}
                                durationYear={profile.durationYear}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile