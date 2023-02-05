
  export interface Props {
    style: string;
  }

function Style({style}: Props) {

  return (
    <button className="Style">{style}</button>
  )
}

export default Style;