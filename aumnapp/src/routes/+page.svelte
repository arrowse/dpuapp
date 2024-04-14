<script lang="ts">
    import aimg from '$lib/images/a.png'
    import shakinnah from '$lib/images/shakinnah.png'
    import tater1 from '$lib/images/tater1.jpg'
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
                <h1 class="tracking-in-contract-bck-bottom">Passion comes in many forms...</h1>
            </div>
            <p class="fade-in-delay">Growing up, I found talking to others difficult, my interests were odd, school days
                were long, and sometimes things got a bit slow, but no matter what, I could always come home and expect
                a greeting from a furry friend named Shakinnah. Cats are often regarded as complicated; they demand
                attention only to turn away as soon as you look in their direction, ask for food, lose interest after
                you feed them, and have odd behaviors that perplex the uninitiated. My two earliest passions growing up
                were cats and photography. Every day during lunch, one would find me in the library reading
                encyclopedias to understand as much as I could about cats, their behaviors, personalities, and needs,
                which I hoped could help make my furry friend happier. Combining my love of cats and photography, I’d
                use my dad’s Cannon PowerShot to take photos of Shakinnah, which I would burn to DVDs and share with my
                family.</p>
            <img src={shakinnah} alt="Shakinnah" class="fade-in-delay small-image"/>
            <p class="fade-in-delay">Shekinah passed away peacefully a few years later. As an 8-year-old, I didn’t know
                it then, but I had built two passions that would grow to become the core of who I am, those being to 1.
                create art based on my interests and 2. use knowledge of my interests to help others. In a nutshell, my
                passion is to create things that help people.
            </p>
            <p class="fade-in-delay">By age 12, I leaned heavier into video editing, which I applied by volunteering at
                a non-profit organization to help create marketing videos and teach others to edit. After summer ended
                and the non-profit closed for the rest of the year, I combined editing with another newfound interest,
                Splatoon. I would edit clips together and post them, which eventually led me to do paid editing work for
                other content creators, which became my primary use of free time.
            </p>
            <p class="fade-in-delay">Starting high school, I drastically reduced the amount of time I was spending on
                editing to focus on academics while simultaneously beginning to grapple with more significant questions
                in life regarding power structures and inequality. Through this time, I gathered friends of varying
                backgrounds to hold seminar discussions, which led me to a pivotal realization: understanding power
                structures and societal issues is an inherently creative task. While it’s easy to see the individual
                issues and their impacts, starting with nothing and building a modern society from scratch is much more
                complicated. Theoretically, if one can comprehend the model itself, one could change individual
                components at a lower level to help people. After four years of school and two years of policy debate,
                I’m working on a new economic philosophy and a structure for breaking down the processes that create
                different economies.
            </p>
            <p class="fade-in-delay">Along the way, I learned to code to help my school with tracking attendance,
                studied management to help run more extensive projects, started a development team to help improve
                accessibility within the Splatoon community, became a volunteer at multiple Splatoon tournament
                organizations, helped start a debate team for my school, and began teaching others how to debate.
            </p>
            <p class="fade-in-delay">And, of course, I took a few more cat photos.
            </p>
            <img src={tater1} alt="Tater" class="fade-in-delay"/>
            <p class="fade-in-delay"> Because my passion is a core motivation, rather than a specific subject or field,
                it’s dictated how I apply myself to my environment, resulting in many different works in different
                fields. It motivates me to learn and engage with my school, volunteer at community organizations
                physically and digitally, and try to help others find their passions. From here, you’re free to <a href="projects">explore
                    my work in more detail via the Projects</a> tab or <a href="about">learn more about why I decided to create a website of all
                things on the About tab</a>. Thank you for your time, I look forward to building a future at DePaul.</p>
        </div>
        <div class="footer"/>
    </div>
</div>
</html>
<style>
    .footer {
        height: 10vh;
    }
    a {
        color: var(--ctp-frappe-blue);
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
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
        width: 100%;
        height: auto;
        object-fit: contain;
    }

    .small-image {
        max-width: 40em;
    }
</style>
