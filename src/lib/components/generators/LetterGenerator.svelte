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

	let active = false;

	function randomize() {
		active = true;
		setTimeout(() => {
			active = false;
		}, 250);
		result = letters[Math.floor(Math.random() * letters.length)];
	}
</script>

<main>
	<Result {active}>
		<h1 class="resultText">{result}</h1>
	</Result>
	<RandomizeButton on:click={randomize} />
</main>
