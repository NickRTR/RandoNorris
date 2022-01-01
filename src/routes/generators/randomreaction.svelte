<script>
    import Button from "$lib/Button.svelte";
    import Title from "$lib/Title.svelte";

    $: bg = "bg-marine-bright";
    $: duration = 0;

    $: console.log(duration);

    var startTime = "";
    var delay = "";

    const start = () => {
        duration = 0;

        startTime = new Date().getTime();
        delay = (Math.random() * 2) * 1000;

        bg = "bg-red-400"
        setTimeout(() => {
            bg = "bg-green-400";
        }, delay);
    }

    const stop = () => {
        if (duration === 0 && startTime !== "" && bg === "bg-green-400") {
            let time = new Date().getTime();
            duration = time - startTime;
            duration = Math.floor(duration - delay);

            bg = "bg-marine-bright";
            startTime = "";
        }
    }
</script>

<svelte:head>
    <title>Random Reaction</title>
</svelte:head>

<div>
    <Title title="Random Reaction"/>
    <div class="rounded-xl py-5 border-4 {bg} border-bee cursor-pointer" on:click={stop}>
        <div class="text-5xl text-bee font-bold">
            <p class="text-white text-xl">Click to Stop</p>
        </div>  
    </div>
    <div class="rounded-xl mt-2 pt-5 border-4 bg-marine-bright   border-bee">
        <p class="text-xl font-semibold text-white pb-5">{duration} ms</p>
    </div>
    <Button action={start} text="Start"></Button>
    <Button action={stop} text="Stop"></Button>
</div>
