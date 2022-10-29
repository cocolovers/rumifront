<script lang="ts">
	import '@codeunic/svelte-ui/styles.scss';
	import { io } from '$lib/functions/webSocketConnection';
	import { onMount } from 'svelte';
	import { ESocket } from '$lib/enum/socket/socket.js';
	import { useLog } from '$lib/hooks/useLog';
	import { ESocketLog } from '$lib/enum/log/socket/socket.js';

	const { log } = useLog();

	onMount(() => {
		io.on(ESocket.CONNECT, (message) => {
			log(ESocketLog.CONNECT, message);
		});

		io.on(ESocket.DISCONNECT, (message) => {
			log(ESocketLog.DISCONNECT, message);
		});
	});
</script>

<slot></slot>