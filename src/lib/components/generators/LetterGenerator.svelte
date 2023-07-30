<script>
	import RandomizeButton from "../RandomizeButton.svelte";
	import Result from "../Result.svelte";

	const letters = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z"
	];
	let result = "-";

	function randomize() {
		result = letters[Math.floor(Math.random() * letters.length)];
	}
</script>

<main>
	<Result>
		<h1>{result}</h1>
	</Result>
	<RandomizeButton on:click={randomize} />
</main>

<style>
	h1 {
		font-size: 4rem;
		margin: 0;
	}
</style>
