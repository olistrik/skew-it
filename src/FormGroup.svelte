<script>
  export let title = undefined;
  export let hint;
</script>

<style lang="scss">
.group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #4E4E4E;
  border-radius: 5px;
  padding: 0.75rem;
  margin: 0.25rem 0;
}
.title {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-self: start;
  align-items: center;
  margin: 0 0 0.5rem;

  h4 {
    text-align: left;
    margin: 0 1ch 0 0;
  }

  h5 {
    margin: 0;
    color: #5E5E5E;
  }
}
</style>

<div class="group">
  <div class="title">
    {#if title != undefined}
      <h4>{title}</h4>
    {/if}
    {#if hint != undefined}
      <h5>{hint}</h5>
    {/if}
  </div>
  <slot />
</div>
