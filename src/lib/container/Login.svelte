<script>
	import LoginForm from '$lib/components/LoginForm.svelte';
	import { Alert, Card, CardBody } from '@codeunic/svelte-ui';
	import { userAuth } from '$lib/hooks/socket/userAuth';

	let loading = false;
	const { messageError, login } = userAuth();

	const onSubmit = ({ detail }) => {
		login(detail);
	};
</script>

<Card>
	<CardBody>
		{#if !!$messageError}
			<Alert message='{messageError}' theme='danger' />
		{/if}
		<LoginForm {loading} on:submit={onSubmit}></LoginForm>
	</CardBody>
</Card>