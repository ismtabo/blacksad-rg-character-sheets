<script lang="typescript">
  import { Character } from "./lib/Character";
  import { Charateristic as DTOCharacteristic } from "./lib/Characteristic";
  import { HealthType } from "./lib/HealthType";
  import Characteristic from "./components/Characteristic.svelte";
  import Bubble from "./components/Bubble.svelte";
  import Counter from "./components/Counter.svelte";

  let character: Character = new Character({
    name: "Blacksad",
    strength: new DTOCharacteristic(1),
    reflex: new DTOCharacteristic(1),
    will: new DTOCharacteristic(1),
    intellect: new DTOCharacteristic(1),
    milestones: "",
    complication: "",
    belongings: "",
    health: HealthType.HEALTHY,
    temporalAspects: "",
    background: ""
  });
  console.log({ character });
</script>

<style lang="scss" global>
  @import "./style/global.scss";

  .title,
  .caption,
  .label,
  label {
    font-family: blacksad;
  }

  input,
  textarea {
    font-family: "Courier New", Courier, monospace;
  }

  .concept-title {
    font-family: comic-sans;
  }

  .title {
    text-align: end;
  }

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 2.5em;
  }

  textarea {
    resize: none;
    overflow: auto;
  }

  input {
    overflow: auto;
    background: none;
    border: none;
    border-bottom: solid #ccc 1px;
  }

  .label {
    text-align: end;
    font-weight: bold;
    font-size: 1.5em;
  }

  .name {
    margin-bottom: -10px;
  }

  .name > input {
    border: none;
    font-size: inherit;
  }

  .concept {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }

  .concept > div:not(:first-child) {
    margin-top: 20px;
  }

  .concept > div:first-child {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    width: 100%;
  }

  .concept > div:first-child > .img {
    border: solid black 1px;
    width: 100%;
    height: 100%;
  }

  .concept > div:first-child > .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .concept > div:first-child > .container > div:not(:first-child),
  .characteristics > .container > div:not(:first-child) {
    margin-top: 10px;
  }

  .concept > div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .concept > div:nth-child(2) > div:last-child {
    margin-left: 10px;
  }

  .concept > div:nth-child(2) > div:nth-child(2) {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: repeat(2, auto);
    grid-gap: 10px;
  }

  .characteristics {
    width: 100%;
  }

  .characteristic {
    display: grid;
    grid-template-columns: 5em 8em auto;
    align-items: center;
  }

  .characteristic > .item:first-child {
    font-size: 1.25em;
  }

  .possessions {
    width: 100%;
  }

  .combat-points > .container {
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

  .combat-points > .container > .stats > .stat {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .combat-points > .container > .stats > .stat > div:first-child {
    font-size: initial;
  }

  .combat-points > .container > .stats > .stat > div:last-child {
    flex-grow: 1;
  }

  .stamina {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .stamina > div:first-child {
    font-size: initial;
  }

  .stamina > div:last-child {
    margin-top: 5px;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(10, 1fr);
    grid-gap: 2px;
  }

  .moral > .container {
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

  .notes {
    width: 100%;
    background-attachment: local;
    background-image: repeating-linear-gradient(
      white,
      white 29px,
      #ccc 30px,
      #ccc 31px,
      white 30px
    );
    line-height: 31px;
    border: none;
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: small;
  }

  .radio-button {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .radio-button > input[type="radio"] {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .radio-button > input[type="radio"] + label:before {
    font-family: FontAwesome;
    content: "\f1db";
    margin-right: 0.5em;
    font-size: 1.2em;
  }

  .radio-button > input[type="radio"]:checked + label:before {
    font-family: FontAwesome;
    content: "\f192";
  }

  .radio-button > .suffix {
    flex-grow: 1;
    text-align: end;
  }

  @media (max-width: 860px) {
    .concept > div:first-child {
      display: flex;
      flex-direction: column;
    }

    .concept > div:first-child > .img {
      border: solid black 1px;
      width: 100%;
      height: 100%;
      min-height: 200px;
    }

    .concept > div:nth-child(2) {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .concept > div:nth-child(2) > div:nth-child(2) {
      margin-top: 20px;
      margin-left: unset;
      display: grid;
      grid-gap: 20px;
      grid-template-areas:
        "combat-points moral health"
        "temporal-aspects temporal-aspects temporal-aspects";
    }

    .temporal-aspects {
      grid-area: temporal-aspects;
    }

    .combat-points {
      grid-area: combat-points;
      width: 100%;
    }

    .combat-points > .container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .combat-points > .container > .stamina > div:last-child > i {
      font-size: 2em;
    }

    .moral {
      grid-area: moral;
      width: 100%;
    }

    .moral > .container {
      display: flex;
      justify-content: space-between;
    }

    .moral > .container > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .health {
      grid-area: health;
      width: 100%;
    }

    .combat-points > .container {
      display: flex;
    }

    @media (max-width: 760px) {
      .concept > div:nth-child(2) > div:nth-child(2) {
        width: 100%;
        margin-left: 0;
        display: grid;
        grid-template-areas:
          "combat-points moral"
          "combat-points health"
          "temporal-aspects temporal-aspects";
      }

      .moral > .container > div:last-child {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1em;
      }

      .instinct {
        margin-left: 10px;
      }

      .health > .radio-group {
        justify-content: flex-end;
      }

      .stamina > div:last-child > i {
        font-size: 1.5em;
      }
    }

    @media (max-width: 480px) {
      .label {
        text-align: start;
      }

      .concept > div:nth-child(2) > div:nth-child(2) {
        width: 100%;
        margin-left: 0;
        display: flex;
        flex-direction: column;
      }

      .combat-points > .container > .stamina > div:last-child {
        display: grid;
      }

      .moral > .container {
        width: 100%;
        justify-content: flex-start;
      }

      .moral > .container > div:last-child {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1em;
      }

      .radio-button > .suffix {
        text-align: initial;
        flex-grow: unset;
        margin-left: 1em;
      }
    }
  }
</style>

<main>
  <section>
    <h2 class="name caption">
      Nombre:
      <input type="text" bind:value={character.name} />
    </h2>
    <hr />
    <h3 class="concept-title">Concepto:</h3>
    <div class="concept">
      <div>
        <div class="img" />
        <div class="container">
          <div class="characteristics">
            <div class="label">CARACTERÍSTICAS</div>
            <hr />
            <div class="container">
              <Characteristic
                name="FORTALEZA"
                bind:characteristic={character.strength} />
              <Characteristic
                name="REFLEJOS"
                bind:characteristic={character.reflex} />
              <Characteristic
                name="VOLUNTAD"
                bind:characteristic={character.will} />
              <Characteristic
                name="INTELECTO"
                bind:characteristic={character.intellect} />
            </div>
            <div class="points-left">
              {#if character.characteristicsPointsLeft > 0}
                <p>
                  Puntos de característica: Gastados: {character.characteristicsPointsSum},
                  Restantes {character.characteristicsPointsLeft}
                </p>
              {/if}
            </div>
          </div>
          <div class="milestones-container">
            <div class="label">HITOS</div>
            <hr />
            <textarea
              class="notes"
              rows="8"
              bind:value={character.milestones} />
          </div>
          <div class="complications-container">
            <div class="label">COMPLICACIÓN</div>
            <hr />
            <textarea
              class="notes"
              rows="2"
              bind:value={character.complication} />
          </div>
        </div>
      </div>
      <div>
        <div class="possessions">
          <div class="label">POSESIONES</div>
          <hr />
          <textarea class="notes" rows="9" bind:value={character.belongings} />
        </div>
        <div>
          <div class="combat-points">
            <div class="label">PUNTUACIONES DE COMBATE</div>
            <hr />
            <div class="container">
              <div class="stats">
                <Bubble
                  name="INICIATIVA"
                  readonly
                  value={character.initiative} />
                <Bubble name="DEFENSA" readonly value={character.defense} />
                <Bubble name="PROTECCIÓN" bind:value={character.protection} />
                <Bubble name="AGUANTE" value={character.endurance} />
              </div>
              <Counter
                name="RESISTENCIA"
                bind:value={character.stamina}
                maxValue="30"
                columns="15"
                cssClass="fa-square" />
            </div>
          </div>
          <div class="moral">
            <div class="label">MORAL</div>
            <hr />
            <div class="container">
              <Bubble name="CONCIENCIA" bind:value={character.conscience} />
              <div>
                <Counter
                  name="SUPERACIÓN"
                  bind:value={character.superation}
                  maxValue="10"
                  columns="5"
                  cssClass="fa-circle" />
                <Counter
                  name="INSTINTO"
                  bind:value={character.instinct}
                  maxValue="5"
                  cssClass="fa-circle" />
              </div>
            </div>
          </div>
          <div class="temporal-aspects">
            <div class="label">ASPECTOS TEMPORALES</div>
            <hr />
            <textarea
              class="notes"
              readonly
              rows="2"
              bind:value={character.temporalAspects} />
          </div>
          <div class="health">
            <div class="label">SALUD</div>
            <hr />
            <div class="radio-group">
              <div class="radio-button">
                <input
                  type="radio"
                  id="health-healthy"
                  name="health"
                  bind:group={character.health}
                  value={HealthType.HEALTHY} />
                <label for="health-healthy">SANO</label>
              </div>
              <div class="radio-button">
                <input
                  type="radio"
                  id="health-bruised"
                  name="health"
                  bind:group={character.health}
                  value={HealthType.BRUISED} />
                <label for="health-bruised">MAGULLADO</label>
              </div>
              <div class="radio-button">
                <input
                  type="radio"
                  id="health-injured"
                  name="health"
                  bind:group={character.health}
                  value={HealthType.INJURED} />
                <label for="health-injured">HERIDO</label>
                <span class="suffix">1 FALLO EXTRA</span>
              </div>
              <div class="radio-button">
                <input
                  type="radio"
                  id="health-badly-injured"
                  name="health"
                  bind:group={character.health}
                  value={HealthType.BADLY_INJURED} />
                <label for="health-badly-injured">MALHERIDO</label>
                <span class="suffix">2 FALLOS EXTRA</span>
              </div>
              <div class="radio-button">
                <input
                  type="radio"
                  id="health-dying"
                  name="health"
                  bind:group={character.health}
                  value={HealthType.DYING} />
                <label for="health-dying">MORIBUNDO</label>
                <span class="suffix">SIN ACTUAR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="label">HISTORIA</div>
        <hr />
        <textarea class="notes" rows="6" bind:value={character.background} />
      </div>
    </div>
  </section>
</main>
