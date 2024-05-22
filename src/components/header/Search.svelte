<script context="module">
  export let searchValue = "";
</script>

<script lang="ts">
  import {onMount} from "svelte";
  import Input from "../ui/input";
  let value = "";
  onMount(() => {
    searchValue = value;
  });
</script>

<aside>
  <Input bind:value />
</aside>
