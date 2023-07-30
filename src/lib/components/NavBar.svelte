<script>
	import { generator } from "$lib/stores";
</script>

<nav>
	<button
		class:active={$generator === "number"}
		on:click={() => {
			$generator = "number";
		}}
		title="Number">N</button
	>
	<button
		class:active={$generator === "letter"}
		on:click={() => {
			$generator = "letter";
		}}
		title="Letter">L</button
	>
	<button
		class:active={$generator === "color"}
		on:click={() => {
			$generator = "color";
		}}
		title="Color">C</button
	>
	<button
		class:active={$generator === "decision"}
		on:click={() => {
			$generator = "decision";
		}}
		title="Decision">D</button
	>
</nav>

<style>
	nav {
		position: fixed;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		justify-content: space-between;
		width: 55%;
		max-width: 250px;

		border: 3px solid white;
		border-radius: 10px;
		padding: 0.5rem;
	}

	button {
		width: 3rem;
		height: 3rem;
		border: none;
		font-size: 2rem;
		color: black;
		text-align: center;
	}

	.active {
		background-color: red;
		color: white;
	}
</style>
