<script lang='ts'>
	import '@codeunic/svelte-ui/styles.scss';
	import { io } from '$lib/functions/webSocketConnection';
	import { onMount } from 'svelte';
	import { ESocket } from '$lib/enum/socket/socket.js';
	import { useLog } from '$lib/hooks/useLog';
	import { ESocketLog } from '$lib/enum/log/socket/socket.js';
	import { userAuth } from '../lib/hooks/socket/userAuth';

	const { log } = useLog();
	const { messageError, login } = userAuth();

	onMount(() => {
		io.on(ESocket.CONNECT, (message) => {
			log(ESocketLog.CONNECT, message);
		});

		io.on(ESocket.DISCONNECT, (message) => {
			log(ESocketLog.DISCONNECT, message);
		});
		// login($authStore);
	});
</script>

<slot></slot>