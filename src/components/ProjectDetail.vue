<template>
  <div id="project-detail">
    <div v-if="project != null">
      <h2>Proyecto {{ project.name }}:</h2>

      <ul v-for="(iteration, index) in project.iterations">
        <li >
          <router-link v-bind:to="'/projects/' + project.id + '/iterations/' + index">
            Iteración {{ index }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
var fasten = require('fasten-core');

var data = {
  project: null
};

export default {
  name: 'project-detail',
  mounted() {
    fasten.ProjectService.findById(this.$route.params.id).then((project) => {
      data.project = project;
    });
  },
  data() {
    return data;
  }
};
</script>
