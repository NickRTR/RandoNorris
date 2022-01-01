<script>
    import Button from "$lib/Button.svelte";
    import Title from "$lib/Title.svelte";

    $: result = getDecision();
    $: bg = "bg-marine-bright";

    const getDecision = () => {
        bg = "bg-green-400"
        setTimeout(() => {
            bg = "bg-marine-bright"
        }, 250);
        let decision = (Math.floor(Math.random() * 2) + 1);
        if (decision == 1) {
            result = "true";
            return "true";
        } else {
            result = "false";
            return "false";
        }
    }
</script>

<svelte:head>
    <title>Random Decision</title>
</svelte:head>

<main class="text-bee">
    <Title title="Random Decision"/>
    <div class="result {bg} py-5 sm:mx-20 lg:mx-40 rounded-xl text-6xl text-center">
        <img class="mx-auto" src="/decision/{result}.svg" alt="{result}" width="50%">
    </div>
    <Button action={getDecision}></Button>
</main>