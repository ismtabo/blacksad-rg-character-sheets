<script lang="typescript">
  export let message: string;
</script>

<style lang="scss">
  .help {
    &[data-title]:hover:after {
      opacity: 0.9;
      visibility: visible;
    }
    &[data-title]:after {
      background: white;
      border-radius: 5px;
      box-shadow: 0px 0px 4px #222;
      color: #222;
      content: attr(data-title);
      display: inline-block;
      font-family: var(--tooltip-font);
      font-size: initial;
      max-width: 100em;
      min-width: 50%;
      overflow: hidden;
      padding: 4px 4px 4px 8px;
      position: absolute;
      right: 0%;
      text-align: start;
      text-transform: initial;
      top: 100%;
      visibility: hidden;
      white-space: normal;
      width: 25em;
      z-index: 1;
    }
    &[data-title] {
      position: relative;
    }
  }
</style>

<span class="help mdi mdi-help-circle-outline" data-title="{message}" />
