<script>
	import { Container } from '@codeunic/svelte-ui';
</script>

<Container>
	<div class='gameOnHold'>
		<slot></slot>
	</div>
</Container>

<style lang='scss'>
  .gameOnHold {
    padding-top: 40px;
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 40px;
  }
</style>