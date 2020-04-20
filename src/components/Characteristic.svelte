<script lang="typescript">
  import { DAOFeature, DAOCharacteristic } from "../lib/Characteristic";

  export let name: string;
  export let characteristic: DAOCharacteristic;
  const attributesClasses = [
    "dice-one",
    "dice-two",
    "dice-three",
    "dice-four",
    "dice-five",
    "dice-six"
  ];
  let temporalFeatureLabel = "";
  let pointsLeft: number;
  $: pointsLeft =
    characteristic.value -
    characteristic.features.reduce(
      (acc: number, feat: DAOFeature) => acc + feat.modifier,
      0
    );

  function addFeature(event) {
    characteristic = characteristic.addFeature({
      label: temporalFeatureLabel,
      modifier: 1
    });
    temporalFeatureLabel = "";
  }
</script>

<style lang="scss">
  .characteristic {
    display: grid;
    grid-template-columns: 5em 8em auto;
    align-items: flex-start;
  }

  .characteristic > .item:first-child {
    font-size: 1.25em;
  }
  .dices {
    display: flex;
    justify-content: space-between;
    align-content: center;
    .mdi {
      font-size: 1.2em;
    }
  }

  .input {
    overflow: auto;
    background: none;
    margin-left: 1em;

    ul {
      list-style: none;
      margin: 0px;
      padding: 0px;

      input,
      li {
        border: none;
        border-bottom: solid #ccc 1px;
      }

      input {
        margin-left: unset;
        border: unset;
      }
    }
  }
</style>

<div class="characteristic">
  <span class="item caption">{name}</span>
  <span class="item dices">
    {#each attributesClasses as attribute, index}
      <!-- class="fa fa-{characteristic <= index ? 'white' : 'black'} {attribute}" -->
      <i
        class="mdi mdi-dice-{index + 1}{characteristic.value <= index ? '-outline' : ''}"
        on:click={() => {
          characteristic.value = index + 1;
        }} />
    {/each}
  </span>
  <span class="input">
    <ul>
      {#each characteristic.features as feat, index}
        <li>"{feat.label} {feat.modifier}"</li>
      {/each}
      {#if pointsLeft > 0}
        <li>
          <form on:submit|preventDefault={addFeature}>
            <input class="item" bind:value={temporalFeatureLabel} />
          </form>
        </li>
      {/if}
    </ul>
  </span>
</div>
