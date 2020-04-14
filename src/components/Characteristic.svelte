<script lang="typescript">
  import { Charateristic } from "../lib/Characteristic";

  export let name: string;
  export let characteristic: Charateristic;
  const attributesClasses = [
    "dice-one",
    "dice-two",
    "dice-three",
    "dice-four",
    "dice-five",
    "dice-six"
  ];
</script>

<style>
  span:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .las {
    margin-left: -3.5px;
    margin-right: -3.5px;
  }

  .input {
    overflow: auto;
    background: none;
    border: none;
    border-bottom: solid #ccc 1px;
    margin-left: 1em;
  }

  input {
    margin-left: 1em;
    border: unset;
  }
</style>

<div class="characteristic">
  <span class="item caption">{name}</span>
  <span class="item">
    {#each attributesClasses as attribute, index}
      <!-- class="fa fa-{characteristic <= index ? 'white' : 'black'} {attribute}" -->
      <i
        class="{characteristic <= index ? 'las la-lg la-' : 'fas fa-'}{attribute}"
        on:click={() => {
          characteristic.value = index + 1;
        }} />
    {/each}
  </span>
  <span class="input">
    <input class="item" value={attributes.join(',')} />
  </span>
</div>
