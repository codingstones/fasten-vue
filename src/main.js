import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import DistributeIterationMoney from './components/DistributeIterationMoney.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/distribute', component: DistributeIterationMoney },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
