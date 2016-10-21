<template>
  <div id="project-detail">
    <h2>{{ project.name }}:</h2>

    <ul v-for="iteration in project.iterations">
      <li >
        <router-link v-bind:to="'/projects/' + project.slug + '/iterations/' + iteration.number">
          Iteración {{ iteration.number }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
var fasten = require('fasten-core');
var distributionService = new fasten.DistributionService(new fasten.HttpClient());

export default {
  name: 'project-detail',
  data() {
    return {
      project: {
        slug: this.$route.params.id,
        name: 'Conecta',
        iterations: [
          {number: 0},
          {number: 1},
          {number: 2},
          {number: 3}
        ]
      },
    }
  }
};
</script>
