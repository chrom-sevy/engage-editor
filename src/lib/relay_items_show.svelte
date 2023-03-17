<script lang="ts">
    import type { SaveFile } from "../../pkg/fe_engage_save_editor";
    import { RelayItem } from "./relay_item_enum";
    import RelayItemShow from "./relay_item_show.svelte";

    export let save: SaveFile;
    
</script>

<!-- from src\lib\relay_item_enum.ts -->

<div class="text-left">
<p class="text-2xl text-blue-700 font-semibold">Banes
</p>
<br>

<RelayItemShow name="Dragon Bane" id={RelayItem.DragonBane} bind:save/>
<RelayItemShow name="Rider Bane" id={RelayItem.RiderBane} bind:save/>
<RelayItemShow name="Armor Bane" id={RelayItem.ArmorBane} bind:save/>
<RelayItemShow name="Flier Bane" id={RelayItem.FlierBane} bind:save/>
<RelayItemShow name="Corrupted Bane" id={RelayItem.CorruptedBane} bind:save/>

<p class="text-2xl text-blue-700 font-semibold">Crystals
</p>
<br>
<RelayItemShow name="Mt Crystal" id={RelayItem.MtCrystal} bind:save/>
<RelayItemShow name="Crt Crystal" id={RelayItem.CrtCrystal} bind:save/>
<RelayItemShow name="Dex Crystal" id={RelayItem.DexCrystal} bind:save/>
<RelayItemShow name="Spd Crystal" id={RelayItem.SpdCrystal} bind:save/>
<RelayItemShow name="Def Crystal" id={RelayItem.DefCrystal} bind:save/>
<RelayItemShow name="Res Crystal" id={RelayItem.ResCrystal} bind:save/>
<RelayItemShow name="Hit Crystal" id={RelayItem.HitCrystal} bind:save/>
<RelayItemShow name="Avo Crystal" id={RelayItem.AvoCrystal} bind:save/>
<RelayItemShow name="Crit Avoid Crystal" id={RelayItem.CritAvoidCrystal} bind:save/>

<p class="text-2xl text-blue-700 font-semibold">Ingots
</p>
<br>
<RelayItemShow name="Iron Ingot" id={RelayItem.IronIngot} bind:save/>
<RelayItemShow name="Steel Ingot" id={RelayItem.SteelIngot} bind:save/>
<RelayItemShow name="Silver Ingot" id={RelayItem.SilverIngot} bind:save/>

<p class="text-2xl text-blue-700 font-semibold">Seals
</p>
<br>
<RelayItemShow name="Master Seal" id={RelayItem.MasterSeal} bind:save/>
<RelayItemShow name="Second Seal" id={RelayItem.SecondSeal} bind:save/>

</div>
<style> 
    /* add column space left */
    .text-left {
        margin-left: 5vb ;
    }
</style>