import defaultneck from '../images/neck/default.png';
import forwardneck from '../images/neck/bend-forward.png';
import backwardneck from '../images/neck/bend-backward.png';
import thick from '../images/neck/thick.png';

function Neck() {
  return (
    <div className="Neck">
      <img className="neck_image" src={defaultneck} alt="neck" />
    </div>
  )
}

export default Neck