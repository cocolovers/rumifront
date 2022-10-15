<script lang='ts'>
	import FormNewGame from '$lib/components/FormNewGame.svelte';
	import { useCreateGame } from '$lib/hooks/useCreateGame';

	const { createGame } = useCreateGame();
</script>

<FormNewGame on:submit={createGame} />