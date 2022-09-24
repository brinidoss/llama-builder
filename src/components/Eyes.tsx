import defaulteyes from '../images/eyes/default.png';
import angry from '../images/eyes/angry.png';
import naughty from '../images/eyes/naughty.png';
import panda from '../images/eyes/panda.png';
import smart from '../images/eyes/smart.png';
import star from '../images/eyes/star.png';


function Eyes() {
  return (
    <div className="Eyes">
      <img className="eyes_image" src={defaulteyes} alt="eyes" />
    </div>
  )
}

export default Eyes;