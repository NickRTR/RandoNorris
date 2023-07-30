<script>
	import { generator } from "$lib/stores";
</script>

<header>
	<img src="/favicon.svg" alt="" />
	<h1>{$generator}</h1>
</header>

<style>
	header {
		margin-inline: auto;
		text-align: center;
		margin-bottom: 1rem;
	}

	header img {
		margin: 0;
		margin-bottom: -1.5rem;
	}

	header h1 {
		font-size: 2.5rem;
		margin: 0;
	}

	header h1::first-letter {
		text-transform: capitalize;
	}
</style>
