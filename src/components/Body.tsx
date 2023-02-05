import { useState } from 'react';
import CreatorPanel from './CreatorPanel';
import DisplayPanel from './DisplayPanel';

// images
// backgrounds
import lightblue1 from '../images/backgrounds/blue50.png';
import lightblue2 from '../images/backgrounds/blue60.png';
import lightblue3 from '../images/backgrounds/blue70.png';
import darkblue1 from '../images/backgrounds/darkblue30.png';
import darkblue2 from '../images/backgrounds/darkblue50.png';
import darkblue3 from '../images/backgrounds/darkblue70.png';
import green1 from '../images/backgrounds/green50.png';
import green2 from '../images/backgrounds/green60.png';
import green3 from '../images/backgrounds/green70.png';
import gray1 from '../images/backgrounds/grey40.png';
import gray2 from '../images/backgrounds/grey70.png';
import gray3 from '../images/backgrounds/grey80.png';
import red1 from '../images/backgrounds/red50.png';
import red2 from '../images/backgrounds/red60.png';
import red3 from '../images/backgrounds/red70.png';
import yellow1 from '../images/backgrounds/yellow50.png';
import yellow2 from '../images/backgrounds/yellow60.png';
import yellow3 from '../images/backgrounds/yellow70.png';
// accessories
import glasses from '../images/accessories/glasses.png';
import earrings from '../images/accessories/earrings.png';
import flower from '../images/accessories/flower.png';
import headphone from '../images/accessories/headphone.png';
// ears
import defaultears from '../images/ears/default.png';
import forwardears from '../images/ears/tilt-forward.png';
import backwardears from '../images/ears/tilt-backward.png';
// eyes
import defaulteyes from '../images/eyes/default.png';
import angry from '../images/eyes/angry.png';
import naughty from '../images/eyes/naughty.png';
import panda from '../images/eyes/panda.png';
import smart from '../images/eyes/smart.png';
import star from '../images/eyes/star.png';
// hair
import defaulthair from '../images/hair/default.png';
import bangs from '../images/hair/bang.png';
import curls from '../images/hair/curls.png';
import elegant from '../images/hair/elegant.png';
//import fancy from '../images/hair/fancy.png';
import quiff from '../images/hair/quiff.png';
import short from '../images/hair/short.png';
// leg
import defaultleg from '../images/leg/default.png';
import boba from '../images/leg/bubble-tea.png';
import cookie from '../images/leg/cookie.png';
import game from '../images/leg/game-console.png';
import forwardleg from '../images/leg/tilt-forward.png';
import backwardleg from '../images/leg/tilt-backward.png';
// mouth
import defaultmouth from '../images/mouth/default.png';
import astonished from '../images/mouth/astonished.png';
import eating from '../images/mouth/eating.png';
import laugh from '../images/mouth/laugh.png';
import tongue from '../images/mouth/tongue.png';
// neck
import defaultneck from '../images/neck/default.png';
import forwardneck from '../images/neck/bend-forward.png';
import backwardneck from '../images/neck/bend-backward.png';
import thick from '../images/neck/thick.png';



