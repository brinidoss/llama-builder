import { useState } from 'react';
import CreatorPanel from './CreatorPanel';
import DisplayPanel from './DisplayPanel';


function Body() {

  const partsArray: string[] = ["Background", "Hair", "Ears", "Eyes", "Mouth", "Neck", "Leg", "Accesory"];
  //const stylesArray: string[] = ["foo", "bar"];
  const accessoriesArray: string[] = ["Earrings", "Flower", "Glasses", "Headphones"];
  const backgroundsArray: string[] = ["Blue 1", "Blue 2", "Blue 3", "Dark Blue 1", "Dark Blue 2", "Dark Blue 3", "Green 1", "Green 2", "Green 3", "Gray 1", "Gray 2", "Gray 3", "Red 1", "Red 2", "Red 3", "Yellow 1", "Yellow 2", "Yellow 3"];
  const earsArray: string[] = ["Default", "Tilt Forward", "Tilt Backward"];
  const eyesArray: string[] = ["Angry", "Default", "Naughty", "Panda", "Smart", "Star"];
  const hairArray: string[] = ["Bang", "Curls", "Default", "Elegant", "Fancy", "Quiff", "Short"];
  const legArray: string[] = ["Bubble Tea", "Cookie", "Default", "Game Console", "Tilt Forward", "Tilt Backwards"];
  const mouthArray: string[] = ["Astonished", "Default", "Eating", "Laugh", "Tongue"];
  const neckArray: string[] = ["Bend Backward", "Bend Forward", "Default", "Thick"];

  const [stylesArray, setStylesArray] = useState<string[]>([]);
  

  function selectPart(part: string): void {
    switch (part) {
      case ("Accessory"):
        setStylesArray(accessoriesArray);
        break;
      case ("Background"):
        setStylesArray(backgroundsArray);
        break;
      case ("Ears"):
        setStylesArray(earsArray);
        break;
      case ("Eyes"):
        setStylesArray(eyesArray);
        break;
      case ("Hair"):
        setStylesArray(hairArray);
        break;
      case ("Leg"):
        setStylesArray(legArray);
        break;
      case ("Mouth"):
        setStylesArray(mouthArray);
        break;
      case ("Neck"):
        setStylesArray(neckArray);
        break;
    }
  }

  return (
    <div className="Body">
        <CreatorPanel 
          stylesArray={stylesArray} 
          partsArray={partsArray}
          selectPart={selectPart}
        />
        <DisplayPanel />
    </div>
  )
}

export default Body