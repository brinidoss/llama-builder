import defaulthair from '../images/hair/default.png';
import bangs from '../images/hair/bang.png';
import curls from '../images/hair/curls.png';
import elegant from '../images/hair/elegant.png';
import fancy from '../images/hair/fancy.png';
import quiff from '../images/hair/quiff.png';
import short from '../images/hair/short.png';

function Hair() {
  return (
    <div className="Hair">
      <img className="hair_image" src={defaulthair} alt="hair" />
    </div>
  )
}

export default Hair