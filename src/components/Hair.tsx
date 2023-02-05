export interface Props {
  hair: string;
}

function Hair({hair}: Props) {
  return (
    <div className="Hair">
      <img className="hair_image" src={hair} alt="hair" />
    </div>
  )
}

export default Hair