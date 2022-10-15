<script>
	import PageRow from '$lib/components/PageRow.svelte';
	import FormNewGameCard from '$lib/components/FormNewGameCard.svelte';
</script>

<div>
	<PageRow>
		<FormNewGameCard />
	</PageRow>
</div>

<style lang='scss'>
  div {
    max-width: 400px;
    width: 100%;
    margin: auto;
  }
</style>