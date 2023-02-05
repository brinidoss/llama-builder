import Part from "./Part";

export interface Props {
  partsArray: string[];
  selectPart:(part:string) => void;
}

function PartsList({partsArray, selectPart}: Props) {

  //const partsArray: string[] = ["Background", "Hair", "Ears", "Eyes", "Mouth", "Neck", "Leg", "Accesory"];

  return (
    <div className="PartsList">

      {partsArray.map(function(part, index){
        return <Part key={index} part={part} selectPart={() => selectPart(part)}/>
      })}

   
    </div>
  )
}

export default PartsList;