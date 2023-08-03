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
		height: 200px;
		margin: auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
	}

	.active {
		background-color: rgb(0, 255, 0);
	}
</style>
