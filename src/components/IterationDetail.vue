<template>
  <div id="iteration-detail">
    <h2>Iteración {{ $route.params.number }}:</h2>

    <dl v-if="iteration != null">
      <dt>Total:</dt>
      <dd>{{ iteration.total() }} €</dd>

      <dt>Facturado:</dt>
      <dd>{{ iteration.invoiced() }} €</dd>

      <dt>Aportado al común:</dt>
      <dd>{{ iteration.forCommon() }}€ ({{ iteration.forCommonAsPercentage() }}%)</dd>

      <dt>Total a repartir:</dt>
      <dd><strong>{{ iteration.toDistribute() }} €</strong></dd>
  </div>
</template>

<script>
import DistributeIterationMoney from './DistributeIterationMoney';

var fasten = require('fasten-core');

var data = {
  project: null,
  iteration: null
};

export default {
  name: 'iteration-detail',
  components: {
    'distribute-iteration-money': DistributeIterationMoney,
  },
  mounted() {
    fasten.ProjectService.findById(this.$route.params.id).then((project) => {
      data.project = project;
      data.iteration = project.iterations[this.$route.params.number];
    });
  },
  data() {
    return data;
  }
};
</script>
