<script lang="ts">
    import {fxCheck} from "$lib/stores";

</script>
{#if $fxCheck === true}
    <div class="absolute">
        <div class="absolutegrid justify-center">
            <div class="bg-shape2 bg-green opacity-20 bg-blur"/>
            <div class="bg-shape3 bg-blue opacity-20 bg-blur"/>
            <div class="bg-shape6 bg-green opacity-20 bg-blur"/>
            <div class="bg-shape1 bg-sapphire opacity-20 bg-blur"/>
            <div class="bg-shape4 bg-teal opacity-20 bg-blur"/>
            <div class="bg-shape5 bg-green opacity-20 bg-blur"/>
        </div>
    </div>
{/if}

<div class="mainContent">
    <div class="page">
        <div class="headertextcontainer">
            <h1 class="">About & Credits</h1>
            <p>Computers to me are superpowered books, while for many they’re just tools for getting work done or places to use apps, a website to me is much like a sketchbook, an extension of your thoughts where you can dream of and create anything. I also think it’s fun to code, both for the sake of creating something and potentially sharing it with others.</p>
            <p>This website was made with love, from scratch in HTML, CSS and TypeScript using the Svelte framework.
                <br/><br/>CSS animations were created using a generator called <a href="https://animista.net/">Animista.</a>
                <br/>  <br/>The color pallet is called Catppuccin, you can <a href="https://catppuccin.com/">learn more about it here.</a>
            </p>
        </div>
        <p class=""></p>

    </div>
</div>

<style>
    .mainContent {
        height: 100vh;
        max-width: 60em;
        margin: 8em auto;
    }
    @media (min-width: 720px) {
        .mainContent {
            width: 80%;
        }
    }

    a {
        color: var(--ctp-frappe-blue);
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }

    p {
        color: #96e7cb;

    }

    h1 {
        margin: 0;
        color: #96e7cb;
    }

</style>