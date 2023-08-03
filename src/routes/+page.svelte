<script>
	import { generator } from "$lib/stores";

	import NumberGenerator from "$lib/components/generators/NumberGenerator.svelte";
	import LetterGenerator from "$lib/components/generators/LetterGenerator.svelte";
	import ColorGenerator from "$lib/components/generators/ColorGenerator.svelte";
	import DecisionGenerator from "$lib/components/generators/DecisionGenerator.svelte";
	import SwitchGenerator from "$lib/components/generators/SwitchGenerator.svelte";
</script>

<main>
	{#if $generator === "number"}
		<NumberGenerator />
	{:else if $generator === "letter"}
		<LetterGenerator />
	{:else if $generator === "color"}
		<ColorGenerator />
	{:else if $generator === "decision"}
		<DecisionGenerator />
	{:else if $generator === "switch"}
		<SwitchGenerator />
	{/if}
</main>
