<style lang="scss">
:global(body) {
  background-color: #1E1E1E;
}

/* Chrome, Safari, Edge, Opera */
:global(input::-webkit-outer-spin-button),
:global(input::-webkit-inner-spin-button) {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
:global(input[type=number]) {
  -moz-appearance: textfield;
}

:global(h1) {
  color: #ff3e00;
  text-transform: uppercase;
  font-size: 1.25em;
  font-weight: 600;
  margin: 0;
}

:global(h2) {
  color: #EEEEEE;
  font-size: 1em;
  font-weight: 500;
  margin: 0;
}

:global(h3) {
  color: #ff3e00;
}

:global(h4) {
  color: #EEEEEE;
}

:global(table) {
  margin: auto;
  border-collapse: collapse;
}

:global(tr) {
  &:first-child {
    border-bottom: 2px solid #ff3e00;
    th {
      padding: 0.25rem 0;
    }
  }
  &:nth-child(2) {
    :global(th), :global(td) {
      padding-top: 0.5rem;
    }
  }
}

:global(th), :global(td) {
  padding: 0.25rem 1rem 0;

}

:global(th) {
  color: #EEEEEE;

  &:first-child {
    border-right: 2px solid #ff3e00;
  }
}

:global(td) {
  color: #EEEEEE;
}

.checkbox {
  margin: 0 0.5rem 0 0;
}

main {
  text-align: center;
}

.header {
  display: flex;
  justify-content: left;
}
.title {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: start;
}

.content {
  margin: auto;
  padding: 0 1rem 1rem;
}
@media(min-width: 680px) {
  .content {
    display: grid;
    max-width: 860px;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
  }
  .step-1 {
    height: 100%;
    grid-row: 1;
    grid-column: 1;
    .skube {
      width: 200px;
    }
  }
  .step-2 {
    grid-row: 1 / 3;
    grid-column: 2;
  }
  .step-3 {
    grid-row: 2;
    grid-column: 1;
  }
}

.step-2 {
  margin: 0;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.skube {
  max-width: 220px;
  margin: 0.5rem;
}

.planes {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}

.download {
  margin-top: 0.5rem;
  padding: 0.33rem;
  color: #EEEEEE;
  border: 1px solid #4E4E4E;
  border-radius: 5px;
  background-color: transparent;
  &:active {
    background-color: #ff3e0060 !important;
  }
  &:hover {
    border-color: #ff3e00;
    text-decoration: none;
  }
}

:global(.group) > :global(.group) {
  margin: 0.5rem 0.5rem;
  width: 95%;
}


:global(.mark) {
  outline: 1px dotted red !important;
}
</style>

<script lang="ts">
import { writable } from "svelte/store";
import FormElement from "./FormElement.svelte";
import FormGroup from "./FormGroup.svelte";
import Checkbox from "./Checkbox.svelte";
import Result from "./Result.svelte";
let xy = true;
let xz = false;
let yz = false;

class Dimensions {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
};

export const dimensions =
  writable<Dimensions>(JSON.parse(localStorage.getItem('dimensions')) ?? new
  Dimensions());

console.log(dimensions);

dimensions.subscribe((value) => localStorage.dimensions = JSON.stringify(value));

let xytan, xztan, yztan;

function calcError(a: number, b: number) {
  if(a !== null && b !== null) {
    return Math.tan(Math.atan(a / b) * 2 - Math.PI / 2);
  }
}

$: xytan = calcError($dimensions.a, $dimensions.b);
$: xztan = calcError($dimensions.c, $dimensions.d);
$: yztan = calcError($dimensions.e, $dimensions.f);


</script>

<main>
  <div class="header">
    <div class="title">
      <h1>Skew it</h1>
      <h2>A simple tool for calculating 3D printer skew</h2>
    </div>
  </div>
  <div class="content">
    <div class="step-1">
      <h3>Step 1: Print</h3>
      <img class="skube" src="skube_540.png"/>
      <div class="print">
        <a class="download" href="skube.stl">Download STL</a>
      </div>
    </div>
    <div class="step-2">
      <h3>Step 2: Measure</h3>
      <div class="form">
        <!--
        <div class="planes">
          <Checkbox label="XY" checked={xy} />
          <Checkbox label="XZ" checked={xz} />
          <Checkbox label="YZ" checked={yz} />
        </div>
        -->
        <!--
        <FormGroup title="Faces" hint="(required)">
          <FormElement label="X" value={x} />
          <FormElement label="Y" value={y} />
          <FormElement label="Z" value={z} />
        </FormGroup>
        <FormGroup title="Corners" hint="(all or none)">
          <FormElement label="A" value={a} />
          <FormElement label="C" value={c} />
          <FormElement label="E" value={e} />
          <FormElement label="G" value={g} />
        </FormGroup>
        -->
        <FormGroup title="Edges" hint="">
          <FormGroup hint="xy">
            <FormElement label="A" bind:value={$dimensions.a} />
            <FormElement label="B" bind:value={$dimensions.b} />
          </FormGroup>
          <FormGroup hint="xz">
            <FormElement label="C" bind:value={$dimensions.c} />
            <FormElement label="D" bind:value={$dimensions.d} />
          </FormGroup>
          <FormGroup hint="yz">
            <FormElement label="E" bind:value={$dimensions.e} />
            <FormElement label="F" bind:value={$dimensions.f} />
          </FormGroup>
        </FormGroup>
      </div>
    </div>
    <div class="step-3">
      <h3>Step 3: Results</h3>
      <table>
        <tr>
          <th></th>
          <th>Tangent</th>
        </tr>
        <Result plane="XY" tangent={xytan}></Result>
        <Result plane="XZ" tangent={xztan}></Result>
        <Result plane="YZ" tangent={yztan}></Result>
      </table>
    </div>
  </div>
</main>

