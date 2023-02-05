export interface Props {
  background: string;
}

function Background({background}: Props) {
  return (
    <div className="Background">
      <img className="background_image" src={background} alt="background" />
    </div>
  )
}

export default Background