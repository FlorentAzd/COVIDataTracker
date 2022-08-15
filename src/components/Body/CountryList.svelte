<script>
  //   import "dotenv/config";
  import { onMount } from "svelte";
  import Country from "./Country.svelte";

  let countryList = [];

  const getCountryData = () => {
    const url =
      "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/africa";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host":
          "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        // A ce niveau on a la liste des pays
        data.forEach((c) => {
          let country = {
            population: null,
            activeCase: null,
            allCase: null,
            death: null,
            cured: null,
            name: null,
            id: null,
          };

          country.population = c.Population;
          country.activeCase = c.ActiveCases;
          country.allCase = c.TotalCases;
          country.cured = c.TotalRecovered;
          country.name = c.Country;
          country.death = c.TotalDeaths;
          country.id = c.rank.toString();

          countryList.push(country);
          countryList = countryList;
        });
      });
  };

  //   onMount(() => {});
  getCountryData();
</script>

<section>
  {#each countryList as c, index (index)}
    <Country country={c} compteur={index} />
  {:else}
    Données en cours de chargement...
  {/each}
</section>

<style>
  section {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    /* Add height later */
  }

  @media screen and (max-width: 800px) {
    section {
      justify-content: center;
    }
  }
</style>
