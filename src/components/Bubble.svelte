<script lang="typescript">
  export let name: string = "";
  export let value: string = "100";
  export let readonly: boolean = false;
</script>

<style>
  .triangle-border::after {
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

  .triangle-border::before {
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

  .triangle-border {
    width: 7ex;
    height: 5ex;
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
  }

  .triangle-border > input {
    margin-top: 0.2em;
    font-size: 1.25em;
    border: none;
    text-align: center;
  }
</style>

<div class="stat" style="--color: {readonly ? 'lightgray' : 'white'}">
  <div class="caption">{name}</div>
  <div class="triangle-border">
    <input type="text" {readonly} bind:value />
  </div>
</div>
