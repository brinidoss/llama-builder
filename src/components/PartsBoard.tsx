import PartsList from "./PartsList";

export interface Props {
  partsArray: string[];
  selectPart:(part: string) => void;
}

function PartsBoard({partsArray, selectPart}: Props) {
  return (
    <div className="PartsBoard">
      <div id="partsheader">
        <p>What would you like to style?</p>
      </div>
      <div id="partsContainer">
        <PartsList partsArray={partsArray} selectPart={selectPart}/>
      </div>
    </div>
  )
}

export default PartsBoard;