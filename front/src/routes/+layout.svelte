<script>
    import "@codeunic/svelte-ui/styles.scss";
    import {io} from "$lib/functions/webSocketConnection";
    import {onMount} from "svelte";

    onMount(() => {
        io.on('connect', (message) => {
            console.log("Connect", message)
        });

        io.on('disconnect', (message) => {
            console.log("Disconnect", message)
        });
    });
</script>
<slot></slot>