<script>
    import {page} from "$app/stores";

    const nav = [
        {title: "Number", path: "/"},
        {title: "Decision", path: "/generators/randomdecision"},
        {title: "Letter", path: "/generators/randomletter"},
        {title: "Country", path: "/generators/randomcountry"},
        {title: "Color", path: "/generators/randomcolor"},
        {title: "Reaction", path: "/generators/randomreaction"},
    ];

    $: hamburger = "hidden";
    $: blur = "blur-none";

    const toggleHamburger = () => {
        if (hamburger === "hidden") {
            hamburger = "block";
        } else {
            hamburger = "hidden";
        }

        if (blur === "blur-none") {
            blur = "blur-lg";
        } else {
            blur = "blur-none"
        }
    }
</script>

<body class="bg-marine text-center min-h-screen text-xl">
    <header class="bg-marine-bright flex px-2.5 sm:px-20 md:px-40 lg:px-60 py-4 mb-6">
        <h1 class="text-3xl font-semibold text-bee my-auto">Rando Norris</h1>
        <div class="links text-marine ml-auto hidden lg:flex">
            {#each nav as item}
                <a class:active={$page.path === item.path} class="rounded-full text-white border-2 border-bee p-1.5 ml-2 focus:bg-bee focus:text-marine focus:outline-none hover:bg-bee hover:text-marine hover:outline-none" href={item.path}>{item.title}</a>    
            {/each}
        </div>
        <div class="hamburger ml-auto lg:hidden">
            <img class="cursor-pointer mx-auto" src="/menu.svg" alt="menu" width="50px" style="color: white" on:click={toggleHamburger}>
            <div class="absolute z-10 bg-marine-bright top-24 right-3 p-5 rounded-2xl {hamburger}">
                {#each nav as item}
                    <div class="my-5"><a class:activeMobile={$page.path === item.path} class="text-white px-4 focus:outline-none focus:underline" href={item.path} on:click={toggleHamburger}>{item.title}</a></div>
                {/each}
            </div>
        </div>
    </header>

    <div class="{blur} mx-5 mb-10 sm:mx-20 md:mx-40 lg:mx-60 xl:80"><slot></slot></div>

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

    .activeMobile {
        color: #F6C90E;
        text-decoration-line: underline;
    }
</style>