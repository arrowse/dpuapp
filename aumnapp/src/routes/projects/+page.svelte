<script lang="ts">
    import type {PageData} from './$types';
    import {fxCheck} from "$lib/stores";
    import aimg from "$lib/images/a.png";

    export let data: PageData;
</script>
{#if $fxCheck === true}
    <div class="absolute">
        <div class="absolutegrid justify-center">
            <div class="bg-shape4 bg-yellow opacity-20 bg-blur"/>
            <div class="bg-shape1 bg-flamingo opacity-20 bg-blur"/>
            <div class="bg-shape2 bg-peach opacity-20 bg-blur"/>
            <div class="bg-shape6 bg-maroon opacity-20 bg-blur"/>
            <div class="bg-shape4 bg-flamingo opacity-20 bg-blur"/>
            <div class="bg-shape5 bg-yellow opacity-20 bg-blur"/>
        </div>
    </div>
{/if}

<div class="mainContent">
    <div class="page">
        <div class="headertextcontainer">
            <h1 class="">Projects & Volunteering work</h1>
            <p>If you're interested in any of the projects I mentioned in my essay, I've linked a few here for you to
                explore! Feel free to look at as few or many as you would like, they serve as examples of my work but
                don't make or break my application.<br /></p>
        </div>
        <ul>
            <li>
                <p> Click-in, which is a student check-in app designed to make it easier for office staff to count how
                    many lunches to order, input attendance, and predict future tardies / absences following COVID.</p>
            </li>
            <li>
                <p> ScrimBoard, a Splatoon scrim matchmaking system which helps teams find practice with other
                    similarly skilled teams. While this is a niche project, it has a major impact on the competitive
                    community and addresses one of the largest barriers to entry, finding scrims.</p>
            </li>
            <li>
                <p> hi </p>
            </li>
            <li>
                <p> hi </p>
            </li>
        </ul>

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
        color: bisque;

    }

    h1 {
        margin: 0;
        color: bisque;
    }

</style>