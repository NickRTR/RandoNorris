<script>
	export let active;
</script>

<div class:active>
	<slot />
</div>

<style>
	div {
		border: 5px solid red;
		border-radius: 10px;
		width: 90%;
		max-width: 400px;
		padding-block: 4rem;
		margin: auto;
		text-align: center;
	}

	.active {
		background-color: limegreen;
	}
</style>
