<script context="module">
  import { writable } from "svelte/store";

  export let showMenu = writable(false);
</script>

<!-- <article> -->
<div class="{$showMenu ? 'menu' : 'menu-hidden'} all">
  <!--  -->
</div>

<!-- </article> -->
<style>
  .all {
    transition: all ease 1s;
    position: absolute;
    height: 100vh;
    width: 280px;
    background-color: #f5f5f5;
    z-index: 10;
  }
  .menu-hidden {
    left: -280px;
  }

  .menu {
    left: 0;
  }
</style>
