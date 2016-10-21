import Vue from 'vue';
import VueRouter from 'vue-router';
import DistributeIterationMoney from './components/DistributeIterationMoney.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/distribute', component: DistributeIterationMoney },
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
