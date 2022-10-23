<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<main>
	<slot></slot>
</main>
<Footer />

<style lang='scss'>
  main {
    margin-top: var(--ui-navbar_height);
  }
</style>