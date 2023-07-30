<script>
	import { generator } from "$lib/stores";
</script>

<header>
	<img src="/favicon.svg" alt="" />
	<h1>{$generator}</h1>
</header>

<style>
	header {
		padding: 1rem;
		margin-inline: auto;
		text-align: center;
	}

	header h1 {
		font-size: 2.5rem;
		margin: 0;
	}

	header h1::first-letter {
		text-transform: capitalize;
	}
</style>
