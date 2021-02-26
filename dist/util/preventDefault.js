let enabler;
let disabler;
export let enableAfter = 1500;
export let disableAfter = 1e3;
const prevent = (e) => e.preventDefault();
function enable() {
  const t = setTimeout(() => {
    clearTimeout(disableAfter);
    window.addEventListener("keydown", prevent);
  }, enableAfter);
  return () => clearTimeout(t);
}
function disable() {
  const t = setTimeout(() => {
    enabler && enabler();
    enabler = void 0;
    window.removeEventListener("keydown", prevent);
  }, disableAfter);
  return () => clearTimeout(t);
}
function start(e) {
  if (!enabler)
    enabler = enable();
  disabler && disabler();
  disabler = disable();
}
export default () => {
  window.addEventListener("keydown", start);
  return () => {
    enabler && enabler();
    disabler && disabler();
    window.removeEventListener("keydown", start);
  };
};
