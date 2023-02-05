export interface Props {
  mouth: string; 
}

function Mouth({mouth}: Props) {
  return (
    <div className="Mouth">
      <img className="mouth_image" src={mouth} alt="mouth" />
    </div>
  )
}

export default Mouth;