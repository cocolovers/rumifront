import type { IMenuItem } from '@codeunic/svelte-ui/interfaces/IMenuItem';

export class Route implements IMenuItem {
	public isHeader?: boolean;
	public items?: IMenuItem[];
	public command?: (event: any) => void;
	public expanded?: boolean;
	public disabled?: boolean;
	public separator?: boolean;
	public style?: string;
	public class?: string;
	public active?: boolean;
	public open?: boolean;

	constructor(public label: string, public href: string, public icon?: string) {
	}
}