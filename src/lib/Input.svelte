<script lang="ts">
    import { CHARKEYS } from "./util/keys";
    import preventDefault from "./util/preventDefault";
    import blinker from "./util/blinker";
    import { createEventDispatcher, onMount } from "svelte";

    export let input = "";
    export let text = "A quick brown fox jumps over the lazy dog";

    export let error = false;
    export let only: string[] = [];

    const blink = blinker();
    $: hidden = only.length || !$blink;

    const dispatch = createEventDispatcher();
    onMount(preventDefault);
</script>

<svelte:window
    on:keydown={(e) => {
        $blink = true;
        if (only.length) {
            if (only.includes(e.code)) {
                dispatch("only", { code: e.code });
            }
            return;
        }

        if (CHARKEYS.includes(e.code)) {
            if (error) {
                return;
            }
            input += e.key;
        } else if (e.code === "Backspace") {
            input = input.slice(0, input.length - 1);
        }
    }}
/>
<section>
    <div>
        <pre>{text}</pre>
        <pre class:error>{input}<span class:hidden>|</span></pre>
    </div>
</section>

<style>
    div {
        font-size: 20px;
        display: flex;
        gap: 0.25em;
        flex-direction: column;
    }
    pre {
        margin: 0;
        flex: 1;
        display: flex;
        padding: 0.5em 1em;
        align-items: center;
        border-radius: 0.25em;
        background: #0f03;
        line-height: 2em;
    }
    .error {
        background: #f003;
    }
    span {
        margin-left: -0.25em;
    }
    .hidden {
        visibility: hidden;
    }
</style>
