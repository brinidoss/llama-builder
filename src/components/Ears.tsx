import defaultears from '../images/ears/default.png';
import forwardears from '../images/ears/tilt-forward.png';
import backwardears from '../images/ears/tilt-backward.png';

function Ears() {
  return (
    <div className="Ears">
      <img className="ears_image" src={defaultears} alt="ears" />
    </div>
  )
}

export default Ears;