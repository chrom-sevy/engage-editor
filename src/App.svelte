<script lang="ts">
  import TopNavbar from "./lib/top_navbar.svelte";
  import Start from "./lib/start.svelte";
  import type {SaveFile} from "../pkg/fe_engage_save_editor.js";
  import RelayItemsShow from "./lib/relay_items_show.svelte";
  import BondMoney from "./lib/bond_money.svelte";
  let save: SaveFile = null;
</script>

<TopNavbar bind:save/>



{#if save == null}
<div class="grid-custom">
  <div><Start bind:save/></div>
</div>
{:else}
  <br>
  <BondMoney bind:save/>
  <RelayItemsShow bind:save/>
{/if}



<style>
  .grid-custom {
    display: grid;
    place-items: center;
    width: 100%;
    height: 80vh;
  }
</style>