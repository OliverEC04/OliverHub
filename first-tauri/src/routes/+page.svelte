<script lang="ts">
	import {invoke} from '@tauri-apps/api/core';
	import TurnCard from '$lib/components/TurnCard.svelte';
	import {shuffle} from '$lib/utils/arrayHelpers';

	let name = $state('');
	let greetMsg = $state('');

	const text = $state('');

	async function greet(event: Event) {
		event.preventDefault();
		// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
		greetMsg = await invoke('greet', {name});
	}

	const turnCards = [1, 2, 3, 4];
	const turnCardsRandomized = shuffle(turnCards.concat(turnCards));
</script>

<main class="container">
    <div id="board">
        {#each turnCardsRandomized as turnCard}
            <TurnCard id={turnCard}/>
        {/each}
    </div>
</main>

<style lang="scss">
   #board {
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
     gap: 0;
   }
</style>
