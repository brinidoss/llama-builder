export interface Props {
  accessory: string;
}

function Accessory({accessory}: Props) {
  return (
    <div className="Accessory">
      <img className="accessory_image" src={accessory} alt="accessory" />
    </div>
  )
}

export default Accessory;