import PartsBoard from "./PartsBoard";
import StylesBoard from "./StylesBoard";

export interface Props {
  stylesArray: string[];
  partsArray: string[];
  selectPart: (part:string) => void;
}

function CreatorPanel({stylesArray,partsArray,selectPart}: Props) {
  //const stylesArray: string[] = ["foo", "bar"];
  return (
    <div className="CreatorPanel">
      <PartsBoard partsArray={partsArray} selectPart={selectPart}/>
      <StylesBoard stylesArray={stylesArray}/>
    </div>
  )
}

export default CreatorPanel;