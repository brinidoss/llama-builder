import Style from "./Style";

export interface Props {
  stylesArray: string[];
  selectStyle:(style:string) => void;
}

function StylesList({stylesArray, selectStyle}: Props) {

  //const stylesArray: string[] = ["Background", "Hair", "Ears", "Eyes", "Mouth", "Neck", "Leg", "Accesory"];
  return (
    <div className="StylesList">

{stylesArray.map(function(style, index){
        return <Style key={index} style={style} selectStyle={() => selectStyle(style)} />
      })}

    </div>
  )
}

export default StylesList;