import defaultleg from '../images/leg/default.png';
import boba from '../images/leg/bubble-tea.png';
import cookie from '../images/leg/cookie.png';
import game from '../images/leg/game-console.png';
import forwardleg from '../images/leg/tilt-forward.png';
import backwardleg from '../images/leg/tilt-backward.png';

function Leg() {
  return (
    <div className="Leg">
      <img className="leg_image" src={defaultleg} alt="leg" />
    </div>
  )
}

export default Leg;