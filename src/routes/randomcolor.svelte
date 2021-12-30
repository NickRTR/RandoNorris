<script>
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

<div class="mx-5 mb-10 sm:mx-20 md:mx-40 lg:mx-60 xl:80">
    <h1 class="text-2xl sm:text-4xl mb-5 font-semibold text-bee">Random Number</h1>
    <div>
        <div class="text-5xl flex justify-center text-bee font-bold p-40 rounded-xl cursor-pointer" style="background-color: {result}" on:click={copyCode}>
            <p class="my-auto pb-2 px-2 w-52 bg-marine rounded-xl">{result}</p>
        </div>

    </div>
    <button class="text-marine px-3 py-1.5 font-bold mt-5 bg-bee rounded-full" type="submit" on:click|preventDefault={generateRandom}>Randomize</button>
</div>
