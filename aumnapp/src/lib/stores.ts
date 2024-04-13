import { writable } from 'svelte/store';

function createFxCheck(initialToggle : boolean) {
    let toggle = initialToggle;
    const { subscribe, set, update } = writable(toggle);

    subscribe(value => {
        toggle = value;
    });

    return {
        subscribe,
        toggle: () => update(value => !value),
    };
}

export const fxCheck = createFxCheck(true);