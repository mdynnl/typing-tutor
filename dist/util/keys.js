export const CODES = [
  `Backquote Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 Digit0 Minus Equal Backspace`,
  `Tab KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP BracketLeft BracketRight Backslash`,
  `CapsLock KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL Semicolon Quote Enter`,
  `ShiftLeft KeyZ KeyX KeyC KeyV KeyB KeyN KeyM Comma Period Slash ShiftRight`,
  `ControlLeft MetaLeft AltLeft Space AltRight MetaRight ContextMenu ControlRight`
].map((l) => l.split(" "));
export const CHARKEYS = [
  `Backquote Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 Digit0 Minus Equal`,
  `KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP BracketLeft BracketRight Backslash`,
  `KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL Semicolon Quote`,
  `KeyZ KeyX KeyC KeyV KeyB KeyN KeyM Comma Period Slash`,
  `Space`
].join(" ").split(" ");
export const SIZES = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.5],
  [2, 1, 1, 5.5, 1, 1, 1.5, 2]
];
export const SINGLES = [`Caps Lock`, ` `, `Backspace`, `Tab`, `Enter`, `Shift`, `Control`, `Meta`, `Alt`, `Menu`];
const EN = {
  default: [
    [..."`1234567890-=", `Backspace`],
    [`Tab`, ...`qwertyuiop[]\\`],
    [`Caps Lock`, ...`asdfghjkl;'`, `Enter`],
    [`Shift`, ...`zxcvbnm,./`, `Shift`],
    [`Control`, `Meta`, `Alt`, ` `, `Alt`, `Meta`, `Menu`, `Control`]
  ],
  shift: [
    [...`~!@#$%^&*()_+`, `Backspace`],
    [`Tab`, ...`QWERTYUIOP{}|`],
    [`Caps Lock`, ...`ASDFGHJKL:"`, `Enter`],
    [`Shift`, ...`ZXCVBNM<>?`, `Shift`],
    [`Control`, `Meta`, `Alt`, ` `, `Alt`, `Meta`, `Menu`, `Control`]
  ]
};
const MM = {
  default: [
    [..."\u1050\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040-=", `Backspace`],
    [`Tab`, ...`\u1006\u1010\u1014\u1019\u1021\u1015\u1000\u1004\u101E\u1005\u101F\u1029\u104F`],
    [`Caps Lock`, ...`\u1031\u103B\u102D\u103A\u102B\u1037\u103C\u102F\u1030\u1038'`, `Enter`],
    [`Shift`, ...`\u1016\u1011\u1001\u101C\u1018\u100A\u102C,./`, `Shift`],
    [`Control`, `Meta`, `Alt`, ` `, `Alt`, `Meta`, `Menu`, `Control`]
  ],
  shift: [
    [...`\u100E\u100D\u1052\u100B\u1053\u1054\u1055\u101B*()_+`, `Backspace`],
    [`Tab`, ...`\u1008\u101D\u1023\u104E\u1024\u104C\u1025\u104D\u103F\u100F\u1027\u102A\u1051`],
    [`Caps Lock`, ...`\u1017\u103E\u102E\u1039\u103D\u1036\u1032\u1012\u1013\u1002"`, `Enter`],
    [`Shift`, ...`\u1007\u100C\u1003\u1020\u101A\u1009\u1026\u104A\u104B?`, `Shift`],
    [`Control`, `Meta`, `Alt`, ` `, `Alt`, `Meta`, `Menu`, `Control`]
  ]
};
export const LAYOUTS = {EN, MM};
const lens = (layout) => [layout.default, layout.shift].every((l) => l.every((m, i) => m.length === CODES[i].length));
Object.values(LAYOUTS).forEach((v) => console.assert(lens(v)));
