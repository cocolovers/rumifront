<script lang='ts'>
	import { Avatar, Divider, Dropdown, Group, Menubar, MenuList } from '@codeunic/svelte-ui';
	import type { IMenuItem } from '@codeunic/svelte-ui/interfaces/IMenuItem';
	import { menuNavbar } from '../routes';
	import { authStore } from '$lib/store/auth';
	import imageAvatar from '$lib/assets/avatar.jpeg';

	const items: IMenuItem[] = menuNavbar;

	$:_items = items;

	const userItem = [
		{label: "Web", href: "/", icon: "fa fa-chevron-left"},
		{label: "Dashboard", href: "/dashboard", icon: "fa fa-dashboard"},
		{label: "My profile", href: "/dashboard/profile", icon: "fa fa-user"},
		{label: "Notifications", href: "/dashboard/notifications", icon: "fa fa-bell"},
		{label: "Messages", href: "/dashboard/messages", icon: "fa fa-envelope"},
		{label: "Logout", href: "/dashboard", icon: "fa fa-unlock"},
	]
</script>

<Menubar isFixed isMenu items={_items}>
	<div slot='start'>logo</div>
	<div slot='end'>
		<Dropdown position="right">
			<Avatar slot="trigger" image="{imageAvatar}"/>
			<Group style="padding: 20px;padding-bottom: 0">
				<Avatar size="lg" image="{imageAvatar}"/>
				<span>{$authStore.name} ({$authStore.id})</span>
			</Group>
			<Divider/>
			<MenuList items={userItem}/>
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