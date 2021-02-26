// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root{--base:4em;--gap:0.25em;--radius:0.25em;--total-width:calc((var(--base) + var(--gap)) * 15)}.keyboard.svelte-ycxwfm.svelte-ycxwfm.svelte-ycxwfm{width:var(--total-width);display:flex;flex-direction:column;align-items:center}.row.svelte-ycxwfm.svelte-ycxwfm.svelte-ycxwfm{display:flex}.key.svelte-ycxwfm.svelte-ycxwfm.svelte-ycxwfm{width:calc((var(--base) + var(--gap)) * var(--size));height:calc((var(--base) + var(--gap)));padding:calc(var(--gap) / 2);box-sizing:border-box}.key-content.svelte-ycxwfm.svelte-ycxwfm.svelte-ycxwfm{width:100%;height:100%;background:#3373;color:#373;border-radius:var(--radius);display:flex;text-shadow:0px 0px 1px #000;flex-direction:column;align-items:center;justify-content:center;gap:0.5em}.error.svelte-ycxwfm .key-content.svelte-ycxwfm.svelte-ycxwfm{background:#f009}.focus.svelte-ycxwfm .key-content.svelte-ycxwfm.svelte-ycxwfm{background:#0f09}.error.svelte-ycxwfm .key-content.svelte-ycxwfm:not(.hilight)>div.svelte-ycxwfm,.focus.svelte-ycxwfm .key-content.svelte-ycxwfm:not(.hilight)>div.svelte-ycxwfm{visibility:hidden}.key-content.hilight.svelte-ycxwfm.svelte-ycxwfm.svelte-ycxwfm{background:yellow}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}