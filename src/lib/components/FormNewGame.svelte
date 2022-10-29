<script lang='ts'>
	import { Button, Checkbox, enhance, FormGroup, Input, InputPassword } from '@codeunic/svelte-ui';
	import { createEventDispatcher } from 'svelte';
	import { routesApi } from '$lib/config/routesApi';
	import { useLog } from '../hooks/useLog';
	import { ECreateGame } from '$lib/enum/game/create.js';

	const { log } = useLog();

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
			log(ECreateGame.ERROR_CREATE_GAME, e)
    },
    result: (data) => {
			loading = false;
			log(ECreateGame.RESULT_CREATE_GAME, data)
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