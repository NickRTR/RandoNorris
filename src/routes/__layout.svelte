<body class="bg-marine text-center min-h-screen text-xl">
    <header class="bg-marine-bright flex px-2 sm:px-10 md:px-40 lg:px-60 py-4 mb-6">
        <h1 class="text-2xl sm:text-4xl mb-1 font-semibold text-bee">Rando Norris</h1>
        <div class="links text-marine ml-auto my-auto">
            <a class="bg-bee rounded-full p-1.5" href="/">Number</a>
            <a class="bg-bee rounded-full p-1.5" href="/randomcolor">Color</a>
            <a class="bg-bee rounded-full p-1.5" href="/randomdecision">Decision</a>
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
</style>