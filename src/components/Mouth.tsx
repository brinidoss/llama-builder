import defaultmouth from '../images/mouth/default.png';
import astonished from '../images/mouth/astonished.png';
import eating from '../images/mouth/eating.png';
import laugh from '../images/mouth/laugh.png';
import tongue from '../images/mouth/tongue.png';


function Mouth() {
  return (
    <div className="Mouth">
      <img className="mouth_image" src={defaultmouth} alt="mouth" />
    </div>
  )
}

export default Mouth;