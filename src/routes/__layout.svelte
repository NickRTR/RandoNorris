<script>
    import {page} from "$app/stores";

    const nav = [
        {title: "Number", path: "/"},
        {title: "Color", path: "/randomcolor"},
        {title: "Decision", path: "/randomdecision"},
        {title: "Letter", path: "/randomletter"},
    ];
</script>

<body class="bg-marine text-center min-h-screen text-xl">
    <header class="bg-marine-bright flex sm:px-10 md:px-40 lg:px-60 py-4 mb-6">
        <h1 class="text-2xl sm:text-4xl mb-1 font-semibold text-bee">Rando Norris</h1>
        <div class="links text-marine ml-auto my-auto">
            {#each nav as item}
                <a class:active={$page.path === item.path} class="rounded-full text-white border-2 border-bee p-1.5 ml-2" href={item.path}>{item.title}</a>    
            {/each}
        </div>
    </header>

    <div class="mx-5 mb-10 sm:mx-20 md:mx-40 lg:mx-60 xl:80"><slot></slot></div>

    <footer>
        <p class="text-white fixed bottom-0 py-1 w-full mx-auto bg-marine-bright">©2022 Nick Reutlinger</p>
    </footer>
</body>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .active {
        background-color: #F6C90E;
        color: #303841;
    }
</style>