<script lang='ts'>
	import { Button, Checkbox, enhance, FormGroup, Input } from '@codeunic/svelte-ui';
	import { createEventDispatcher } from 'svelte';
	import repository from '$lib/config/repository';
	import { routesApi } from '$lib/config/routesApi';

	const dispatch = createEventDispatcher();
	export let loading = false;
	export let varPrivate = false;
</script>

<form
	action={routesApi.newGame.href}
	method='post'
	use:enhance={{
    pending:() => loading = true,
    error:(e) => {
			loading = false;
			console.log("ERROR");
			repository.logs.error(e)
    },
    result: (data) => {
			loading = false;
			repository.logs.log(data)
			dispatch("submit", data)
    }
  }}
>
	<FormGroup label='Alias game'>
		<Input
			placeholder='Alias Game'
			name='alias'
		/>
	</FormGroup>
	<FormGroup label='Password'>
		<Input
			placeholder='Password'
			name='password'
			type='password'
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