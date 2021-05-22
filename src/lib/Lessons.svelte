<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let lessons = ["a", "b"];
    export let active = 0;
    const dispatch = createEventDispatcher();
</script>

<section>
    {#each lessons as lesson, i}
        <div
            on:click={() => {
                active = i;
                dispatch("change", { active });
            }}
            class:active={active === i}
        >
            Lesson {i + 1}
        </div>
    {/each}
</section>

<style>
    section {
        width: 15em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    div {
        padding: 1em 1.25em;
        background: #0001;
        border-radius: 0.5em;
    }
    div:hover {
        background: #0003;
    }
    div.active {
        background: #0009;
        color: #fff;
    }
</style>
