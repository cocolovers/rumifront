<script lang='ts'>
	export let image: string = '';
</script>
<div style:background-image='url({image})' class:image>
	<slot></slot>
</div>

<style lang='scss'>
  div {
    height: calc(100vh - var(--ui-navbar_height));
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image {
    background-size: cover;
  }
</style>