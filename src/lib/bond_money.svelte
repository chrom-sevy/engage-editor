<script lang="ts">
    import type { SaveFile } from "../../pkg/fe_engage_save_editor";
    import Item from "./item.svelte";
    export let save: SaveFile;
    const found_name = get();
    function get(): boolean {

        try {
            save.get_bond_fragments();
            save.get_money();
            return true;
        } catch (e) {
            console.log(e)
            alert("sommie name probably was not correct");
            return false;
        }

    }
</script>

{#if found_name}

<div class="text-left">
    <p class="text-2xl text-blue-700 font-semibold">Bond and Money
    </p>
    <br>
    <Item name="Money" bind:save
        value_getter={(s) => s.get_money()}
        value_setter={(s, value) => s.set_money(value)}
    />

    <Item name="Bond" bind:save
    value_getter={(s) => s.get_bond_fragments()}
    value_setter={(s, value) => s.set_bond_fragments(value)}
/>

</div>
{/if}
<style> 
    /* add column space left */
    .text-left {
        margin-left: 5vb ;
    }
</style>