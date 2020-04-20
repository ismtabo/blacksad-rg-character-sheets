<script lang="typescript">
  export let value: string;
  export let rows: number;
</script>

<style lang="scss">
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
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>

<div class="notes" style="height: calc(31px * {rows})" contenteditable>
  {value}
</div>
