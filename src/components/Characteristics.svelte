<script lang="typescript">
  import {
    DTOCharacteristics,
    DTOCharacteristic
  } from "./../lib/characteristic";
  import Help from "./Help.svelte";
  import Characteristic from "./Characteristic.svelte";
  import { _ } from "../i18n";
  import { setContext } from "svelte";
  import { sprintf } from "./../utils/string";

  export let characteristics: DTOCharacteristics;
  let pointsSpent: number;
  let pointsLeft: number;

  $: pointsSpent = [
    characteristics.strength,
    characteristics.reflex,
    characteristics.will,
    characteristics.intellect
  ].reduce((acc: number, char: DTOCharacteristic) => acc + char.value, 0);

  $: pointsLeft = 12 - pointsSpent;

  let dismissedMessage = false;
  function dismissMessage() {
    dismissedMessage = true;
    setTimeout(() => {
      dismissedMessage = false;
    }, 3000);
  }
</script>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: relative;

    .characteristic {
      display: grid;
      grid-template-columns: 5em 8em auto;
      align-items: flex-start;
      grid-gap: 0.5em;
    }

    .warning {
      --margin: 0.5em;
      align-items: center;
      background-color: transparent;
      border-radius: 1em;
      border: var(--margin) red dashed;
      cursor: pointer;
      display: flex;
      height: calc(100% + var(--margin) * 2);
      justify-content: center;
      margin-left: calc(var(--margin) * -1);
      margin-top: calc(var(--margin) * -1);
      position: absolute;
      width: calc(100% + var(--margin) * 2);

      .message {
        align-items: center;
        background-color: white;
        border-radius: var(--margin);
        box-shadow: 0 0 var(--margin) var(--margin) white;
        color: red;
        display: flex;
        flex-direction: column;
        font-family: initial;
        font-family: var(--input-font);
        font-weight: 800;
        justify-content: center;
        opacity: 0.85;
        text-align: center;
        text-transform: uppercase;
        width: calc(100% - var(--margin) * 2);

        .dismiss {
          font-size: 0.65em;
        }
      }
    }

    & > div:not(:first-child) {
      margin-top: 10px;
    }
  }
</style>

<div class="label">
  {$_('app.characteristics.label')}
  <Help message={$_('app.characteristics.help')} />
</div>
<hr />
<div class="container">
  {#if pointsLeft < 0 && !dismissedMessage}
    <!-- content here -->
    <div class="warning" on:click={() => dismissMessage()}>
      <div class="message">
        {sprintf($_('app.characteristics.warning-points-left'), pointsSpent)}
        <div class="dismiss">({$_('app.warning-dismiss-message')})</div>
      </div>
    </div>
  {/if}
  <div class="characteristic">
    <Characteristic
      name={$_('app.characteristics.strength')}
      bind:characteristic={characteristics.strength} />
  </div>
  <div class="characteristic">
    <Characteristic
      name={$_('app.characteristics.reflex')}
      bind:characteristic={characteristics.reflex} />
  </div>
  <div class="characteristic">
    <Characteristic
      name={$_('app.characteristics.will')}
      bind:characteristic={characteristics.will} />
  </div>
  <div class="characteristic">
    <Characteristic
      name={$_('app.characteristics.intellect')}
      bind:characteristic={characteristics.intellect} />
  </div>
</div>
