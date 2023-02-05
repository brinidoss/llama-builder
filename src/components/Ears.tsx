export interface Props {
  ears: string;
}

function Ears({ears}: Props) {
  return (
    <div className="Ears">
      <img className="ears_image" src={ears} alt="ears" />
    </div>
  )
}

export default Ears;