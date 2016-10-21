<template>
  <div id="app">
    <img src="./assets/codingstones.jpg">

    <h1>Coding Stones Money Distribution</h1>

    <p>
    <router-link to="/distribute">Distribuye el dinero</router-link>
    </p>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
