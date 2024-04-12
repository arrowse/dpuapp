import { writable } from 'svelte/store';

function createFxCheck(toggle : boolean) {
    const { subscribe, set } = writable(toggle);

    return {
        subscribe,
        toggle: () => set(!toggle),
    };
}

export const fxCheck = createFxCheck(true);