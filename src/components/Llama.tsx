import Accessory from "./Accessory";
import Background from "./Background";
import Ears from "./Ears";
import Eyes from "./Eyes";
import Hair from "./Hair";
import Leg from "./Leg";
import Mouth from "./Mouth";
import Neck from "./Neck";
import Nose from "./Nose";

export interface Props {
  accessory: string;
  background: string;
  hair: string;
  ears: string;
  eyes: string;
  mouth: string;
  neck: string;
  leg: string; 
}

function Llama({accessory, hair, ears, eyes, mouth, neck, leg, background}: Props) {
  return (
    <div className="Llama">
       
        <Accessory accessory={accessory}/>
        <Hair hair={hair}/>
        <Ears ears={ears} />
        <Eyes eyes={eyes}/>
        <Nose />
        <Mouth mouth={mouth}/>
        <Neck neck={neck}/>
        <Leg leg={leg}/> 
        <Background background={background}/>
    </div>
  )
}

export default Llama;