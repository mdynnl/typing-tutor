import { writable, get } from 'svelte/store'
export default function blinker(v = true, t = 500) {
    const { subscribe, set, update } = writable(v);

    let i: NodeJS.Timeout;
    const interval = () => i = setInterval(() => update(v => !v), t)
    interval()

    return {
        subscribe, set: (v: boolean) => {
            clearInterval(i)
            interval()
            set(v)
        }
    };
}