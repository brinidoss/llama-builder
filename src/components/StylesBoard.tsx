import StylesList from "./StylesList";

export interface Props {
  stylesArray: string[];
  selectStyle:(style: string) => void;
}

function StylesBoard({stylesArray, selectStyle}: Props) {

  return (
    <div className="StylesBoard">
      <div className="header" id="stylesheader">
        <p>Style</p>
      </div>
      <div id="StylesContainer">
        <StylesList stylesArray={stylesArray} selectStyle={selectStyle}/>
      </div>
    </div>
  )
}

export default StylesBoard;