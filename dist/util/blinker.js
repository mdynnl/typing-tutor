import {writable} from "../../_snowpack/pkg/svelte/store.js";
export default function blinker(v = true, t = 500) {
  const {subscribe, set, update} = writable(v);
  let i;
  const interval = () => i = setInterval(() => update((v2) => !v2), t);
  interval();
  return {
    subscribe,
    set: (v2) => {
      clearInterval(i);
      interval();
      set(v2);
    }
  };
}
