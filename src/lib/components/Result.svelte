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
	}

	.active {
		background-color: rgb(0, 255, 0);
	}
</style>
