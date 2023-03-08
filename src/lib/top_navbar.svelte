<script lang="ts">
  import type { SaveFile } from "../../pkg/fe_engage_save_editor";
  export let save: SaveFile

  function download_save() {
    if (save == null) {
      alert("No save loaded");
      return;
    }

    // download save
    const blob = new Blob([save.get_data()], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.download = save.get_name();
    a.href = url;
    a.click();
  }
</script>
<style>
    .navbar {
      position: sticky;
      top: 0;
      z-index: 999;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: space-between;
      background-image: linear-gradient(to right, #1e3c72, #2a5298, #4f5b93, #1e3c72);
    }
    .navbar:hover {
      box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
    }

    .nav-item:hover {
      color: #fecaca;
    }
  
    .nav-item {
      color: #fef2f2;
    }
  
    .nav-left {
      display: flex;
      align-items: center;
    }
  
    .nav-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
</style>


  
<nav class="navbar">
<div class="nav-left">
    <a class="nav-item p-3 text-red-50" href="/">FEESE</a>
    <button class=" upload-button nav-item" on:click={() => {
      // redirect to /
      window.location.href = "/";
    }}>
        <span>Choose new</span>
    </button>
    <button class=" download-button nav-item" on:click={download_save}>
        <span>Download<span>
    </button>
</div>
<div class="nav-right">
    <span class="p-3 text-red-50">You are now obliged to use <span class=" text-blue-500">Chrom</span><span class=" text-orange-300">!</span><span class=" text-red-500">Sevy</span></span>
    <a class="nav-item p-3 text-red-50" href="/">
         Github 
    </a>
</div>
</nav>