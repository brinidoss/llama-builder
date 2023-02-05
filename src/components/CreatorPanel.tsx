import PartsBoard from "./PartsBoard";
import StylesBoard from "./StylesBoard";

export interface Props {
  stylesArray: string[];
  partsArray: string[];
  selectPart: (part:string) => void;
  selectStyle: (style:string) => void;
}

function CreatorPanel({stylesArray,partsArray,selectPart,selectStyle}: Props) {
  return (
    <div className="CreatorPanel">
      <PartsBoard partsArray={partsArray} selectPart={selectPart}/>
      <StylesBoard stylesArray={stylesArray} selectStyle={selectStyle} />
    </div>
  )
}

export default CreatorPanel;