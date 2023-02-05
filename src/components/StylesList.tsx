import Style from "./Style";

export interface Props {
  stylesArray: string[];
}

function StylesList({stylesArray}: Props) {

  //const stylesArray: string[] = ["Background", "Hair", "Ears", "Eyes", "Mouth", "Neck", "Leg", "Accesory"];
  return (
    <div className="StylesList">

{stylesArray.map(function(style, index){
        return <Style key={index} style={style} />
      })}

    </div>
  )
}

export default StylesList;