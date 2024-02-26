import './css/FocusArea.css'
import focusAreaImg from '../assets/focus-area.svg'

const FocusArea = () => {
    return (
        <div className="focus-area">
            <h2>Key Strategic Focus Areas</h2>
            <p>The strategic focus areas of the former SPP, 
                which was aligned with the vision, mission and core 
                values of the IFSB, is illustrated below. The EC in its 
                meetings, resolved for the Secretariat to maintain the 
                below framework for the new SPP 2022-2024, but with greater 
                emphasis on the quality of outputs and greater focus on 
                member engagement as well as outcome measurement and reporting.
            </p>
            <img src={focusAreaImg} alt="An image of the key strategic focus areas" />
        </div>
    )
}

export default FocusArea