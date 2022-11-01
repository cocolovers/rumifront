<script lang='ts'>
	import { Button, Checkbox, FormGroup, Input, InputPassword } from '@codeunic/svelte-ui';
	import { createEventDispatcher } from 'svelte';
	import { routesApi } from '$lib/config/routesApi';
	import { useLog } from '../hooks/useLog';

	const { log } = useLog();

	const dispatch = createEventDispatcher();
	export let loading = false;
	export let varPrivate = false;
</script>

<form
	action={routesApi.newGame.href}
	method='post'
	on:submit|preventDefault={(e) => dispatch("submit", new FormData(e.target))}
>
	<FormGroup label='Alias game'>
		<Input
			placeholder='Alias Game'
			name='alias'
		/>
	</FormGroup>
	<FormGroup label='Password'>
		<InputPassword
			placeholder='Password'
			name='password'
		/>
	</FormGroup>
	<FormGroup label='Players'>
		<Input
			placeholder='Number players'
			name='players'
			type='number'
		/>
	</FormGroup>
	<FormGroup label='Turn max time'>
		<Input
			placeholder='Turn max time'
			name='max_time'
			type='number'
		/>
	</FormGroup>
	<FormGroup label='Private game'>
		<Checkbox checked={varPrivate} on:change={(e)=>varPrivate=e.target.checked} />
		<input type='hidden' name='private' value={varPrivate}>
	</FormGroup>
	<Button {loading} theme='success' type='submit'>New Game</Button>
</form>