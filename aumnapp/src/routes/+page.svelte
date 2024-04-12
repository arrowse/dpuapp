<script lang="ts">
    import aimg from '$lib/images/a.png'
    $: background = true
</script>
<html lang="en">
{#if background === true}
<div class="absolute puff-in-ver">
    <div class="absolutegrid justify-center">
        <div class="bg-shape1 bg-blue opacity-20 bg-blur"/>
        <div class="bg-shape2 bg-mauve opacity-20 bg-blur"/>
        <div class="bg-shape3 bg-blue opacity-20 bg-blur"/>
        <div class="bg-shape4 bg-sapphire opacity-20 bg-blur"/>
        <div class="bg-shape5 bg-lavender opacity-20 bg-blur"/>
        <div class="bg-shape6 bg-sky opacity-20 bg-blur"/>
    </div>
</div>
{/if}

<div class="mainContent">
    <div class="page">
        <img src={aimg} alt="a logo" class="alogo">
        <div class="headertextcontainer">
            <h1 class="tracking-in-contract-bck-bottom">Passion comes in many forms,</h1>
        </div>
        <p class="fade-in-delay">from editing videos, volunteering, spending times with friends, passion is the glue that holds our lives together,  </p>
    </div>
</div>
</html>
<style>
    .mainContent {
        display: flex;
        height: 100vh;
        max-width: 35em;
        margin: 0 auto;
    }

    .alogo {
        width: 100%;
        max-width: 9em;
        margin: 10vh 0 0 0;
        clip-path: inset(15% 10% 10% 20%);
        transform: translateX(-30px);
    }

    h1 {
        margin: 0;
    }

</style>
