import PartsList from "./PartsList";

function PartsBoard() {
  return (
    <div className="PartsBoard">
      <div id="partsheader">
        <p>What would you like to style?</p>
      </div>
      <div id="partsContainer">
        <PartsList />
      </div>
    </div>
  )
}

export default PartsBoard;