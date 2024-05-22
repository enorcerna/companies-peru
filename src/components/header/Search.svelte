<script lang="ts">
  import {goto} from "$app/navigation";
  import Icon from "@iconify/svelte";
  import {Button} from "../ui/button";
  import Input from "../ui/input";

  let text = "";
  const handleClick = () => {
    if (text.length >= 3) {
      setTimeout(() => {
        goto(`?q=${text}`);
      }, 300);
    }
  };
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      setTimeout(() => {
        goto(`?q=${text}`);
      }, 300);
    }
  };
</script>

<aside class="flex gap-1">
  <Input
    bind:value={text}
    on:keydown={handleKey}
  />
  <Button
    size="icon"
    variant="outline"
    on:click={handleClick}
  >
    <Icon icon="solar:magnifer-linear" />
  </Button>
</aside>
