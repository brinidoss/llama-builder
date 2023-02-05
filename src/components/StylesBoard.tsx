import StylesList from "./StylesList";

export interface Props {
  stylesArray: string[];
}

function StylesBoard({stylesArray}: Props) {

  //const stylesArray: string[] = ["foo", "bar"];

  return (
    <div className="StylesBoard">
      <div id="StylesHeader"></div>
      <div id="StylesContainer">
        <StylesList stylesArray={stylesArray}/>
      </div>
    </div>
  )
}

export default StylesBoard;