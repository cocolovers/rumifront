// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		session: Session;
	}

	// interface PageData {}

	// interface Platform {}
}

type User = {
	name: string;
};

type Session = {
	str: string;
	url: string;
	user?: User;
};
