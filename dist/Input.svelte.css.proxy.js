// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "div.svelte-rev117{font-size:20px;display:flex;gap:0.25em;flex-direction:column}pre.svelte-rev117{margin:0;flex:1;display:flex;padding:0.5em 1em;align-items:center;border-radius:0.25em;background:#0f03;line-height:2em}.error.svelte-rev117{background:#f003}span.svelte-rev117{margin-left:-0.25em}.hidden.svelte-rev117{visibility:hidden}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}