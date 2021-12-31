<script>
    import Button from "$lib/Button.svelte";
    import Title from "$lib/Title.svelte";

    $: result = getDecision();

    const getDecision = () => {
        let decision = (Math.floor(Math.random() * 2) + 1);
        if (decision == 1) {
            result = "yes";
            return "yes";
        } else {
            result = "no";
            return "no";
        }
    }
</script>

<svelte:head>
    <title>Random Color</title>
</svelte:head>

<main class="text-bee">
    <Title title="Random Decision"/>
    <div class="result bg-marine-bright py-10 sm:mx-20 lg:mx-40 rounded-xl text-6xl text-center">
        <p>{result}</p>
        <!-- <img src="{result}.svg" alt="{result}"> -->
    </div>
    <Button action={getDecision}></Button>
</main>