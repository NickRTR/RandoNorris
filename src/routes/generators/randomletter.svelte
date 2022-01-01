<script>
    import Button from "$lib/Button.svelte";
    import Title from "$lib/Title.svelte";

    $: result = getRandomLetter();
    $: bg = "bg-marine-bright";

    const getRandomLetter = () => {
        bg = "bg-green-400"
        setTimeout(() => {
            bg = "bg-marine-bright"
        }, 250);

        let symbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        let letter = symbols[Math.floor(Math.random() * symbols.length)];

        result = letter;
        return letter;
    }
</script>

<svelte:head>
    <title>Random Letter</title>
</svelte:head>

<main class="text-bee">
    <Title title="Random Letter"/>
    <div class="result {bg} py-10 sm:mx-20 lg:mx-40 rounded-xl text-8xl text-center">
        <p>{result}</p>
    </div>
    <Button action={getRandomLetter}></Button>
</main>
