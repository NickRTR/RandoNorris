<script>
    import Button from "$lib/Button.svelte";
    import Title from "$lib/Title.svelte";

    $: result = generateRandom();

    const generateRandom = () => {
        let symbols = "0123456789abcdef";
        let color = "#";

        for (var i = 0; i < 6; i++) {
            color = color + symbols[Math.floor(Math.random() * 16)];
        }
        result = color;
        return color;
    }

    const copyCode = () => {
        navigator.clipboard.writeText(result);
    }
</script>

<svelte:head>
    <title>Random Color</title>
</svelte:head>

<div>
    <Title title="Random Color"/>
    <div class="rounded-xl pt-20 border-4 border-bee" style="background-color: {result}">
        <div class="text-5xl flex justify-center text-bee font-bold px-40 cursor-pointer" on:click={copyCode}>
            <p class="my-auto pb-2 px-2 w-60 bg-marine rounded-xl">{result}</p>
        </div>  
        <p class="mt-11 text-marine pb-1 font-semibold">Click to Copy</p>
    </div>
    <Button action={generateRandom}></Button>
</div>
