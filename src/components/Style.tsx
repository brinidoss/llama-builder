
  export interface Props {
    style: string;
    selectStyle: () => void;
  }

function Style({style, selectStyle}: Props) {
  return (
    <button onClick={selectStyle} className="Style">{style}</button>
  )
}

export default Style;