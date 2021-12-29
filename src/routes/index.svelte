<script>

    $: start = 1;
    $: end = 10;

    $: result = generateRandom();

    const generateRandom = () => {
        if (start >= end) {
            result = end;
        } else {
            result = Math.floor(Math.random() * end) + start;
            return result;
        }
    }

</script>

<main class="bg-marine text-center min-h-screen text-xl">
    <h1 class="text-5xl font-semibold text-bee py-6">Rando Norris</h1>
    <div class="flex bg-marine justify-center">
        <div class="text-5xl flex justify-center text-bee font-bold bg-marine-bright w-56 rounded-xl">
            <p class="my-auto pb-2">{result}</p>
        </div>
        <form class="bg-marine-bright ml-5 p-5 rounded-xl text-marine font-semibold">
            <div class="flex">
                <input class="bg-bee font-semibold border-none rounded-full pl-2 mr-2 w-32" type="number" placeholder="from" bind:value={start}>
                <p class="text-white mb-0.5">min.</p>
            </div><br>
            <div class="flex">
                <input class="bg-bee font-semibold border-none rounded-full pl-2 mr-2 w-32" type="number" placeholder="to" bind:value={end}><br>
                <p class="text-white mb-0.5">max.</p>
            </div>
        </form>
    </div>
    <button class="text-marine px-3 py-1.5 font-bold mt-5 bg-bee rounded-full" type="submit" on:click|preventDefault={generateRandom}>Randomize</button>
</main>
