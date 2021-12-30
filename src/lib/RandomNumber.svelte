<script>
    let start = 1;
    let end = 10;

    $: result = generateRandom();

    const generateRandom = () => {
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

<div>
    <h1 class="text-2xl sm:text-4xl mb-5 font-semibold text-bee">Random Number</h1>
    <div class="bg-marine justify-center mx-5 sm:mx-20 md:mx-40 lg:mx-60">
        <div class="text-5xl flex justify-center text-bee font-bold bg-marine-bright py-5 rounded-xl">
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
    <button class="text-marine px-3 py-1.5 font-bold mt-5 bg-bee rounded-full" type="submit" on:click|preventDefault={generateRandom}>Randomize</button>
</div>
