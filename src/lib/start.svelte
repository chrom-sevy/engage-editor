<script lang="ts">
    import '../App.svelte'
    import FileDropzone from 'svelte-file-dropzone'
    import {SaveFile} from "../../pkg/fe_engage_save_editor.js";
    export let save: SaveFile;
    let sommie = "Sommie"
    async function handleDrop(event) {
      let file = event.detail.acceptedFiles[0];
      console.log(file);
      let data = new Uint8Array(await file.arrayBuffer());
      save = SaveFile.from_array(file.name, data, sommie);
    }
    async function set_sommie_name(event) {
      if (event.target.value == "Sommie") {
        sommie = "Sommie";
      } else {
        sommie = event.target.value;
      }
      sommie = event.target.value;
    }
  </script>

  <p class="text-center snap-center text-5xl text-blue-700 font-bold">FEESE</p>
  
  <p class="text-center text-2xl text-blue-400 font-semibold">A temporary solution to Save Editing
  </p>
  
  <br>
  
  <p class="text-center text-1xl text-blue-400">
    if you want to edit 
    <span class="underline text-red-500">money</span>
    and 
    <span class="underline text-red-500">bond fragments</span>
    <br>
    please enter Sommie's name
  </p>

  <br>

<div class="flex justify-center">
  <div class="relative mb-3 xl:w-96" data-te-input-wrapper-init>
    <input
      type="text"
      class="p grid-custom text-right peer block min-h-[auto] w-full bg-blue-50 rounded border-0 py-[0.32rem] px-3 pl-10 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-red-500 dark:placeholder:text-red-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
      id="exampleFormControlInput1"
      value={sommie} 
      on:input={set_sommie_name}
      />
    <label
      for="exampleFormControlInput1"
      class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-blue-500 dark:peer-focus:text-blue-700"
      >Sommie's Name
    </label>
  </div>
</div>
  
  <FileDropzone on:drop={handleDrop} multiple={false}/>
