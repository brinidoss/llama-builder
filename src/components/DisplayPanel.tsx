import Llama from "./Llama";

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

function DisplayPanel({accessory,background,hair,ears,eyes,mouth,neck,leg}: Props) {
  return (
    <div className="DisplayPanel">
      <Llama 
        accessory={accessory}
        background={background}
        hair={hair}
        ears={ears}
        eyes={eyes}
        mouth={mouth}
        neck={neck}
        leg={leg}
      />
    </div>
  )
}

export default DisplayPanel;