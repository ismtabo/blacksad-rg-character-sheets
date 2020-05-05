<script lang="typescript">
  import Health from "./../components/Health.svelte";
  import Characteristics from "../components/Characteristics.svelte";
  import Bubble from "../components/Bubble.svelte";
  import Characteristic from "../components/Characteristic.svelte";
  import Counter from "../components/Counter.svelte";
  import RuledArea from "../components/RuledArea.svelte";
  import { _ } from "../i18n";
  import { DAOCharacter } from "../lib/character";
  import { HealthType } from "../lib/healthType";

  let character: DAOCharacter = new DAOCharacter({
    name: "Blacksad",
    characteristics: {
      strength: { value: 1 },
      reflex: { value: 1 },
      will: { value: 1 },
      intellect: { value: 1 }
    },
    milestones: "",
    complication: "",
    belongings: "",
    health: HealthType.HEALTHY,
    temporalAspects: "",
    background: ""
  });
</script>

<style lang="scss">
  .concept-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .name {
    font-family: var(--title-font);
    border-bottom: 2px solid black;

    input {
      border: none;
      font-size: inherit;
      overflow: auto;
      background: none;
      border: none;
    }
  }

  .concept-title {
    padding: 1em 0;
  }

  .concept {
    display: grid;
    grid-template-rows: repeat(5, max-content) 1fr;
    grid-template-columns: 33% 1.5fr 1fr;
    grid-template-areas:
      "picture characteristics characteristics"
      "picture milestones milestones"
      "picture complications complications"
      "belongings combatPoints moral"
      "belongings temporalAspects health"
      "background background background";
    width: 100%;
    height: 100%;
    justify-items: stretch;
    align-items: stretch;
    justify-content: stretch;
    grid-gap: 0.5em;
  }

  .items {
    width: calc(100% - 1em);
    height: 100%;
    display: block;
  }

  .img {
    grid-area: picture;
    border: solid;
  }
  .characteristics {
    grid-area: characteristics;
  }
  .milestones {
    grid-area: milestones;
  }
  .complications {
    grid-area: complications;
  }
  .belongings {
    grid-area: belongings;
  }
  .combat-points {
    grid-area: combatPoints;
  }
  .moral {
    grid-area: moral;
  }
  .temporal-aspects {
    grid-area: temporalAspects;
  }
  .health {
    grid-area: health;
  }
  .background {
    grid-area: background;
  }

  .characteristics {
    width: 100%;
  }

  .belongings {
    width: 100%;
  }

  .combat-points > .container {
    padding-top: 0.5em;
    display: flex;
    justify-content: space-between;
    font-size: x-small;
  }

  .combat-points > .container > .stats {
    display: grid;
    grid-template-columns: repeat(4, 7em);
    grid-gap: 5px;
    margin-right: 10px;
  }

  .moral > .container {
    padding-top: 0.5em;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1em;
  }

  .awareness {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
  }

  .moral > .container > div:last-child {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
  }

  .overcoming,
  .instinct {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .overcoming > div:last-child {
    margin-top: 5px;
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(5, 1fr);
    grid-gap: 2px;
  }

  .instinct > div:last-child {
    margin-top: 5px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
  }

  @media (max-width: 1024px) {
    .concept {
      grid-template-rows: repeat(5, max-content) 1fr;
      grid-template-columns: max-content 1fr 1fr;
      grid-template-areas:
        "picture characteristics characteristics"
        "picture milestones milestones"
        "picture complications complications"
        "belongings belongings belongings"
        "combatPoints moral health"
        "temporalAspects temporalAspects temporalAspects"
        "background background background";
    }
  }
  @media (max-width: 860px) {
    .concept {
      grid-template-rows: repeat(5, max-content) 1fr;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "picture characteristics"
        "picture milestones"
        "picture complications"
        "belongings belongings"
        "combatPoints combatPoints"
        "moral health"
        "temporalAspects temporalAspects"
        "background background";
    }

    :global(.combat-points .container .stamina .container) {
      --columns: 15 !important;
    }

    :global(.stamina .container .mdi) {
      font-size: 1.5em !important;
    }
  }

  @media (max-width: 680px) {
    .concept {
      display: flex;
      flex-direction: column;
    }

    .moral .container .stat + div {
      flex-direction: row;
      justify-content: space-evenly;
    }

    :global(.moral .container .stat+div .stamina:first-child .container) {
      --columns: 10 !important;
    }

    :global(.moral .stamina .container .mdi) {
      font-size: 1.5em !important;
    }

    :global(.health .radio-group .radio-button .suffix) {
      flex-grow: unset !important;
      padding-left: 1em !important;
      text-align: start !important;
    }
  }

  @media (max-width: 420px) {
    :global(.characteristics .characteristic) {
      grid-template-columns: 5em auto !important;
      grid-template-areas: "caption dices" "features features";
    }

    :global(.characteristics .characteristic .dices) {
      width: 8em;
    }

    :global(.characteristics .characteristic .features) {
      grid-area: features;
    }

    .combat-points .container {
      flex-direction: column;
    }

    :global(.combat-points .stamina .container .mdi) {
      font-size: 2em !important;
    }

    :global(.moral .container .stat+div .stamina:first-child .container) {
      --columns: 5 !important;
    }
  }
</style>

<div class="concept-container">
  <div class="name">
    <h2>
      {$_('app.name')}:
      <input type="text" bind:value={character.name} />
    </h2>
  </div>
  <h3 class="concept-title">{$_('app.concept')}:</h3>
  <div class="concept">
    <div class="img" />
    <div class="characteristics">
      <Characteristics bind:characteristics={character.characteristics} />
    </div>
    <div class="milestones">
      <div class="label">{$_('app.milestones')}</div>
      <hr />
      <RuledArea rows="6" value={character.milestones} />
    </div>
    <div class="complications">
      <div class="label">{$_('app.complication')}</div>
      <hr />
      <RuledArea rows="4" value={character.complication} />
    </div>
    <div class="belongings">
      <div class="label">{$_('app.belongings')}</div>
      <hr />
      <RuledArea rows="8" bind:value={character.belongings} />
    </div>
    <div class="combat-points">
      <div class="label">{$_('app.combat-points.label')}</div>
      <hr />
      <div class="container">
        <div class="stats">
          <Bubble
            name={$_('app.combat-points.initiative')}
            readonly
            value={character.initiative} />
          <Bubble
            name={$_('app.combat-points.defense')}
            readonly
            value={character.defense} />
          <Bubble
            name={$_('app.combat-points.protection')}
            bind:value={character.protection} />
          <Bubble
            name={$_('app.combat-points.endurance')}
            value={character.endurance} />
        </div>
        <Counter
          name={$_('app.combat-points.stamina')}
          bind:value={character.stamina}
          maxValue="30"
          columns="10"
          cssClass="mdi-checkbox-blank" />
      </div>
    </div>
    <div class="moral">
      <div class="label">{$_('app.moral.label')}</div>
      <hr />
      <div class="container">
        <Bubble
          name={$_('app.moral.conscience')}
          bind:value={character.conscience} />
        <div>
          <Counter
            name={$_('app.moral.overcoming')}
            bind:value={character.overcoming}
            maxValue="10"
            columns="5"
            cssClass="mdi-circle" />
          <Counter
            name={$_('app.moral.instinct')}
            bind:value={character.instinct}
            maxValue="5"
            cssClass="mdi-circle" />
        </div>
      </div>
    </div>
    <div class="temporal-aspects">
      <div class="label">{$_('app.temporal-aspects')}</div>
      <hr />
      <RuledArea rows="3" bind:value={character.temporalAspects} />
    </div>
    <div class="health">
      <Health bind:health={character.health} />
    </div>
    <div class="background">
      <div class="label">{$_('app.background')}</div>
      <hr />
      <RuledArea rows="8" class="notes" bind:value={character.background} />
    </div>
  </div>
</div>
