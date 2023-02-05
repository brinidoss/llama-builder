export interface Props {
  eyes: string;
}

function Eyes({eyes}: Props) {
  return (
    <div className="Eyes">
      <img className="eyes_image" src={eyes} alt="eyes" />
    </div>
  )
}

export default Eyes;