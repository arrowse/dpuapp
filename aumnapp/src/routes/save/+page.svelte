<script lang="ts">
    import type {PageData} from './$types';

    export let data: PageData;
</script>

<div class="mainContent">
    <div class="page">
        <div class="headertextcontainer">
            <h1 class="">Save as a PDF</h1>
        </div>
        <p class="">To make it easier to review my application, you're able to <a>save the contents of this website in
            a PDF</a>.<br /> In case you wish to verify the integrity of this site, such as ensuring the code has not been modified past
            the deadline, you can <a href="https://github.com/arrowse/dpuapp" target="_blank">review the source code (and all changes) here.</a></p>

    </div>
</div>

<style>
    .mainContent {
        display: flex;
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
        color: var(--ctp-frappe-text);

    }

    a {
        color: #8699f3;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    h1 {
        margin: 0;
        color: var(--ctp-frappe-text);
    }

</style>