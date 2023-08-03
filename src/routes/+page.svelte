<script>
	import { generator } from "$lib/stores";
	import { generators } from "$lib/generators";
</script>

<main>
	{#each generators as g}
		{#if $generator === g.name}
			<svelte:component this={g.component} />
		{/if}
	{/each}
</main>
