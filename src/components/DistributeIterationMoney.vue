<template>
  <div id="distribute-iteration-money">
    <h2>Distribuye el dinero para la iteración {{ iteration }}</h2>

    <p v-if="error"> {{ error }} </p>

    <form v-on:submit.prevent="setRates">
      <label for="rate-jesus">Jesús</label>
      <input id="rate-jesus" type="number" v-model.number="rates.jesus">
      <br/>

      <label for="rate-dani">Dani</label>
      <input id="rate-dani" type="number" v-model.number="rates.dani">
      <br/>

      <label for="rate-javi">Javi</label>
      <input id="rate-javi" type="number" v-model.number="rates.javi">
      <br/>

      <label for="rate-gualis">Gualis</label>
      <input id="rate-gualis" type="number" v-model.number="rates.gualis">
      <br/>

      <label for="rate-nestor">Nestor</label>
      <input id="rate-nestor" type="number" v-model.number="rates.nestor">
      <br/>

      <button type="submit" value="Submit">Repartir</button>
    </form>
  </div>
</template>

<script>
var fasten = require('fasten-core');
var distributionService = new fasten.DistributionService(new fasten.HttpClient());

export default {
  name: 'distribute-iteration-money',
  data() {
    return {
      error: null,
      iteration: 15,
      rates: {
        jesus: 20,
        gualis: 20,
        dani: 20,
        nestor: 20,
        javi: 20
      }
    };
  },
  methods: {
    setRates: function()  {
      distributionService.setRates(15, [
        {who: 'nestor', rate: this.rates.nestor},
        {who: 'dani', rate: this.rates.dani},
        {who: 'gualis', rate: this.rates.gualis},
        {who: 'javi', rate: this.rates.javi},
        {who: 'jesus', rate: this.rates.jesus}
      ]).then((result) => {
        this.error = null;
        console.log(result);
      }).catch((err) => {
        this.error = err;
      });
    }
  }
};
</script>
