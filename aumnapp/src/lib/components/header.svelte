<script>
    import {fxCheck} from "$lib/stores.js";

</script>
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

<button on:click={() => fxCheck.toggle()}>FX: {fxCheck ? 'off' : 'on'}</button>

<style>

</style>