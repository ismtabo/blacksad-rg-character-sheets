<script lang="typescript">
  export let name = "";
  export let value = 0;
  export let columns = 5;
  export let maxValue = 30;
  export let cssClass = "";
</script>

<style lang="scss">
  .stamina {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .caption {
      font-size: initial;
    }

    .container {
      margin-top: 5px;
      display: grid;
      grid-template-columns: repeat(var(--columns), auto);
      grid-template-rows: auto;
      grid-gap: 2px;

      .mdi {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 860px) {
    .stamina .mdi {
      font-size: 2em;
    }
  }
</style>

<div class="stamina">
  <div class="caption">{name}</div>
  <div class="container" style="--columns: {columns}">
    {#each { length: maxValue } as _, i}
      <span
        class="mdi {cssClass}{i <= value - 1 ? '' : '-outline'}"
        on:click={() => {
          value = i + 1;
        }} />
    {/each}
  </div>
</div>
