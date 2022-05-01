<script>
  export let label;
  export let disabled = false;

  export let value  = undefined;
  const onInput = e => {value = e.target.value};
</script>

<style lang="scss">
.element {
  display: flex;
  margin: 0.5rem 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  input {
    border: 2px solid #5E5E5E;
    background-color: #0E0E0E;
    color: #EEEEEE;
    margin: 0;
  }
  h4 {
    margin: 0 1ch 0;
  }
}

.title {
  flex-grow: 1;
}
</style>

<div class="element">
  <h4 class="title">
    {label}
  </h4>
  <input type="number" min=0 {disabled} {value} on:input={onInput} />
</div>
