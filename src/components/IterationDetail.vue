<template>
  <div id="iteration-detail">
    <h2>Iteración {{ iteration.number }}:</h2>

    <dl>
      <dt>Total:</dt>
      <dd>{{ iteration.total }}</dd>

      <dt>Facturado:</dt>
      <dd>{{ iteration.invoiced }}</dd>

      <dt>Aportado al común:</dt>
      <dd>{{ iteration.for_common }}</dd>

      <dt>Total a distribuir:</dt>
      <dd>{{ iteration.for_distribution }}</dd>
    </dl>

    <h3>Personas</h3>
    <distribute-iteration-money></distribute-iteration-money>
  </div>
</template>

<script>
import DistributeIterationMoney from './DistributeIterationMoney';

export default {
  name: 'iteration-detail',
  components: {
    'distribute-iteration-money': DistributeIterationMoney,
  },
  data() {
    return {
      iteration: {
        number: this.$route.params.number,
        total: 7200,
        invoiced: 5760,
        for_common: 200,
        for_distribution: 5560
      },
    }
  }
};
</script>
