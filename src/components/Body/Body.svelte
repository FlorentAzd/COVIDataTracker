<script>
  import CountryList from "./CountryList.svelte";
</script>

<section>
  <div class="search-section">
    <input type="text" placeholder="Rechercher un pays..." />
  </div>
  <CountryList />
</section>

<style>
  section {
    position: relative;
    top: 64px;
    left: 0;
    /* background-color: red; */
    height: calc(100vh - 64px);
    width: 100%;
  }

  .search-section {
    height: 50px;
    width: 100%;
    padding: 10px;
  }
  .search-section input {
    height: 40px;
    /* width: 300px !important ; */
  }
</style>
