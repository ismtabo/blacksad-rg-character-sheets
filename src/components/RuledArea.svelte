<script lang="typescript">
  export let value: string;
  export let rows: number;
</script>

<style lang="scss">
  div {
    --line-height: 1.938em;
    width: 100%;
    height: 100%;
    max-height: 100%;
    background-attachment: local;
    background-image: repeating-linear-gradient(
      white,
      white 1.813em,
      #ccc 1.875em,
      #ccc var(--line-height),
      white 1.875em
    );
    line-height: var(--line-height);
    border: none;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>

<div
  style="{`height: calc(var(--line-height) * ${rows})`}; "
  contenteditable>
  {value}
</div>
