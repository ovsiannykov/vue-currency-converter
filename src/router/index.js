import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Converter from '../components/Converter.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/converter',
    name: 'Converter',
    component: Converter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
