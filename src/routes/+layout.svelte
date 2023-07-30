<script>
	import NavBar from "$lib/components/NavBar.svelte";
	import Header from "../lib/components/Header.svelte";
</script>

<body>
	<Header />
	<main>
		<slot />
	</main>
	<footer>
		<NavBar />
	</footer>
</body>

<style>
	body {
		background-color: black;
		color: white;

		font-family: "HindSiliguri", sans-serif;
		font-display: swap;
	}

	:global(button) {
		background-color: white;
		outline: none;
		border-radius: 5px;
	}
</style>
