<template>
  <div class="distribute">
    <h1>{{ msg }}</h1>
    <h2>{{ other_msg }}</h2>
    <h1 v-if="iteration">Distribución para la iteración: {{ iteration.id }}</h1>
  </div>
</template>

<script>
var fasten = require('fasten-core');
var distributionService = new fasten.DistributionService(new fasten.HttpClient());

var data = {
  msg: 'Foolano & Foockencio',
  other_msg: 'Stuff & Grog',
  iteration: null
};

export default {
  name: 'distribute',
  mounted() {
    distributionService.setRates(26, [{who: 'nestor', rate: 20}, {who: 'dani', rate: 10},  {who: 'gualis', rate: 50}, {who: 'javi', rate: 20}]).then((result) => {
      data.iteration = result;
    });
  },
  data () {
    return data;
  }
};
</script>
