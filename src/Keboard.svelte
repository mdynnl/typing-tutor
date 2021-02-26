<script>
	import { LAYOUTS, CODES, SIZES, SINGLES } from "./util/keys";

	export let layout = LAYOUTS.MM;
	export let hilight = "";
	export let error = false;
	export let focus = false;
	$: shift =
		!SINGLES.includes(hilight) && layout.shift.flat().includes(hilight);
</script>

<div class="keyboard" class:error class:focus>
	{#each CODES as keys, ri (ri)}
		<div class="row">
			{#each keys as key, ki (ki)}
				<div class="key" style="--size: {SIZES[ri][ki]}">
					<div
						class="key-content"
						class:hilight={(shift &&
							layout.default[ri][ki] === "Shift") ||
							[
								layout.default[ri][ki],
								layout.shift[ri][ki],
							].includes(hilight)}
					>
						{#if shift}
							<div>{layout.shift[ri][ki]}</div>
						{:else}
							<div>{layout.default[ri][ki]}</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	:root {
		--base: 4em;
		--gap: 0.25em;
		--radius: 0.25em;
		--total-width: calc((var(--base) + var(--gap)) * 15);
	}
	.keyboard {
		width: var(--total-width);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.row {
		display: flex;
	}
	.key {
		width: calc((var(--base) + var(--gap)) * var(--size));
		height: calc((var(--base) + var(--gap)));
		padding: calc(var(--gap) / 2);
		box-sizing: border-box;
	}
	.key-content {
		width: 100%;
		height: 100%;
		background: #3373;
		color: #373;
		border-radius: var(--radius);
		display: flex;
		text-shadow: 0px 0px 1px #000;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
	}

	.error .key-content {
		background: #f009;
	}
	.focus .key-content {
		background: #0f09;
	}
	.error .key-content:not(.hilight) > div,
	.focus .key-content:not(.hilight) > div {
		visibility: hidden;
	}
	.key-content.hilight {
		background: yellow;
	}
</style>
