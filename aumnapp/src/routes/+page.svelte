<script lang="ts">
    import aimg from '$lib/images/a.png'
    import shakinnah from '$lib/images/shakinnah.png'
    import {fxCheck} from "$lib/stores";
    let animationsDisabled = '';
    $: animationsDisabled = $fxCheck ? '' : 'no-animation';
</script>
<html lang="en">
<div class="{animationsDisabled}">
{#if $fxCheck === true}
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
            <h1 class="tracking-in-contract-bck-bottom">Photographing Cats: A story of turning love into art.</h1>
        </div>
        <p class="fade-in-delay">Growing up I found talking to others a bit difficult, my interests were odd, school days were long, and sometimes things got a bit slow, but no matter what I could always come home and expect a greeting from a furry friend, named Shakinnah. Cats are often regarded as complicated, they demand attention only to turn away as soon as you look in their direction, ask for food and then lose interest after you feed them, and have somewhat odd behaviors which perplex the uninitiated. My two earliest passions growing up were cats and photography, every day during lunch you could find me in the library reading encyclopedias to understand as much as I could about cats, their behaviors, personalities, and coat patterns, which I hoped could help me make my furry friend happier. I’d use my dad’s cannon powershot to take photos of Shakinnah, and whatever else I found interesting at the time, only to edit those photos together and burn them to a DVD,.</p>
        <img src={shakinnah} alt="Shakinnah" class="fade-in-delay small-image"/>
        <p class="fade-in-delay"> Shekinah passed away peacefully a few years later, as an 8 year-old I didn’t know it then, but I had built two core passions which would grow to become the core of who I am, those being to 1. create art based on my environment or interests and 2. use my interests or knowledge to help others. <br />In a nutshell, my passion is to create things that help people or otherwise make their lives better.</p>
    </div>
</div>
</div>
</html>
<style>
    .mainContent {
        height: 100vh;
        max-width: 60em;
        margin: 0 auto;
    }
    @media (min-width: 720px) {
        .mainContent {
            width: 80%;
        }
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
    .no-animation * {
        animation: none !important;
        transition: none !important;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    .small-image {
        max-width: 40em;
    }
</style>
