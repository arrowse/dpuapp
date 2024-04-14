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

    p {
        color: #96e7cb;

    }

    h1 {
        margin: 0;
        color: #96e7cb;
    }

</style>