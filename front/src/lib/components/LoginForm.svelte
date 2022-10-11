<script lang="ts">
  import {Button, FormGroup, Input} from "@codeunic/svelte-ui";
  import {createEventDispatcher} from "svelte";
  import {uniqueId} from "../functions/uniqueId";

  const dispatch = createEventDispatcher()

  export let loading = false;

  const onSubmit = (e) => {
    const data = new FormData(e.target);
    const name = data.get("name");
    if (!name) return;
    dispatch("submit", {name, id: uniqueId()})
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <FormGroup label="Nombre del usuario">
    <Input
      name="name"
      autoFocus
      placeholder="Nombre de usuario"
    />
  </FormGroup>
  <Button theme="success" {loading}>Entrar</Button>
</form>