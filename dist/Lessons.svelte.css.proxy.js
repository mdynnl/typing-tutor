// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "section.svelte-a0ckry{width:15em;display:flex;flex-direction:column;gap:0.5em}div.svelte-a0ckry{padding:1em 1.25em;background:#0001;border-radius:0.5em}div.svelte-a0ckry:hover{background:#0003}div.active.svelte-a0ckry{background:#0009;color:#fff}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}