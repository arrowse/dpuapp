<script>
    import {fxCheck} from "$lib/stores";
    let buttonClass = '';
    $: buttonClass = $fxCheck ? 'vfx-on' : 'vfx-off';
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

    <button class={buttonClass} on:click={() => fxCheck.toggle()}>VFX: {$fxCheck ? 'ON' : 'OFF'}</button>
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

    button {
        background: none;
        font-size: 1rem;
        padding: 0.5rem 1rem;
    /*    animate padding change */
        transition: padding 0.1s;
    }

    button:hover {
        cursor: pointer;
        padding: 0.5rem 1.6rem;
    }
    @media (max-width: 768px) {
        .headerContainer {
            flex-direction: column;
        }
        button {
            margin-top: 1rem;
        }
    }
    .vfx-on {
        color: var(--ctp-frappe-teal);
        border: 1px solid var(--ctp-frappe-teal);
    }

    .vfx-off {
        color: var(--ctp-frappe-text);
        border: 1px solid var(--ctp-frappe-text);
    }
</style>