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
			<h1 class="result">Yes</h1>
		{:else if result === false}
			<img src="/thumbs-down-light.svg" alt="No" />
			<h1 class="result">No</h1>
		{:else}
			<h1>-</h1>
		{/if}
	</Result>
	<RandomizeButton on:click={randomize} />
</main>

<style>
	img {
		width: 125px;
		margin-top: 0.5rem;
	}

	.result {
		font-size: 2rem;
		margin: 0;
	}
</style>
