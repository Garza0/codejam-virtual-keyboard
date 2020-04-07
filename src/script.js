/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/extensions
import { keyMap, keys } from './keys.js';

window.onkeydown = (e) => e.preventDefault();

let language = 'en';
const valueOrShiftValue = 'value';
let keyboardKeys;
let capsLkState = false;
let shiftState = false;

const textarea = document.createElement('textarea');
const mainSection = document.createElement('div');
mainSection.classList.add('mainSection');
const keyboardSection = document.createElement('div');
keyboardSection.classList.add('keyboardSection');
const legend = document.createElement('div');
legend.classList.add('legend');
legend.insertAdjacentHTML('beforeend', '<p>The Virtual keyboard was created in <b>Windows</b><br>Language switch hotkey - <b>Shift + Alt</b> or <b>Win</b></p>');

document.body.appendChild(mainSection);
mainSection.appendChild(textarea);
mainSection.appendChild(keyboardSection);
mainSection.appendChild(legend);

const saveLangState = () => {
  sessionStorage.setItem('keyboard-language', language);
};

const restoreLangState = () => {
  language = sessionStorage.getItem('keyboard-language') ? sessionStorage.getItem('keyboard-language') : 'en';
};

restoreLangState();

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

function keyboardRenderWithoutCharacters() {
  let out = '';
  let line = '';
  for (let i = 0; i < keyMap.length; i += 1) {
    line = '';
    for (let k = 0; k < keyMap[i].length; k += 1) {
      line += `<div class="keyboard__key" keycode="${keyMap[i][k]}" > </div>`;
    }
    out += `<div class="keyboard__line"> ${line} </div>`;
  }
  keyboardSection.innerHTML = out;
  keyboardKeys = document.querySelectorAll('.keyboard__key');
}

function keyboardCharactersRender(lang, shiftValue) {
  document.querySelectorAll('.keyboard__key').forEach((element) => {
    const keyCodeAttribute = element.attributes.keycode.value;
    element.innerText = returnValueFromObj(keyCodeAttribute, lang, shiftValue);
  });
}

function changeLangHandler() {
  if (language === 'en') language = 'ru';
  else language = 'en';
  saveLangState();
  keyboardCharactersRender(language, valueOrShiftValue);
}

keyboardRenderWithoutCharacters();
keyboardCharactersRender(language, valueOrShiftValue);

function addCharacter(char) {
  const startSelection = textarea.selectionStart;
  const endSelection = textarea.selectionEnd;
  const textArr = textarea.value.split('');
  if (textarea.selectionEnd - textarea.selectionStart > 0) {
    textArr.splice(startSelection, endSelection - startSelection, char);
    textarea.value = textArr.join('');
    textarea.selectionEnd = startSelection + char.length;
  } else if (textarea.value.length > endSelection) {
    textArr.splice(endSelection, 0, char);
    textarea.value = textArr.join('');
    textarea.selectionEnd = startSelection + char.length;
    textarea.selectionStart = textarea.selectionEnd;
  } else {
    textarea.value += char;
  }
}

function backspaceHandler() {
  const startSelection = textarea.selectionStart;
  const endSelection = textarea.selectionEnd;
  const textArr = textarea.value.split('');
  if (endSelection - startSelection > 0) {
    textArr.splice(startSelection, endSelection - startSelection);
  } else {
    textArr.splice(endSelection - 1, 1);
  }
  textarea.value = textArr.join('');
  textarea.selectionEnd = startSelection - 1;
}

function deleteHandler() {
  const startSelection = textarea.selectionStart;
  const endSelection = textarea.selectionEnd;
  const textArr = textarea.value.split('');
  if (endSelection - startSelection > 0) {
    textArr.splice(startSelection, endSelection - startSelection);
  } else {
    textArr.splice(endSelection, 1);
  }
  textarea.value = textArr.join('');
  textarea.selectionEnd = startSelection;
}

