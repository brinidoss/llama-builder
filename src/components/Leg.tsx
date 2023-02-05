export interface Props {
  leg: string; 
}

function Leg({leg}: Props) {
  return (
    <div className="Leg">
      <img className="leg_image" src={leg} alt="leg" />
    </div>
  )
}

export default Leg;