<script>
	import LoginForm from '$lib/components/LoginForm.svelte';
	import { Alert, Card, CardBody } from '@codeunic/svelte-ui';
	import { auth } from '$lib/mappers/auth';
	import { io } from '$lib/functions/webSocketConnection';
	import { useAuth } from '$lib/store/auth';
	import { EUser } from '$lib/enum/socket/user';

	const { register } = useAuth();
	let messageError;
	let loading = false;

	const onSubmit = ({ detail }) => {
		messageError = false;
		io.emit(EUser.USER_CONNECT, auth(detail), (err, message) => {
			if (err) {
				messageError = message;
				return;
			}

			register(message);
		});
	};
</script>

<Card>
	<CardBody>
		{#if !!messageError}
			<Alert message='{messageError}' theme='danger' />
		{/if}
		<LoginForm {loading} on:submit={onSubmit}></LoginForm>
	</CardBody>
</Card>