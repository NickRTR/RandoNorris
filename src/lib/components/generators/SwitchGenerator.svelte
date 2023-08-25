<script>
	import RandomizeButton from "../RandomizeButton.svelte";
	import Tags from "svelte-tags-input";
	import Result from "../Result.svelte";
	import { afterUpdate } from "svelte";
	import toast from "svelte-french-toast";
	import { presets } from "$lib/stores";

	let fontSize = 64;
	let heading;

	afterUpdate(calculateFontSize);

	function calculateFontSize() {
		const charactersCount = heading.textContent.length;
		const baseFontSize = 64;
		const minFontSize = 20;
		const scaleFactor = 1.3;

		if (charactersCount > 6) {
			fontSize = Math.max(baseFontSize - charactersCount * scaleFactor, minFontSize);
		} else {
			fontSize = 64;
		}
	}

	let options = ["Yes", "No", "Maybe"];
	let result = "-";

	let selectedPreset = 0;

	let active = false;

	function randomize() {
		active = true;
		setTimeout(() => {
			active = false;
		}, 250);
		if (options.length === 0) {
			result = "-";
			toast("Please add one or more options in the input field down below.", {
				icon: "🚨"
			});
		} else {
			result = options[Math.floor(Math.random() * options.length)];
		}
	}

	function saveOptions() {
		$presets[selectedPreset] = options;
		toast.success("Saved current options to Preset " + (selectedPreset + 1) + "!", {});
	}
</script>

<main>
	<Result {active}>
		<p style="font-size: {fontSize}px;" bind:this={heading} class="resultText">
			{result}
		</p>
	</Result>
	<form>
		<div class="presets">
			{#each $presets as preset, id}
				<button
					on:click={() => {
						options = preset;
					}}
				>
					- {id + 1} -
				</button>
			{/each}
		</div>
		<Tags
			bind:tags={options}
			addKeys={[13, 9, 188, 32]}
			onlyUnique={true}
			placeholder={"Add options"}
		/>
		<div class="presetselection">
			<button on:click={saveOptions}>Save to Preset</button>
			<select name="presetnr" id="presetnr" bind:value={selectedPreset}>
				{#each $presets as _, id}
					<option value={id}>{id + 1}</option>
				{/each}
			</select>
		</div>
	</form>
	<RandomizeButton on:click={randomize} />
</main>

<style>
	form {
		margin-top: 2rem;
		text-align: center;
		width: 93%;
		max-width: 400px;
		margin-inline: auto;
		margin-bottom: -1rem;
	}

	.presets {
		display: flex;
		gap: 0.5rem;
		justify-content: space-between;
		margin-top: -1rem;
		margin-bottom: 1rem;
	}

	.presets button {
		width: 100%;
		border: none;
		padding: 0.2rem;
	}

	.presetselection {
		margin-top: 0.5rem;
	}

	select {
		border-radius: 0.25rem;
		border: none;
		padding: 0.15rem;
		color: black;
	}

	.presetselection button {
		border: none;
		padding: 0.2rem;
	}

	p {
		word-break: break-all;
		margin-inline: 0.5rem;
		border-bottom: none;
	}
</style>
