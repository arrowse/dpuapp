<script>
    import {fxCheck} from "$lib/stores";
</script>
<div class="headerContainer">
    <ul>
        <li>
            <a href="/">[Introduction]</a>
        </li>
        <li>
            <a href="/creativity">[Creativity]</a>
        </li>
        <li>
            <a href="/compassion">[Compassion]</a>
        </li>
    </ul>

    <button on:click={() => fxCheck.toggle()}>FX: {$fxCheck ? 'on' : 'off'}</button>
</div>
<style>
    ul {
        display: flex;
        list-style-type: none;
        padding: 0;
    }

    li {
        margin-right: 1rem;
    }

    a {
        text-decoration: none;
        color: var(--ctp-frappe-Mauve)
    }

    a:hover {
        text-decoration: underline;
    }

    .headerContainer {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 1rem;
        background-color: var(--ctp-frappe-White);
        max-width: 140em;
        margin: 0 auto;
    }
</style>