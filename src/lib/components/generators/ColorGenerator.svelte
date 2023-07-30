<script>
	import RandomizeButton from "../RandomizeButton.svelte";
	import Result from "../Result.svelte";

	let result = "#FFFFFF";

	let active = false;

	function randomize() {
		active = true;
		setTimeout(() => {
			active = false;
		}, 250);
		let symbols = "0123456789abcdef";
		let color = "#";

		for (var i = 0; i < 6; i++) {
			color = color + symbols[Math.floor(Math.random() * 16)];
		}

		result = color;
	}
</script>

<main>
	<Result {active}>
		<div class="color" style="background-color: {result};" />
		<p>{result}</p>
	</Result>
	<RandomizeButton on:click={randomize} />
</main>

<style>
	div {
		width: 70%;
		height: 170px;
		border-radius: 20px;
		margin-inline: auto;
	}

	p {
		margin-bottom: -2rem;
	}
</style>
