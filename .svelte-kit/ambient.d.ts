
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into public-facing code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const TERM_SESSION_ID: string;
	export const LESSOPEN: string;
	export const KDE_FULL_SESSION: string;
	export const SNAP_INSTANCE_KEY: string;
	export const USER: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const SNAP_COMMON: string;
	export const LC_TIME: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const npm_config_bin_links: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_node_execpath: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_config_init_version: string;
	export const XCURSOR_SIZE: string;
	export const SHLVL: string;
	export const HOME: string;
	export const SNAP_LIBRARY_PATH: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const DESKTOP_SESSION: string;
	export const SNAP_USER_DATA: string;
	export const NVM_BIN: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const NVM_INC: string;
	export const TERMINAL_EMULATOR: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_config_init_license: string;
	export const GTK_RC_FILES: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT_PATH: string;
	export const KDE_SESSION_VERSION: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_config_version_tag_prefix: string;
	export const LC_MONETARY: string;
	export const npm_package_scripts_check: string;
	export const SYSTEMD_EXEC_PID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const SNAP_REVISION: string;
	export const npm_package_description: string;
	export const npm_package_devDependencies_typescript: string;
	export const NVM_DIR: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const npm_package_scripts_dev: string;
	export const GTK_IM_MODULE: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const SNAP_CONTEXT: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const _: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_private: string;
	export const XDG_SESSION_CLASS: string;
	export const SNAP_VERSION: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const XDG_SESSION_ID: string;
	export const SNAP_INSTANCE_NAME: string;
	export const npm_package_devDependencies_eslint_plugin_svelte3: string;
	export const npm_config_ignore_scripts: string;
	export const GTK2_RC_FILES: string;
	export const PATH: string;
	export const NODE: string;
	export const SESSION_MANAGER: string;
	export const npm_package_name: string;
	export const XDG_SESSION_PATH: string;
	export const LC_ADDRESS: string;
	export const BAMF_DESKTOP_FILE_HINT: string;
	export const SNAP_DATA: string;
	export const XDG_RUNTIME_DIR: string;
	export const XCURSOR_THEME: string;
	export const DISPLAY: string;
	export const DESKTOP_STARTUP_ID: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LC_TELEPHONE: string;
	export const npm_package_devDependencies_eslint: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const SNAP_USER_COMMON: string;
	export const SSH_AUTH_SOCK: string;
	export const __GL_SYNC_TO_VBLANK: string;
	export const SNAP_ARCH: string;
	export const SNAP_COOKIE: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_scripts_test: string;
	export const npm_config_version_git_message: string;
	export const SHELL: string;
	export const LC_NAME: string;
	export const npm_lifecycle_event: string;
	export const npm_package_version: string;
	export const QT_ACCESSIBILITY: string;
	export const SNAP_REEXEC: string;
	export const npm_config_argv: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_build: string;
	export const LESSCLOSE: string;
	export const SNAP_NAME: string;
	export const LC_MEASUREMENT: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_git_sign: string;
	export const GPG_AGENT_INFO: string;
	export const LC_IDENTIFICATION: string;
	export const npm_config_strict_ssl: string;
	export const QT_IM_MODULE: string;
	export const XDG_VTNR: string;
	export const npm_package_scripts_format: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const SNAP_REAL_HOME: string;
	export const CLUTTER_IM_MODULE: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const SNAP: string;
	export const LC_NUMERIC: string;
	export const npm_package_dependencies_socket_io_client: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_config_save_prefix: string;
	export const npm_config_ignore_optional: string;
	export const LC_PAPER: string;
	export const KDE_SESSION_UID: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_dependencies__codeunic_svelte_ui: string;
	export const INIT_CWD: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into public-facing code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		TERM_SESSION_ID: string;
		LESSOPEN: string;
		KDE_FULL_SESSION: string;
		SNAP_INSTANCE_KEY: string;
		USER: string;
		PAM_KWALLET5_LOGIN: string;
		SNAP_COMMON: string;
		LC_TIME: string;
		npm_config_version_commit_hooks: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		npm_config_bin_links: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		npm_node_execpath: string;
		npm_package_devDependencies_vite: string;
		npm_config_init_version: string;
		XCURSOR_SIZE: string;
		SHLVL: string;
		HOME: string;
		SNAP_LIBRARY_PATH: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		DESKTOP_SESSION: string;
		SNAP_USER_DATA: string;
		NVM_BIN: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		NVM_INC: string;
		TERMINAL_EMULATOR: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_config_init_license: string;
		GTK_RC_FILES: string;
		GTK_MODULES: string;
		XDG_SEAT_PATH: string;
		KDE_SESSION_VERSION: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_devDependencies_svelte_check: string;
		npm_config_version_tag_prefix: string;
		LC_MONETARY: string;
		npm_package_scripts_check: string;
		SYSTEMD_EXEC_PID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		SNAP_REVISION: string;
		npm_package_description: string;
		npm_package_devDependencies_typescript: string;
		NVM_DIR: string;
		npm_package_readmeFilename: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies__playwright_test: string;
		npm_package_scripts_dev: string;
		GTK_IM_MODULE: string;
		LOGNAME: string;
		npm_package_type: string;
		SNAP_CONTEXT: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		_: string;
		npm_package_scripts_check_watch: string;
		npm_package_private: string;
		XDG_SESSION_CLASS: string;
		SNAP_VERSION: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		TERM: string;
		XDG_SESSION_ID: string;
		SNAP_INSTANCE_NAME: string;
		npm_package_devDependencies_eslint_plugin_svelte3: string;
		npm_config_ignore_scripts: string;
		GTK2_RC_FILES: string;
		PATH: string;
		NODE: string;
		SESSION_MANAGER: string;
		npm_package_name: string;
		XDG_SESSION_PATH: string;
		LC_ADDRESS: string;
		BAMF_DESKTOP_FILE_HINT: string;
		SNAP_DATA: string;
		XDG_RUNTIME_DIR: string;
		XCURSOR_THEME: string;
		DISPLAY: string;
		DESKTOP_STARTUP_ID: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		LC_TELEPHONE: string;
		npm_package_devDependencies_eslint: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		SNAP_USER_COMMON: string;
		SSH_AUTH_SOCK: string;
		__GL_SYNC_TO_VBLANK: string;
		SNAP_ARCH: string;
		SNAP_COOKIE: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_scripts_test: string;
		npm_config_version_git_message: string;
		SHELL: string;
		LC_NAME: string;
		npm_lifecycle_event: string;
		npm_package_version: string;
		QT_ACCESSIBILITY: string;
		SNAP_REEXEC: string;
		npm_config_argv: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_build: string;
		LESSCLOSE: string;
		SNAP_NAME: string;
		LC_MEASUREMENT: string;
		npm_config_version_git_tag: string;
		npm_config_version_git_sign: string;
		GPG_AGENT_INFO: string;
		LC_IDENTIFICATION: string;
		npm_config_strict_ssl: string;
		QT_IM_MODULE: string;
		XDG_VTNR: string;
		npm_package_scripts_format: string;
		PWD: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		SNAP_REAL_HOME: string;
		CLUTTER_IM_MODULE: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		SNAP: string;
		LC_NUMERIC: string;
		npm_package_dependencies_socket_io_client: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_config_save_prefix: string;
		npm_config_ignore_optional: string;
		LC_PAPER: string;
		KDE_SESSION_UID: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_scripts_preview: string;
		npm_package_dependencies__codeunic_svelte_ui: string;
		INIT_CWD: string;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: string]: string | undefined;
	}
}
