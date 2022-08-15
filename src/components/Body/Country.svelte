<script context="module">
  //   let compteur = 0;
</script>

<script>
  // @ts-nocheck

  import { API_KEY } from "../../../api.json";

  import { onMount } from "svelte";
  export let compteur = 0;
  export let country = {
    population: null,
    activeCase: null,
    allCase: null,
    death: null,
    cured: null,
    name: null,
    id: null,
  };

  const getFlag = (country) => {
    const url = `https://country-flags.p.rapidapi.com/png/${country}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "country-flags.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => res.blob())
      .then((imageBlob) => {
        // console.log(Base64.);
        const imageObjectURL = URL.createObjectURL(imageBlob);
        document.querySelector("#img" + compteur).src = imageObjectURL;
        return imageObjectURL;
      })
      .finally((imageObjectURL) => {
        URL.revokeObjectURL(imageObjectURL);
      });
  };

  onMount(() => {
    getFlag(country.name);
    compteur += 1;
  });
</script>

<div class="card">
  <!--  -->
  <p class="country-title font-bold">{country.name}</p>
  <div class="country-flag">
    <img alt="drapeau" id={"img" + compteur} />
  </div>
  <div class="country-informations">
    <p class="font-bold">
      Population : <span class="font-medium"> {country.population}</span>
    </p>
    <p class="font-bold">
      Nombre de cas total : <span class="font-medium"> {country.allCase}</span>
    </p>
    <p class="font-bold">
      Cas actifs : <span class="font-medium"> {country.activeCase}</span>
    </p>
    <p class="font-bold">
      Nombre de mort : <span class="font-medium"> {country.death}</span>
    </p>
    <p class="font-bold">
      Nombre de gueris : <span class="font-medium"> {country.cured}</span>
    </p>
  </div>
</div>

<style>
  .card {
    /* REMOVE LATER */
    /* margin-left: 50px;
    margin-top: 50px; */
    /* REMOVE LATER */
    height: 400px;
    width: 300px;
  }
  .country-title {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    border-bottom: 1px solid #f5f5f5;
  }
  .country-informations > p {
    display: flex;
    align-items: center;
    padding-left: 15px;
  }
  .country-flag {
    height: 150px;
    width: 100%;
    /* background-color: #f5f5f5; */
  }
  .country-flag img {
    height: 100%;
    width: 100%;
  }
</style>
