<script>
	import autoselect from "svelte-autoselect";

	import RandomizeButton from "../RandomizeButton.svelte";
	import Result from "../Result.svelte";

	let start = 1;
	let end = 10;
	let result = "-";

	let active = false;

	function randomize() {
		active = true;
		setTimeout(() => {
			active = false;
		}, 250);
		result = Math.floor(Math.random() * end) + start;
	}
</script>

<main>
	<Result {active}>
		<h1>{result}</h1>
	</Result>
	<form>
		<input type="number" use:autoselect bind:value={start} placeholder="start" title="start" />
		<input type="number" use:autoselect bind:value={end} placeholder="end" title="end" />
	</form>
	<RandomizeButton on:click={randomize} />
</main>

<style>
	form {
		margin-top: 2rem;
		text-align: center;
	}

	input {
		touch-action: manipulation;
		border-radius: 10px;
		width: 30%;
		max-width: 150px;
		padding: 0.5rem;
		border: none;
	}
</style>
