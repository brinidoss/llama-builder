import Accessory from "./Accessory";
import Background from "./Background";
import Ears from "./Ears";
import Eyes from "./Eyes";
import Hair from "./Hair";
import Leg from "./Leg";
import Mouth from "./Mouth";
import Neck from "./Neck";
import Nose from "./Nose";


function Llama() {
  return (
    <div className="Llama">
       
        <Accessory />
        <Hair />
        <Ears />
        <Eyes />
        <Nose />
        <Mouth />
        <Neck />
        <Leg /> 
        <Background />
    </div>
  )
}

export default Llama;