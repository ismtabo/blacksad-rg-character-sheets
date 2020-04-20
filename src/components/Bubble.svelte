<script lang="typescript">
  export let name: string = "";
  export let value: string = "100";
  export let readonly: boolean = false;
</script>

<style lang="scss">
  .stat {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .caption {
      font-size: initial;
    }

    .triangle-border {
      flex-grow: 1;
      width: 7ex;
      height: 5ex;
      max-height: 5ex;
      position: relative;
      margin: 0 0 3em;
      border: 5px solid black;
      color: #333;
      background: var(--color);
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      font-size: initial;
      display: flex;
      justify-content: center;
      align-items: center;

      &::after {
        content: "";
        position: absolute;
        bottom: -12px;
        right: 10px;
        border-width: 13px 13px 0;
        border-style: solid;
        border-color: var(--color) transparent;
        display: block;
        width: 0;
      }

      &::before {
        content: "";
        position: absolute;
        bottom: -19px;
        right: 3px;
        border-width: 19px 19px 0;
        border-style: solid;
        border-color: black transparent;
        display: block;
        width: 0;
      }

      input {
        margin-top: 0.2em;
        font-size: 1.25em;
        border: none;
        text-align: center;
        width: 100%;
        background: transparent;
      }
    }
  }
</style>

<div class="stat" style="--color: {readonly ? 'lightgray' : 'white'}">
  <div class="caption">{name}</div>
  <div class="triangle-border">
    <input type="text" {readonly} bind:value />
  </div>
</div>
