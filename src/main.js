import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import DistributeIterationMoney from './components/DistributeIterationMoney';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/projects' },
  { path: '/projects', component: ProjectList },
  { path: '/projects/:id', component: ProjectDetail },
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
