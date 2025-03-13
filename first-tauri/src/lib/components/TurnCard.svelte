<script lang="ts">
	interface Props {
		id: number;
		onClick(id: number): void;
	}

	let {id, onClick}: Props = $props();
</script>

<button onclick={() => onClick(id)}>TurnCard {id}</button>

<style lang="scss">
  button {
    width: 80px;
    height: 80px;
  }
</style>