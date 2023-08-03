<script>
	import RandomizeButton from "../RandomizeButton.svelte";
	import Tags from "svelte-tags-input";
	import Result from "../Result.svelte";

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
		<h1 class="resultText">{result}</h1>
	</Result>
	<form>
		<Tags
			bind:tags={options}
			addKeys={[13, 9, 188]}
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
</style>
