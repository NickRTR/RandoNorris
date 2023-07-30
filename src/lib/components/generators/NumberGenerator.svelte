<script>
	import RandomizeButton from "../RandomizeButton.svelte";
	import Result from "../Result.svelte";

	let start = 1;
	let end = 10;
	let result = "-";

	function randomize() {
		result = Math.floor(Math.random() * end) + start;
	}
</script>

<main>
	<Result>
		<h1>{result}</h1>
	</Result>
	<form>
		<input type="number" bind:value={start} placeholder="start" title="start" />
		<input type="number" bind:value={end} placeholder="end" title="end" />
	</form>
	<RandomizeButton on:click={randomize} />
</main>

<style>
	h1 {
		font-size: 4rem;
		margin-block: auto;
	}

	form {
		margin-top: 2rem;
		text-align: center;
	}

	input {
		touch-action: manipulation;
		border-radius: 10px;
		padding: 0.5rem;
		border: none;
	}
</style>
