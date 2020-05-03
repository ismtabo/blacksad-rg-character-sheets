<script lang="typescript">
  import Help from "./Help.svelte";
  import { DAOFeature, DAOCharacteristic } from "../lib/characteristic";
  import { FeatureInputError } from "./../lib/errors";
  import { _ } from "../i18n";
  import { sprintf } from "../utils/string";

  export let name: string;
  export let characteristic: DAOCharacteristic;
  let error: FeatureInputError;
  const attributesClasses = [
    "dice-one",
    "dice-two",
    "dice-three",
    "dice-four",
    "dice-five",
    "dice-six"
  ];
  let features: string = characteristic.features
    .map((feat: DAOFeature) => `${feat.label} +${feat.modifier}`)
    .join(", ");

  function validateFeatures(event: Event) {
    error = null;
    const target = event.currentTarget as HTMLInputElement;
    const { value } = target;
    if (/^\w.*?\s\+\d(,\s*\w.*?\s\+\d)*$/.test(value.trim())) {
      const newFeatures = Array.from<RegExpMatchArray>(
        value.matchAll(/(\w.*?)\s\+(\d)/g)
      ).map(match => new DAOFeature({ label: match[1], modifier: +match[2] }));

      characteristic.features = newFeatures;
    }
  }

  $: error =
    characteristic.pointsLeft < 0
      ? FeatureInputError.AVAILABLE_POINTS_EXCEEDED
      : characteristic.features.some(
          ({ modifier }) => !(0 < modifier && modifier <= 3)
        )
      ? FeatureInputError.INVALID_POINT_RANGE
      : features.trim() === "" ||
        /^\w.*?\s\+\d(,\s*\w.*?\s\+\d)*$/.test(features.trim())
      ? null
      : FeatureInputError.INVALID_FEATURES_PATTERN;
</script>

<style lang="scss">
  .caption {
    font-size: 1.25em;
  }
  .dices {
    display: flex;
    justify-content: space-between;
    align-content: center;
    .mdi {
      font-size: 1.2em;
      cursor: pointer;

      &.disabled {
        pointer-events: none;
        cursor: default;
      }
    }
  }

  .features {
    border-bottom: solid #ccc 1px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    input {
      border: none;
      width: 100%;
    }
  }
</style>

<span class="caption">{name}</span>
<span class="dices">
  {#each attributesClasses as attribute, index}
    <span
      class="mdi mdi-dice-{index + 1}{characteristic.value <= index ? '-outline' : ''}"
      class:disabled={index >= 5}
      on:click={() => {
        index < 5 && (characteristic.value = index + 1);
      }} />
  {/each}
</span>
<span class="features">
  <input
    bind:value={features}
    on:input={validateFeatures}
    placeholder={$_('app.characteristics.feature-placeholder')} />
  {#if error === FeatureInputError.AVAILABLE_POINTS_EXCEEDED}
    <span
      class="mdi mdi-alert-outline"
      title={sprintf($_('app.characteristics.feature-warning-available-points-exceeded'), characteristic.value, name)} />
  {:else if error === FeatureInputError.INVALID_POINT_RANGE}
    <span
      class="mdi mdi-alert-outline"
      title={sprintf($_('app.characteristics.feature-warning-invalid-point-range'), characteristic.value, name)} />
  {:else if error === FeatureInputError.INVALID_FEATURES_PATTERN}
    <span
      class="mdi mdi-alert-outline"
      title={sprintf($_('app.characteristics.feature-warning-invalid-features-pattern'), characteristic.value, name)} />
  {/if}
</span>
