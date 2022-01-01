<script>
    export let action;
    export let text;
</script>

<button class="text-marine px-3 py-1.5 mb-4 font-bold mt-5 bg-bee rounded-full" type="submit" on:click|preventDefault={action}>{text}</button>