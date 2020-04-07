// eslint-disable-next-line import/extensions
import { keyMap, keys } from './keys.js';


window.onkeydown = (e) => e.preventDefault();

let language = 'en';
let valueOrShiftValue = 'value';
let keyboardKeys;
let capsLkState = false;
let shiftState = false;


const textarea = document.createElement('textarea');
const mainSection = document.createElement('div');
mainSection.classList.add('mainSection');
const keyboardSection = document.createElement('div');
keyboardSection.classList.add('keyboardSection');

document.body.appendChild(mainSection);
mainSection.appendChild(textarea);
mainSection.appendChild(keyboardSection);

// function capsClassListHandler(keyMapItem) {
//   console.log('sldkjf');

//   if (keyMapItem === 'shiftleft' || keyMapItem === 'shiftright') {
//     if (valueOrShiftValue === 'shiftValue') {
//       return ' keyboard__key--active';
//     }
//     return '';
//   }
//   return '';
// }

function changeLangHandler() {
  if (language === 'en') language = 'ru';
  else language = 'en';
  init(language, valueOrShiftValue)
}


function returnValueFromObj(keyId, lang, valueCase) {
  if (Object.prototype.hasOwnProperty.call(keys[keyId], valueCase)) {
    return keys[keyId][valueCase];
  }

  if (Object.prototype.hasOwnProperty.call(keys[keyId], lang)) {
    if (Object.prototype.hasOwnProperty.call(keys[keyId][lang], valueCase)) {
      return keys[keyId][lang][valueCase];
    }

    return keys[keyId][lang].value;
  }

  return keys[keyId].value;
}


function init(lang = 'en', shiftValue = 'value') {
  let out = '';
  let line = '';
  for (let i = 0; i < keyMap.length; i += 1) {
    line = '';
    for (let k = 0; k < keyMap[i].length; k += 1) {
      line += `<div class="keyboard__key" keycode="${keyMap[i][k]}" > ${returnValueFromObj(keyMap[i][k], lang, shiftValue)} </div>`;
    }
    out += `<div class="keyboard__line"> ${line} </div>`;
  }
  keyboardSection.innerHTML = out;
  keyboardKeys = document.querySelectorAll('.keyboard__key');
  console.log('init');

}

init(language, valueOrShiftValue);

function addCharacter(char) {
  textarea.value += char;
}
function removeCharacter(position) {

}
function moveTextCursor() { }




function capsLkAndShiftHandler() {
  if (capsLkState) {
    init(language, 'value');
    capsLkState = false;
  } else {
    init(language, 'shiftValue');
    capsLkState = true;
  }
}

function addMouseEvents() {


  keyboardKeys.forEach((element) => {
    element.onmousedown = function (e) {


      if (e.toElement.attributes.keycode.value === 'capslock') {

        // this.classList.toggle('keyboard__key--active');


      } else {

        this.classList.add('keyboard__key--active');
      }




      switch (e.toElement.attributes.keycode.value) {
        case 'shiftleft':
        case 'shiftright':
          capsLkAndShiftHandler();

          addMouseEvents();
          break;
        case 'capslock':
          capsLkAndShiftHandler();
          addMouseEvents();
          break;
        case 'metaleft':
          // console.log('meta', language);

          changeLangHandler();
          addMouseEvents();

          break;
        default: addCharacter(this.innerText);
      }

    };
  });

  keyboardKeys.forEach((element) => {
    element.onmouseup = function (e) {
      if (e.toElement.attributes.keycode.value === 'capslock') {
      } else {

        this.classList.remove('keyboard__key--active');
      }

      switch (e.toElement.attributes.keycode.value) {
        case 'shiftleft':
        case 'shiftright':
          capsLkAndShiftHandler();

          addMouseEvents();
          break;

        default:
          break;
      }

      textarea.focus();
    };
  });
}














function addKeyboardEvents() {
  document.onkeydown = function (event) {
    const eventKey = document.querySelector(`[keycode="${event.code.toLowerCase()}"]`);
    eventKey.classList.add('keyboard__key--active');
    // console.log(eventKey.classList);


    switch (event.code) {
      case 'ShiftLeft':
      case 'ShiftRight':
        shiftState = true;

        // init(language, 'shiftValue');
        capsLkAndShiftHandler();
        // addMouseEvents();
        break;
      case 'Space':
        addCharacter(' ');
        break;
      case 'Tab':
        addCharacter('  ');
        break;
      case 'Enter':
        addCharacter('\n');
        break;
      case 'AltLeft':
      case 'AltRight':
        if (shiftState) {
          console.log('sldkjf');

          changeLangHandler();
          // init(language, valueOrShiftValue);
        }
        break;

      default: addCharacter(eventKey.innerText);
    }
  };

  document.onkeyup = function (event) {
    const eventKey = document.querySelector(`[keycode="${event.code.toLowerCase()}"]`);
    eventKey.classList.remove('keyboard__key--active');


    switch (event.code) {
      case 'ShiftLeft':
      case 'ShiftRight':
        shiftState = false;
        // init(language, 'value');
        capsLkAndShiftHandler();
        addMouseEvents();
        break;
      case 'Space':

        break;
      case 'Tab':

        break;
      case 'Enter':

        break;

      default:
        break;
    }

    textarea.focus();
  };
}




addKeyboardEvents();
addMouseEvents();


