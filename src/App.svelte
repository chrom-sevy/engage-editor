<script lang="ts">
  import TopNavbar from "./lib/top_navbar.svelte";
  import Start from "./lib/start.svelte";
  import type {SaveFile} from "../pkg/fe_engage_save_editor.js";
  import RelayItemsShow from "./lib/relay_items_show.svelte";
  import BondMoney from "./lib/bond_money.svelte";
    import RelayItemShow from "./lib/relay_item_show.svelte";
  let save: SaveFile = null;
  enum Page {
    BondMoney,
    RelayItems,
  }
  let page: Page = Page.RelayItems;
</script>

<TopNavbar bind:save/>



{#if save == null}
<div class="grid-custom">
  <div><Start bind:save/></div>
</div>
{:else}
  <br>
  {#if page == Page.RelayItems}
  <button class=" upload-button nav-item text-left" on:click={() => page = Page.BondMoney}>
    <span>Edit Bond and Money<span>
  </button>
  <RelayItemsShow bind:save/>
  {:else if page == Page.BondMoney}
  <button class=" upload-button nav-item text-left" on:click={() => page = Page.RelayItems}>
    <span>Edit Relay Items<span>
  </button>
  <BondMoney bind:save/>
  {/if}
{/if}



<style>
  .grid-custom {
    display: grid;
    place-items: center;
    width: 100%;
    height: 80vh;
  }

  .text-left {
        margin-left: 5vb ;
    }
</style>