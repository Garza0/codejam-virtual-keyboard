const keyMap = [
  ['backquote', 'digit1', 'digit2', 'digit3', 'digit4', 'digit5', 'digit6', 'digit7', 'digit8', 'digit9', 'digit0', 'minus', 'equal', 'backspace'],
  ['tab', 'keyq', 'keyw', 'keye', 'keyr', 'keyt', 'keyy', 'keyu', 'keyi', 'keyo', 'keyp', 'bracketleft', 'bracketright', 'backslash', 'delete'],
  ['capslock', 'keya', 'keys', 'keyd', 'keyf', 'keyg', 'keyh', 'keyj', 'keyk', 'keyl', 'semicolon', 'quote', 'enter'],
  ['shiftleft', 'keyz', 'keyx', 'keyc', 'keyv', 'keyb', 'keyn', 'keym', 'comma', 'period', 'slash', 'shiftright', 'arrowup'],
  ['controlleft', 'metaleft', 'altleft', 'space', 'altright', 'contextmenu', 'controlright', 'arrowleft', 'arrowdown', 'arrowright'],
];

const keys = {
  backspace: { value: 'Backspace' },
  tab: { value: 'Tab' },
  enter: { value: 'Enter' },
  capslock: { value: 'CapsLk' },
  delete: { value: 'Del' },
  shiftleft: { value: 'Shift' },
  shiftright: { value: 'Shift' },
  controlleft: { value: 'Ctrl' },
  controlright: { value: 'Ctrl' },
  altleft: { value: 'Alt' },
  altright: { value: 'Alt' },
  space: { value: ' ' },
  arrowleft: { value: '←' },
  arrowup: { value: '↑' },
  arrowright: { value: '→' },
  arrowdown: { value: '↓' },
  digit0: {
    value: '0',
    shiftValue: ')',
  },
  digit1: {
    value: '1',
    shiftValue: '!',
  },
  digit2: {
    value: '2',
    en: { shiftValue: '@' },
    ru: { shiftValue: '"' },
  },
  digit3: {
    value: '3',
    en: { shiftValue: '#' },
    ru: { shiftValue: '№' },
  },
  digit4: {
    value: '4',
    en: { shiftValue: '$' },
    ru: { shiftValue: ';' },
  },
  digit5: {
    value: '5',
    shiftValue: '%',
  },
  digit6: {
    value: '6',
    en: { shiftValue: '^' },
    ru: { shiftValue: ':' },
  },
  digit7: {
    value: '7',
    en: { shiftValue: '^' },
    ru: { shiftValue: '?' },
  },
  digit8: {
    value: '8',
    shiftValue: '*',
  },
  digit9: {
    value: '9',
    shiftValue: '(',
  },
  semicolon: {
    en: {
      value: ';',
      shiftValue: ':',
    },
    ru: {
      value: 'ж',
      shiftValue: 'Ж',
    },

  },
  equal: {
    value: '=',
    shiftValue: '+',
  },
  keya: {
    en: {
      value: 'a',
      shiftValue: 'A',
    },
    ru: {
      value: 'ф',
      shiftValue: 'Ф',
    },
  },
  keyb: {
    en: {
      value: 'b',
      shiftValue: 'B',
    },
    ru: {
      value: 'и',
      shiftValue: 'И',
    },
  },
  keyc: {
    en: {
      value: 'c',
      shiftValue: 'C',
    },
    ru: {
      value: 'с',
      shiftValue: 'С',
    },
  },
  keyd: {
    en: {
      value: 'd',
      shiftValue: 'D',
    },
    ru: {
      value: 'в',
      shiftValue: 'В',
    },
  },
  keye: {
    en: {
      value: 'e',
      shiftValue: 'E',
    },
    ru: {
      value: 'у',
      shiftValue: 'У',
    },
  },
  keyf: {
    en: {
      value: 'f',
      shiftValue: 'F',
    },
    ru: {
      value: 'а',
      shiftValue: 'А',
    },
  },
  keyg: {
    en: {
      value: 'g',
      shiftValue: 'G',
    },
    ru: {
      value: 'п',
      shiftValue: 'П',
    },
  },
  keyh: {
    en: {
      value: 'h',
      shiftValue: 'H',
    },
    ru: {
      value: 'р',
      shiftValue: 'Р',
    },
  },
  keyi: {
    en: {
      value: 'i',
      shiftValue: 'I',
    },
    ru: {
      value: 'ш',
      shiftValue: 'Ш',
    },
  },
  keyj: {
    en: {
      value: 'j',
      shiftValue: 'J',
    },
    ru: {
      value: 'о',
      shiftValue: 'О',
    },
  },
  keyk: {
    en: {
      value: 'k',
      shiftValue: 'K',
    },
    ru: {
      value: 'л',
      shiftValue: 'Л',
    },
  },
  keyl: {
    en: {
      value: 'l',
      shiftValue: 'L',
    },
    ru: {
      value: 'д',
      shiftValue: 'Д',
    },
  },
  keym: {
    en: {
      value: 'm',
      shiftValue: 'M',
    },
    ru: {
      value: 'ь',
      shiftValue: 'Ь',
    },
  },
  keyn: {
    en: {
      value: 'n',
      shiftValue: 'N',
    },
    ru: {
      value: 'т',
      shiftValue: 'Т',
    },
  },
  keyo: {
    en: {
      value: 'o',
      shiftValue: 'O',
    },
    ru: {
      value: 'щ',
      shiftValue: 'Щ',
    },
  },
  keyp: {
    en: {
      value: 'p',
      shiftValue: 'P',
    },
    ru: {
      value: 'з',
      shiftValue: 'З',
    },
  },
  keyq: {
    en: {
      value: 'q',
      shiftValue: 'Q',
    },
    ru: {
      value: 'й',
      shiftValue: 'Й',
    },
  },
  keyr: {
    en: {
      value: 'r',
      shiftValue: 'R',
    },
    ru: {
      value: 'к',
      shiftValue: 'К',
    },
  },
  keys: {
    en: {
      value: 's',
      shiftValue: 'S',
    },
    ru: {
      value: 'ы',
      shiftValue: 'Ы',
    },
  },
  keyt: {
    en: {
      value: 't',
      shiftValue: 'T',
    },
    ru: {
      value: 'е',
      shiftValue: 'Е',
    },
  },
  keyu: {
    en: {
      value: 'u',
      shiftValue: 'U',
    },
    ru: {
      value: 'г',
      shiftValue: 'Г',
    },
  },
  keyv: {
    en: {
      value: 'v',
      shiftValue: 'V',
    },
    ru: {
      value: 'м',
      shiftValue: 'М',
    },
  },
  keyw: {
    en: {
      value: 'w',
      shiftValue: 'W',
    },
    ru: {
      value: 'ц',
      shiftValue: 'Ц',
    },
  },
  keyx: {
    en: {
      value: 'x',
      shiftValue: 'X',
    },
    ru: {
      value: 'ч',
      shiftValue: 'Ч',
    },
  },
  keyy: {
    en: {
      value: 'y',
      shiftValue: 'Y',
    },
    ru: {
      value: 'н',
      shiftValue: 'Н',
    },
  },
  keyz: {
    en: {
      value: 'z',
      shiftValue: 'Z',
    },
    ru: {
      value: 'я',
      shiftValue: 'Я',
    },
  },
  metaleft: { value: 'Win' },
  contextmenu: { value: '≡' },
  minus: {
    value: '-',
    shiftValue: '_',
  },
  comma: {
    en: {
      value: ',',
      shiftValue: '<',
    },
    ru: {
      value: 'б',
      shiftValue: 'Б',
    },
  },
  period: {
    en: {
      value: '.',
      shiftValue: '>',
    },
    ru: {
      value: 'ю',
      shiftValue: 'Ю',
    },
  },
  slash: {
    en: {
      value: '/',
      shiftValue: '?',
    },
    ru: {
      value: '.',
      shiftValue: ',',
    },
  },
  backquote: {
    en: {
      value: '`',
      shiftValue: '~',
    },
    ru: {
      value: 'ё',
      shiftValue: 'Ё',
    },
  },
  bracketleft: {
    en: {
      value: '[',
      shiftValue: '{',
    },
    ru: {
      value: 'х',
      shiftValue: 'Х',
    },
  },
  backslash: {
    en: {
      value: '\\',
      shiftValue: '|',
    },
    ru: {
      value: '\\',
      shiftValue: '/',
    },
  },
  bracketright: {
    en: {
      value: ']',
      shiftValue: '}',
    },
    ru: {
      value: 'ъ',
      shiftValue: 'Ъ',
    },
  },
  quote: {
    en: {
      value: "'",
      shiftValue: '"',
    },
    ru: {
      value: 'э',
      shiftValue: 'Э',
    },
  },
};


export { keyMap, keys };
