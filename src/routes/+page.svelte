<script>
	import Login from '$lib/containers/Login.svelte';
	import { onMount } from 'svelte';
	import { io } from '$lib/functions/webSocketConnection';

	onMount(() => {
		setInterval(() => {
			io.emit('user:test', { name: 'hola', date: new Date() });
		}, 2000);
	});
</script>

<div>
	<Login />
</div>

<style lang='scss'>
  div {
    margin: 40px;
  }
</style>