function moveTextCursor(buttonKeyCode) {
  switch (buttonKeyCode) {
    case 'arrowleft':
      textarea.selectionEnd -= 1;
      textarea.selectionStart = textarea.selectionEnd;
      break;
    case 'arrowright':
      textarea.selectionEnd += 1;
      textarea.selectionStart = textarea.selectionEnd;
      break;
    case 'arrowdown':
      if (textarea.selectionEnd + 119 <= textarea.value.length) {
        const diff = textarea.selectionEnd - textarea.selectionStart;
        textarea.selectionStart += (119 + diff);
      }
      break;
    case 'arrowup':
      if (textarea.selectionEnd - 119 >= 0) {
        textarea.selectionEnd -= 119;
        textarea.selectionStart = textarea.selectionEnd;
      }
      break;
    default:
      break;
  }
}


function capsLkAndShiftHandler() {
  if (capsLkState) {
    keyboardCharactersRender(language, 'value');
    capsLkState = false;
  } else {
    keyboardCharactersRender(language, 'shiftValue');
    capsLkState = true;
  }
}

function onMouseDownOrOnKeyDownSwitchCase(keycodeAttributeValue, buttonInnerText) {
  switch (keycodeAttributeValue) {
    case 'shiftleft':
    case 'shiftright':
      shiftState = true;
      capsLkAndShiftHandler();
      break;
    case 'capslock':
      capsLkAndShiftHandler();
      break;
    case 'space':
      addCharacter(' ');
      break;
    case 'tab':
      addCharacter('  ');
      break;
    case 'enter':
      addCharacter('\n');
      break;
    case 'controlleft':
    case 'controlright':
    case 'contextmenu':
      break;
    case 'altleft':
    case 'altright':
      if (shiftState) {
        changeLangHandler();
      }
      break;
    case 'metaleft':
      changeLangHandler();
      break;
    case 'backspace':
      backspaceHandler();
      break;
    case 'delete':
      deleteHandler();
      break;
    case 'arrowleft':
      moveTextCursor('arrowleft');
      break;
    case 'arrowright':
      moveTextCursor('arrowright');
      break;
    case 'arrowdown':
      moveTextCursor('arrowdown');
      break;
    case 'arrowup':
      moveTextCursor('arrowup');
      break;

    default: addCharacter(buttonInnerText);
  }
}

function addMouseEvents() {
  keyboardKeys.forEach((element) => {
    element.onmousedown = function onMouseUp(e) {
      if (e.toElement.attributes.keycode.value === 'capslock') {
        this.classList.toggle('keyboard__key--active');
      } else {
        this.classList.add('keyboard__key--active');
      }

      onMouseDownOrOnKeyDownSwitchCase(e.toElement.attributes.keycode.value, this.innerText);
    };
  });

  keyboardKeys.forEach((element) => {
    element.onmouseup = function onMouseUp(e) {
      if (e.toElement.attributes.keycode.value !== 'capslock') {
        this.classList.remove('keyboard__key--active');
      }
      switch (e.toElement.attributes.keycode.value) {
        case 'shiftleft':
        case 'shiftright':
          shiftState = false;
          capsLkAndShiftHandler();
          break;
        default:
          break;
      }

      textarea.focus();
    };
  });
}

function addKeyboardEvents() {
  document.onkeydown = function onKeyDownKeyboard(event) {
    const eventKey = document.querySelector(`[keycode="${event.code.toLowerCase()}"]`);

    if (event.code.toLowerCase() === 'capslock') {
      eventKey.classList.toggle('keyboard__key--active');
    } else {
      eventKey.classList.add('keyboard__key--active');
    }
    onMouseDownOrOnKeyDownSwitchCase(event.code.toLowerCase(), eventKey.innerText);
  };

  document.onkeyup = function onKeyUpKeyboard(event) {
    const eventKey = document.querySelector(`[keycode="${event.code.toLowerCase()}"]`);
    if (event.code.toLowerCase() !== 'capslock') {
      eventKey.classList.remove('keyboard__key--active');
    }

    switch (event.code.toLowerCase()) {
      case 'shiftleft':
      case 'shiftright':
        shiftState = false;
        capsLkAndShiftHandler();
        break;
      default:
        break;
    }

    textarea.focus();
  };
}

addKeyboardEvents();
addMouseEvents();
