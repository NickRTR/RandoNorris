<script>
	import RandomizeButton from "../RandomizeButton.svelte";
	import Tags from "svelte-tags-input";
	import Result from "../Result.svelte";
	import { afterUpdate } from "svelte";

	let fontSize = 64;
	let heading;

	afterUpdate(calculateFontSize);

	function calculateFontSize() {
		const charactersCount = heading.textContent.length;
		const baseFontSize = 64;
		const minFontSize = 20;
		const scaleFactor = 1.3;

		if (charactersCount > 15) {
			fontSize = Math.max(baseFontSize - charactersCount * scaleFactor, minFontSize);
		} else {
			fontSize = 64;
		}
	}

	let options = ["Yes", "No", "Maybe"];
	let result = "-";

	let active = false;

	function randomize() {
		active = true;
		setTimeout(() => {
			active = false;
		}, 250);
		result = options[Math.floor(Math.random() * options.length)];
	}
</script>

<main>
	<Result {active}>
		<p style="font-size: {fontSize}px;" bind:this={heading} class="resultText">
			{result}
		</p>
	</Result>
	<form>
		<Tags
			bind:tags={options}
			addKeys={[13, 9, 188, 32]}
			onlyUnique={true}
			placeholder={"Add options"}
		/>
	</form>
	<RandomizeButton on:click={randomize} />
</main>

<style>
	form {
		margin-top: 2rem;
		text-align: center;
	}

	form {
		width: 93%;
		max-width: 400px;
		margin-inline: auto;
	}

	p {
		word-break: break-all;
		margin-inline: 0.5rem;
		border-bottom: none;
	}
</style>
