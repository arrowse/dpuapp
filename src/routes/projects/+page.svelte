<script lang="ts">
    import type {PageData} from './$types';
    import {fxCheck} from "$lib/stores";
    import bread1 from "$lib/images/bread1.jpg";
    import bread2 from "$lib/images/bread2.jpg";
    import bread3 from "$lib/images/bread3.jpg";
    import bread4 from "$lib/images/bread4.jpg";

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
        </div>
        <ul>
            <li>
                <h2>Click-in</h2>
                <div class="side-by-side">
                    <p>Click-in is a student check-in app designed to make it easier for office staff to count how many
                        lunches to order, input attendance, and predict future tardies/absences following COVID.<br />
                        <br />Every  day, we would arrive and fill out a google form, staff would then import the submissions to a google sheet and tally the data. Click-in makes it easier for students,
                        since your information is saved after your first login, and comes with a dashboard that collects and
                        counts everything automatically.</p>
                    <img src="https://s12.gifyu.com/images/SZk11.gif" alt="clickin" class="clickin"/>
                </div>
            </li>
            <li>
                <h2>ScrimBoard</h2>

                <div class="side-by-side">
                    <p> A Splatoon scrim matchmaking system which helps teams find practice with other
                        similarly skilled teams. While this is a niche project, it has a major impact on the competitive
                        community and addresses one of the largest barriers to entry, finding scrims.</p>
                    <iframe src="https://www.youtube-nocookie.com/embed/EQWjH6Bb9hc?si=Ruyggky9xEcJcQg-"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </li>
            <li>
                <h2>October Rift & November Drift</h2>
                <div class="side-by-side">
                    <p>October Rift & November Drift are the two competitive Splatoon teams I captain; following my
                        business management class last year, I decided to apply what I learned about hiring, scheduling
                        and managing goals, resolving conflicts, and creating a healthy team environment to Splatoon.</p>
                    <iframe src="https://www.youtube-nocookie.com/embed/N44QA_m6W6I?si=F8OqmxtxQkWaoxVz"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </li>
            <li>
                <h2>Policy Debate</h2>
                <p>I helped start the debate team at my school two years ago, since then I’ve worked my way up from
                    novice and varsity, and began teaching others how to debate in order to help grow the club before I
                    leave.</p>
            </li>
            <li>
                <h2>Tournament Organization</h2>
                <p>After playing in Splatoon tournaments for a while, a request for volunteers was posted by Under Pressure. I joined and started helping to organize JRs Draft, which helps new players enter the competitive scene. I now volunteer at three organizations, Under Pressure, The Splatlands Slam, and From The Ink Up, which a few of DePaul’s current teams play in.</p>
            </li>
            <li>
                <h2>Natural lighting exhibit</h2>
                <p>A photo shoot taken at around 2:00 in the afternoon with no proper lighting equipment. I took videos on a tripod, adjusted the exposure, and then blended frames in post to get the final product.</p>
                <div class="photo-grid">
                    <img src={bread2} alt="bread2"/>
                    <img src={bread1} alt="bread1"/>
                    <img src={bread3} alt="bread3"/>
                    <img src={bread4} alt="bread4"/>
                </div>
            </li>
        </ul>
        <div class="footer" />
        <!--        <h2>Random things I made for fun</h2>-->
    </div>
</div>

<style>
    .photo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 1em;
    }
    .photo-grid img {
        width: 100%;
        height: auto;
    }
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

    .clickin {
        height: 700px;
    }

    iframe {
        width: 425px;
        height: 239px;
    }

    p {
        color: bisque;
    }

    .offset-left {
        padding-left: 2em;
    }

    .side-by-side {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
        gap: 1em;
    }

    h1 {
        margin: 0;
        color: bisque;
    }

    h2 {
        color: burlywood;
        font-size: 1.8em;
        max-width: 60em;
        margin-top: 3em;
        margin-bottom: 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }
</style>