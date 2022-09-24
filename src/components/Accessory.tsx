import glasses from '../images/accessories/glasses.png';
import earrings from '../images/accessories/earrings.png';
import flower from '../images/accessories/flower.png';
import headphone from '../images/accessories/headphone.png';


function Accessory() {
  return (
    <div className="Accessory">
      <img className="accessory_image" src={glasses} alt="accessory" />
    </div>
  )
}

export default Accessory;