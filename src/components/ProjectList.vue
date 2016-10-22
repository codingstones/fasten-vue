<template>
  <div id="project-list">
    <h2>Proyectos:</h2>
    <ul v-for="project in projects">
      <li>
        <router-link v-bind:to="'/projects/' +  project.id">{{ project.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
var fasten = require('fasten-core');

var data = {
  projects: null,
};

export default {
  name: 'project-list',
  mounted() {
    fasten.ProjectService.allProjects().then((projects) => {
      data.projects = projects;
    });
  },
  data() {
    return data;
  }
};
</script>
