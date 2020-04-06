import { keys } from './keys.js';

export default function buttonContent(buttonId, lang) {
  if (keys.buttonId.value) {
    return keys.buttonId.value;
  }
  return keys.buttonId[lang].value;
}
