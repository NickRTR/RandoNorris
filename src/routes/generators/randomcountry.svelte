<script>
    import {countries} from "$lib/countries.js";
    import Button from "$lib/Button.svelte";
    import Title from "$lib/Title.svelte";

    $: result = getRandomLetter();
    $: bg = "bg-marine-bright";

    const getRandomLetter = () => {
        bg = "bg-green-400"
        setTimeout(() => {
            bg = "bg-marine-bright"
        }, 250);

        let letter = countries[Math.floor(Math.random() * countries.length)];

        result = letter;
        return letter;
    }
</script>

<svelte:head>
    <title>Random Country</title>
</svelte:head>

<main class="text-bee">
    <Title title="Random Country"/>
    <div class="result {bg} py-10 sm:mx-20 lg:mx-40 rounded-xl text-2xl text-center">
        <p>{result}</p>
    </div>
    <Button action={getRandomLetter}></Button>
</main>
