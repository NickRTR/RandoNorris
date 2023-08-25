<script>
	import NavBar from "$lib/components/NavBar.svelte";
	import Header from "../lib/components/Header.svelte";
	import { Toaster } from "svelte-french-toast";
</script>

<body>
	<Toaster />

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
		color: black;
		background-color: white;
		outline: none;
		border-radius: 5px;
	}
</style>
