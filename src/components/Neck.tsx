export interface Props {
  neck: string;
}

function Neck({neck}: Props) {
  return (
    <div className="Neck">
      <img className="neck_image" src={neck} alt="neck" />
    </div>
  )
}

export default Neck;