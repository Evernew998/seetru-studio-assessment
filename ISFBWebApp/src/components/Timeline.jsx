import './css/Timeline.css'
import timelineBackground from '../assets/timeline-background.png'

const Timeline = () => {
  const style = {
    backgroundImage: `url(${timelineBackground})`
  }
  return (
    <div className="timeline">
      <div className="timeline-container" style={style}>
        <h2>Timeline</h2>
        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore 
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
          no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
          ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
          sed diam voluptua. At vero eos et accusam et justo duo dolores et
          ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
          Lorem ipsum dolor sit amet
        </p>
        <div className="timeline-graphics-container">
          <div className="timeline-graphics">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline