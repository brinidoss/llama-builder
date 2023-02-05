import React from 'react';

export interface Props {
  part: string;
  selectPart: () => void;
}

function Part({part, selectPart}: Props) {
  return (
    <button className="Part" id={part} onClick={selectPart} >{part}</button>
  )
}

export default Part;