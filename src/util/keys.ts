export const CODES: string[][] = [
    `Backquote Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 Digit0 Minus Equal Backspace`,
    `Tab KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP BracketLeft BracketRight Backslash`,
    `CapsLock KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL Semicolon Quote Enter`,
    `ShiftLeft KeyZ KeyX KeyC KeyV KeyB KeyN KeyM Comma Period Slash ShiftRight`,
    `ControlLeft MetaLeft AltLeft Space AltRight MetaRight ContextMenu ControlRight`,
].map(l => l.split(' '))
export const CHARKEYS = [
    `Backquote Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 Digit0 Minus Equal`,
    `KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP BracketLeft BracketRight Backslash`,
    `KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL Semicolon Quote`,
    `KeyZ KeyX KeyC KeyV KeyB KeyN KeyM Comma Period Slash`,
    `Space`
].join(' ').split(' ')
export const SIZES: number[][] = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.5],
    [2, 1, 1, 5.5, 1, 1, 1.5, 2]
]

export const SINGLES: string[] = [`Caps Lock`, ` `, `Backspace`, `Tab`, `Enter`, `Shift`, `Control`, `Meta`, `Alt`, `Menu`]

type Layout = {
    default: string[][],
    shift: string[][]
}

const EN: Layout = {
    default: [
        [...'`1234567890-=', `Backspace`],
        [`Tab`, ...`qwertyuiop[]\\`],
        [`Caps Lock`, ...`asdfghjkl;'`, `Enter`],
        [`Shift`, ...`zxcvbnm,./`, `Shift`],
        [`Control`, `Meta`, `Alt`, ` `, `Alt`, `Meta`, `Menu`, `Control`,],
    ],
    shift: [
        [...`~!@#$%^&*()_+`, `Backspace`],
        [`Tab`, ...`QWERTYUIOP{}|`],
        [`Caps Lock`, ...`ASDFGHJKL:"`, `Enter`],
        [`Shift`, ...`ZXCVBNM<>?`, `Shift`],
        [`Control`, `Meta`, `Alt`, ` `, `Alt`, `Meta`, `Menu`, `Control`,],
    ],
}

const MM: Layout = {
    default: [
        [...'ၐ၁၂၃၄၅၆၇၈၉၀-=', `Backspace`],
        [`Tab`, ...`ဆတနမအပကငသစဟဩ၏`],
        [`Caps Lock`, ...`ေျိ်ါ့ြုူး'`, `Enter`],
        [`Shift`, ...`ဖထခလဘညာ,./`, `Shift`],
        [`Control`, `Meta`, `Alt`, ` `, `Alt`, `Meta`, `Menu`, `Control`,],
    ],
    shift: [
        [...`ဎဍၒဋၓၔၕရ*()_+`, `Backspace`],
        [`Tab`, ...`ဈဝဣ၎ဤ၌ဥ၍ဿဏဧဪၑ`],
        [`Caps Lock`, ...`ဗှီ္ွံဲဒဓဂ"`, `Enter`],
        [`Shift`, ...`ဇဌဃဠယဉဦ၊။?`, `Shift`],
        [`Control`, `Meta`, `Alt`, ` `, `Alt`, `Meta`, `Menu`, `Control`,],
    ],
}
export const LAYOUTS = { EN, MM }
const lens = (layout: Layout) => [layout.default, layout.shift].every(l => l.every((m, i) => m.length === CODES[i].length))
Object.values(LAYOUTS).forEach(v => console.assert(lens(v)))