function Body() {

  // arrays
  const partsArray: string[] = ["Background", "Hair", "Ears", "Eyes", "Mouth", "Neck", "Leg", "Accessory"];
  const accessoriesArray: string[] = ["Earrings", "Flower", "Glasses", "Headphones"];
  //const backgroundsArray: string[] = ["Blue 1", "Blue 2", "Blue 3", "Dark Blue 1", "Dark Blue 2", "Dark Blue 3", "Green 1", "Green 2", "Green 3", "Gray 1", "Gray 2", "Gray 3", "Red 1", "Red 2", "Red 3", "Yellow 1", "Yellow 2", "Yellow 3"];
  const backgroundsArray: string[] = ["Blue 1", "Blue 2", "Blue 3", "Green 1", "Green 2", "Green 3", "Red 1", "Red 2", "Red 3"];
  const earsArray: string[] = ["Default Ears", "Forward Ears", "Backward Ears"];
  const eyesArray: string[] = ["Angry", "Default Eyes", "Naughty", "Panda", "Smart", "Star"];
  const hairArray: string[] = ["Bang", "Curls", "Default Hair", "Elegant", "Quiff", "Short"];
  //const legArray: string[] = ["Bubble Tea", "Cookie", "Default Leg", "Game Console", "Tilt Forward", "Tilt Backwards"];
  const legArray: string[] = ["Bubble Tea", "Cookie", "Default Leg", "Game Console"];
  const mouthArray: string[] = ["Astonished", "Default Mouth", "Eating", "Laugh", "Tongue"];
  const neckArray: string[] = ["Bend Backward", "Bend Forward", "Default Neck", "Thick"];

  // states
  const [stylesArray, setStylesArray] = useState<string[]>([]);
  const [accessory, setAccessory] = useState<string>(glasses);
  const [background, setBackground] = useState<string>(lightblue1);
  const [ears, setEars] = useState<string>(defaultears);
  const [eyes, setEyes] = useState<string>(defaulteyes);
  const [hair, setHair] = useState<string>(defaulthair);
  const [leg, setLeg] = useState<string>(defaultleg);
  const [mouth, setMouth] = useState<string>(defaultmouth);
  const [neck, setNeck] = useState<string>(defaultneck);

  

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

  function selectStyle(style: string): void {
    switch (style) {
      case ("Earrings"):
        setAccessory(earrings);
        break;
      case ("Flower"):
        setAccessory(flower);
        break;
      case ("Glasses"):
        setAccessory(glasses);
        break;
      case ("Headphones"):
        setAccessory(headphone);
        break;
      case ("Blue 1"):
        setBackground(lightblue1);
        break;
      case ("Blue 2"):
        setBackground(lightblue2);
        break;
      case ("Blue 3"):
        setBackground(lightblue3);
        break;
      case ("Green 1"):
        setBackground(green1);
        break;
      case ("Green 2"):
        setBackground(green2);
        break;
      case ("Green 3"):
        setBackground(green3);
        break;
      case ("Red 1"):
        setBackground(red1);
        break;
      case ("Red 2"):
        setBackground(red2);
        break;
      case ("Red 3"):
        setBackground(red3);
        break;
      case ("Default Ears"):
        setEars(defaultears);
        break;
      case ("Forward Ears"):
        setEars(forwardears);
        break;
      case ("Backward Ears"):
        setEars(backwardears);
        break;
      case ("Angry"):
        setEyes(angry);
        break;
      case ("Default Eyes"):
        setEyes(defaulteyes);
        break;
      case ("Naughty"):
        setEyes(naughty);
        break;
      case ("Panda"):
        setEyes(panda);
        break;
      case ("Star"):
        setEyes(star);
        break;
      case ("Smart"):
        setEyes(smart);
        break;
      case ("Bang"):
        setHair(bangs);
        break;
      case ("Curls"):
        setHair(curls);
        break;
      case ("Default Hair"):
        setHair(defaulthair);
        break;
      case ("Elegant"):
        setHair(elegant);
        break;
      case ("Quiff"):
        setHair(quiff);
        break;
      case ("Short"):
        setHair(short);
        break;
      case ("Bubble Tea"):
        setLeg(boba);
        break;
      case ("Cookie"):
        setLeg(cookie);
        break;
      case ("Default Leg"):
        setLeg(defaultleg);
        break;
      case ("Game Console"):
        setLeg(game);
        break;
      case ("Tilt Forwards"):
        setLeg(forwardleg);
        break;
      case ("Astonished"):
        setMouth(astonished);
        break;
      case ("Default Mouth"):
        setMouth(defaultmouth);
        break;
      case ("Eating"):
        setMouth(eating);
        break;
      case ("Laugh"):
        setMouth(laugh);
        break;
      case ("Tongue"):
        setMouth(tongue);
        break;
      case ("Bend Forward"):
        setNeck(forwardneck);
        break;
      case ("Bend Backward"):
        setNeck(backwardneck);
        break;
      case ("Default Neck"):
        setNeck(defaultneck);
        break;
      case ("Thick"):
        setNeck(thick);
        break;
    }
  }

  return (
    <div className="Body">
        <CreatorPanel 
          stylesArray={stylesArray} 
          partsArray={partsArray}
          selectPart={selectPart}
          selectStyle={selectStyle}
        />
        <DisplayPanel 
          accessory={accessory}
          background={background}
          hair={hair}
          ears={ears}
          eyes={eyes}
          mouth={mouth}
          neck={neck}
          leg={leg}
        />
    </div>
  )
}

export default Body