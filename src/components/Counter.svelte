<script lang="typescript">
  export let name: string = "";
  export let value: number = 0;
  export let columns: number = 5;
  export let maxValue: number = 30;
  export let cssClass: string = "fa-square";
</script>

<style>
  .container {
    display: grid;
  }
</style>

<div class="stamina">
  <div class="caption">{name}</div>
  <div
    class="container"
    style="grid-template-columns: repeat({columns}, auto);">
    {#each { length: maxValue } as _, i}
      <i
        class="{i <= value - 1 ? 'fas' : 'far'}
        {cssClass}"
        on:click={() => {
          value = i;
        }} />
    {/each}
  </div>
</div>
