<template>
  <div id="project-list">
    <h2>Proyectos:</h2>
    <ul v-for="project in projects">
      <li>
        <router-link v-bind:to="'/projects/' +  project.slug">{{ project.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
var fasten = require('fasten-core');
var distributionService = new fasten.DistributionService(new fasten.HttpClient());

export default {
  name: 'project-list',
  data() {
    return {
      projects: [
        {slug: 'conecta', name: 'Conecta'},
        {slug: 'roiback', name: 'Roiback'},
        {slug: 'haize', name: 'Haize'},
        {slug: 'dide', name: 'Dide'}
      ],
    }
  }
};
</script>
