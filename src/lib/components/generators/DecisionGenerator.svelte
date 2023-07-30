<script>
	import RandomizeButton from "../RandomizeButton.svelte";
	import Result from "../Result.svelte";

	let result = "-";

	let active = false;

	function randomize() {
		active = true;
		setTimeout(() => {
			active = false;
		}, 250);
		result = Math.random() < 0.5;
	}
</script>

<main>
	<Result {active}>
		{#if result === true}
			<img src="/thumbs-up-light.svg" alt="Yes" />
		{:else if result === false}
			<img src="/thumbs-down-light.svg" alt="No" />
		{:else}
			<h1>-</h1>
		{/if}
	</Result>
	<RandomizeButton on:click={randomize} />
</main>

<style>
	h1 {
		font-size: 4rem;
		margin: 0;
	}
</style>
