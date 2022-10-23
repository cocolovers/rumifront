<script lang='ts'>
	import { Card, MenuList } from '@codeunic/svelte-ui';
	import type { IMenuItem } from '@codeunic/svelte-ui/interfaces/IMenuItem';
	import { menuHome } from '../config/routes';

	const items: IMenuItem[] = menuHome;
</script>

<div>
	<Card>
		<MenuList {items} />
	</Card>
</div>

<style lang='scss'>
  div {
    max-width: var(--MenuHome-width, 350px);
    margin: auto;
    width: 100%;
  }
</style>