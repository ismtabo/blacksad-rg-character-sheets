<script lang="typescript">
  import { DAOCharacter } from "../lib/character";
  import { HealthType } from "../lib/healthType";
  import { _ } from "../i18n";

  export let health: HealthType;
</script>

<style lang="scss">
  .radio-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: small;

    .radio-button {
      width: 100%;
      display: flex;
      align-items: center;

      & > input[type="radio"] {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        
        & + label:before {
          font-family: "Material Design Icons";
          content: "\F0766";
          margin-right: 0.5em;
          font-size: 1.2em;
        }

        &:checked + label:before {
          font-family: "Material Design Icons";
          content: "\F0EC3";
        }
      }

      & > .suffix {
        flex-grow: 1;
        text-align: end;
        font-size: smaller;
        font-family: blacksad;
      }
    }
  }
</style>

<div class="label">{$_('app.health.label')}</div>
<hr />
<div class="radio-group">
  <div class="radio-button">
    <input
      type="radio"
      id="health-healthy"
      name="health"
      bind:group={health}
      value={HealthType.HEALTHY} />
    <label for="health-healthy">{$_('app.health.healthy')}</label>
  </div>
  <div class="radio-button">
    <input
      type="radio"
      id="health-bruised"
      name="health"
      bind:group={health}
      value={HealthType.BRUISED} />
    <label for="health-bruised">{$_('app.health.bruised')}</label>
  </div>
  <div class="radio-button">
    <input
      type="radio"
      id="health-injured"
      name="health"
      bind:group={health}
      value={HealthType.INJURED} />
    <label for="health-injured">{$_('app.health.injured')}</label>
    <span class="suffix">{$_('app.health.suffixes.injured')}</span>
  </div>
  <div class="radio-button">
    <input
      type="radio"
      id="health-badly-injured"
      name="health"
      bind:group={health}
      value={HealthType.BADLY_INJURED} />
    <label for="health-badly-injured">{$_('app.health.badly-injured')}</label>
    <span class="suffix">{$_('app.health.suffixes.badly-injured')}</span>
  </div>
  <div class="radio-button">
    <input
      type="radio"
      id="health-dying"
      name="health"
      bind:group={health}
      value={HealthType.DYING} />
    <label for="health-dying">{$_('app.health.dying')}</label>
    <span class="suffix">{$_('app.health.suffixes.dying')}</span>
  </div>
</div>
