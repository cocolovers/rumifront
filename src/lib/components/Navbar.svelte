<script lang='ts' src='./script.ts'>
	import { Avatar, Divider, Dropdown, Group, Menubar, MenuList } from '@codeunic/svelte-ui';
	import type { IMenuItem } from '@codeunic/svelte-ui/interfaces/IMenuItem';
	import { menuNavbar, routes } from '../config/routes';
	import { authStore } from '$lib/store/auth';
	import imageAvatar from '$lib/assets/avatar.jpeg';
	import { routes as routers } from '$lib/config/routes';

	const items: IMenuItem[] = menuNavbar;

	$:_items = items;

	const userItem = [
		routes.home,
		{ label: 'Logout', href: '/dashboard', icon: 'fa fa-unlock' }
	];
</script>

<Menubar isFixed isMenu items={_items}>
	<div slot='start'>
		<a href={routers.home.href}>LOGO</a>
	</div>
	<div slot='end'>
		<Dropdown position='right'>
			<Avatar slot='trigger' image='{imageAvatar}' />
			<Group style='padding: 20px;padding-bottom: 0'>
				<Avatar size='lg' image='{imageAvatar}' />
				<span>{$authStore.user.name} ({$authStore.user.id})</span>
			</Group>
			<Divider />
			<MenuList items={userItem} />
		</Dropdown>
	</div>
</Menubar>

<style lang='scss'>
  div {
    color: black;
    flex: 1;
  }

  :global {
    .UI-Navbar.isMenu.isFixed {
      height: var(--ui-navbar_height);

      div[slot="end"] {
        text-align: right;
        color: black;
        font-weight: bold;
      }

      > ul {
        justify-content: center;
      }
    }
  }
</style>