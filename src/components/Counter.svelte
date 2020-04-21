<script lang="typescript">
  export let name: string = "";
  export let value: number = 0;
  export let columns: number = 5;
  export let maxValue: number = 30;
  export let cssClass: string = "";
</script>

<style lang="scss">
  .stamina {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    div:first-child {
      font-size: initial;
    }

    div:last-child {
      margin-top: 5px;
      display: grid;
      grid-template: repeat(3, 1fr) / repeat(10, 1fr);
      grid-gap: 2px;
    }

    .container {
      display: grid;
    }
  }

  @media (max-width: 860px) {
    .stamina > div:last-child > i {
      font-size: 2em;
    }

    @media (max-width: 760px) {
      .stamina > div:last-child > i {
        font-size: 1em;
      }

      @media (max-width: 480px) {
        .stamina > div:last-child {
          display: grid;
        }
      }
    }
  }
</style>

<div class="stamina">
  <div class="caption">{name}</div>
  <div
    class="container"
    style="grid-template-columns: repeat({columns}, auto); grid-template-rows:
    auto;">
    {#each { length: maxValue } as _, i}
      <i
        class="mdi {cssClass}{i <= value - 1 ? '' : '-outline'}"
        on:click={() => {
          value = i + 1;
        }} />
    {/each}
  </div>
</div>
