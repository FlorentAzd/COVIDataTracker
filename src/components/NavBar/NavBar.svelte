<script>
  import { showMenu } from "../Menu/Menu.svelte";
</script>

<header class="header header-fixed u-unselectable header-animated">
  <i
    class="fa-solid fa-bars"
    on:click={() => {
      showMenu.update((menu) => !menu);
    }}
  />

  <div class="header-brand">
    <i class="text-green-500 fa-solid fa-virus-covid" />
    <p class="text-green-500 font-medium ">COVIDataTracker</p>
  </div>

  <div class="nav-right">
    <i class="fa-regular fa-moon" />
  </div>
</header>

<style>
  .fa-solid.fa-bars {
    /* padding: 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  header {
    height: 64px;
    width: 100%;
    display: grid !important;
    grid-template-columns: 80px 1fr 80px !important;
    align-items: center;
    /* background-color: red; */
    padding: 0px !important;
  }

  @media screen and (max-width: 760px) {
    header {
      display: grid !important;
      grid-template-columns: 60px 1fr 60px !important;
    }
    .header-brand {
      margin-left: 0px !important ;
      column-gap: 5px !important;
      text-transform: uppercase;
      align-items: center;
      display: flex;
      justify-content: center;
    }
    header > i {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header-brand p {
      font-size: 20px !important;
    }
  }

  i:not(.header-brand i) {
    cursor: pointer;
    font-size: 24px;
  }

  .header-brand {
    display: flex;
    align-items: center;
    column-gap: 15px;
    margin-left: 20px;
  }
  .header-brand p {
    font-weight: 700;
    font-size: 30px;
  }
  .header-brand i {
    font-size: 30px;
  }
  .nav-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
