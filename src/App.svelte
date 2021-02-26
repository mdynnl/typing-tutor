<script>
	import Lessons from "./Lessons.svelte";
	import Keyboard from "./Keboard.svelte";
	import Input from "./Input.svelte";
	import { LAYOUTS } from "./util/keys";

	const lessons = [
		"မမ ဝဝ ထထက အကပထမ ကပါ ကပါ မမရာ ညည လသာသာ ညအခါ ငါစာရ မမ ဝဝ ထထက",
		"သေသောသူသည် သုဿာန်သို့ သက်သက်သာသာ သွားသည်",
		"တာတေ တိုင်တည်တယ်။ တာတေ တီတူးတော့ တော်တော်တွေးတာ။",
	];
	let active = 0;

	let input = "";
	$: text = lessons[active];
	$: error = !(input === "" || text.startsWith(input));
	$: focus = text === input;
	$: hilight = focus ? "Enter" : error ? "Backspace" : text[input.length];
	$: {
		active;
		input = "";
	}
</script>

<section>
	<Lessons bind:active {lessons} />

	<div class="container">
		<Input
			only={focus ? ["Enter"] : []}
			on:only={() => {
				if (++active === lessons.length) active = 0;
				input = "";
			}}
			on:done
			bind:input
			{error}
			{text}
		/>
		{#if hilight}
			<Keyboard {focus} {error} layout={LAYOUTS.MM} {hilight} />
		{/if}
	</div>
</section>

<style>
	section {
		padding: 1em;
		display: flex;
		gap: 1em;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
</style>
