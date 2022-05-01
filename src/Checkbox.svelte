<script>
  export let label;
  export let checked;
</script>

<style lang="scss">
.element {
  display: flex;
  margin: 0.5rem 0;
  flex-direction: row;
  align-items: center;
  input {
    border: 2px solid #5E5E5E;
    background-color: #0E0E0E;
    color: #EEEEEE;
    margin: 0;
  }
  h4 {
    margin: 0 0 0 0.5rem;
  }
}
</style>

<div class="element">
  <input class="checkbox" type="checkbox" />
  <h4>{label}</h4>
</div>

