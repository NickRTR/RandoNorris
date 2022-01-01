<script>
    import Button from "$lib/Button.svelte";
    import Title from "$lib/Title.svelte";

    let start = 1;
    let end = 10;

    $: result = generateRandom();
    $: bg = "bg-marine-bright";

    const generateRandom = () => {
        bg = "bg-green-400"
        setTimeout(() => {
            bg = "bg-marine-bright"
        }, 250);
        if (start >= end) {
            result = end;
        } else {
            let randomNumber = Math.floor(Math.random() * end) + start;
            if (randomNumber <= end) {
                result = randomNumber
                return randomNumber;
            } else {
                generateRandom();
            }
        }
    }

</script>

<svelte:head>
    <title>Random Number</title>
</svelte:head>

<div>
    <Title title="Random Number"/>
    <div>
        <div style="filter: url('#teal-lightgreen');" class="text-5xl flex justify-center text-bee font-bold {bg} py-5 rounded-xl">
            <p class="my-auto">{result}</p>
        </div>
        <form class="bg-marine-bright mt-5 p-5 rounded-xl text-marine font-semibold">
            <div class="flex justify-center">
                <input class="bg-bee font-semibold border-none rounded-full pl-2 mr-2 w-40" type="number" placeholder="from" bind:value={start}>
                <p class="text-white mb-0.5">min.</p>
            </div><br>
            <div class="flex justify-center">
                <input class="bg-bee font-semibold border-none rounded-full pl-2 mr-2 w-40" type="number" placeholder="to" bind:value={end}><br>
                <p class="text-white mb-0.5">max.</p>
            </div>
        </form>
    </div>
    <Button action={generateRandom}></Button>
</div>
