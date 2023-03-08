<script lang="ts">
    import type { SaveFile } from "../../pkg/fe_engage_save_editor";
    import Item from "./item.svelte";
    export let save: SaveFile;
    const found_name = get(); // this ain't even called
    function setter1(s: SaveFile, v: number) {
        s.set_money(v);
    }
    function getter1(s: SaveFile) {
        return s.get_money();
    }
    function setter2(s: SaveFile, v: number) {
        s.set_bond_fragments(v);
    };
    function getter2(s: SaveFile) {
        return s.get_bond_fragments();
    }
    function get(): boolean {

        try {
            getter1(save);
            getter2(save);
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
        value_getter={getter1}
        value_setter={setter1}
    />

    <Item name="bond" bind:save
    value_getter={getter2}
    value_setter={setter2}
/>

</div>
{/if}
<style> 
    /* add column space left */
    .text-left {
        margin-left: 5vb ;
    }
</style>