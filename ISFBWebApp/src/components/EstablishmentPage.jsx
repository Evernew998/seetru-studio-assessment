import AboutSection from "./AboutSection"
import Timeline from "./Timeline"
import FocusArea from "./FocusArea"
import Document from "./Document"
import Profile from "./Profile"

const EstablishmentPage = ({ documents, profileCards, handleClick }) => {
    return (
        <>
            <AboutSection handleClick={handleClick}/>
            <Timeline />
            <FocusArea />
            <Document documents={documents} />
            <Profile profileCards={profileCards} />
        </>
    )
}

export default EstablishmentPage