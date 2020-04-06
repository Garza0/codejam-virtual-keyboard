// eslint-disable-next-line import/extensions
import { keyMap, keys } from './keys.js';


window.onkeydown = (e) => e.preventDefault();

let language = 'en';
let valueOrShiftValue = 'value';


const textarea = document.createElement('textarea');
const mainSection = document.createElement('div');
mainSection.classList.add('mainSection');
const keyboardSection = document.createElement('div');
keyboardSection.classList.add('keyboardSection');

document.body.appendChild(mainSection);
mainSection.appendChild(textarea);
mainSection.appendChild(keyboardSection);


function returnValueFromObj(keyId, language = 'en', valueOrShiftValue = 'value') {

  if (Object.prototype.hasOwnProperty.call(keys[keyId], valueOrShiftValue)) {
    return keys[keyId][valueOrShiftValue];
  };

  if (Object.prototype.hasOwnProperty.call(keys[keyId], language)) {
    if (Object.prototype.hasOwnProperty.call(keys[keyId][language], valueOrShiftValue)) {
      return keys[keyId][language][valueOrShiftValue];
    };

    return keys[keyId][language].value;
  }

  return keys[keyId].value;
}


function init(lang, shiftValue) {
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
}

init(language, valueOrShiftValue);

document.onkeydown = function (event) {
  const eventKey = document.querySelector(`[keycode="${event.code.toLowerCase()}"]`);
  eventKey.classList.add('keyboard__key--active');
  addCharacter('g');


};

document.onkeyup = function (event) {
  const eventKey = document.querySelector(`[keycode="${event.code.toLowerCase()}"]`);
  eventKey.classList.remove('keyboard__key--active');
  textarea.focus();
};

document.querySelectorAll('.keyboard__key').forEach((element) => {
  element.onmousedown = function () {
    this.classList.add('keyboard__key--active');
    addCharacter('g');

  };
});

document.querySelectorAll('.keyboard__key').forEach((element) => {
  element.onmouseup = function () {
    this.classList.remove('keyboard__key--active');
    textarea.focus();

  };
});

function addCharacter(char) {
  textarea.value += char
};
function removeCharacter(position) {

};
function moveTextCursor() { };