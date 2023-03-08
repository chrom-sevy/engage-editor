<script lang="ts">
    import type { SaveFile } from "../../pkg/fe_engage_save_editor";
    import type { RelayItem } from "./relay_item_enum";

    export let name: String;
    export let id: RelayItem;
    export let save: SaveFile;
    let value: number = save.get_simple_u32(id);

    function set_value(event) {
        let b = parseInt(event.target.value);
        event.target.value = value;
        if (b > 4294967295) {
            b = 4294967295;
            event.target.value = b;
        }
        if (b >= 0) {
            value = b;
            save.set_simple_u32(id, value)
            console.log("saving " + save.get_simple_u32(id))
        }
    }
    function load_input(event) {
        event.target.value = save.get_simple_u32(id);
        value = event.target.value;
        console.log(value);
    }
</script>

<div class="flex">
    <div class="relative mb-3 xl:w-96" data-te-input-wrapper-init>
      <input
        type="number"
        class="text-right peer block min-h-[auto] w-30 bg-blue-50 rounded border-0 py-[0.32rem] px-3 pl-10 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-red-500 dark:placeholder:text-red-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlInput1"
        value={value} 
        on:input={set_value}
        />
      <label
        for="exampleFormControlInput1"
        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-blue-500 dark:peer-focus:text-blue-700"
        >{name}
      </label>
    </div>
  </div>
  

<style>

</style>