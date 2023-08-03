<script>
	import { generator } from "$lib/stores";
	import { generators } from "$lib/generators";
</script>

<nav>
	{#each generators as g}
		<button
			class:active={$generator === g.name}
			on:click={() => {
				$generator = g.name;
			}}
			title={g.title}>{g.short}</button
		>
	{/each}
</nav>

<style>
	nav {
		position: fixed;
		bottom: 25px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		justify-content: space-between;
		width: 275px;

		border: 3px solid white;
		border-radius: 10px;
		padding: 0.5rem;
	}

	button {
		width: 3rem;
		height: 3rem;
		border: none;
		font-size: 1.5rem;
		padding: 0;
		color: black;
		text-align: center;
	}

	.active {
		background-color: red;
		color: white;
	}
</style>
