import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/texts',
    name: 'Saved',
    component: () => import('../pages/Saved'),
  },
  {
    path: '/edit/:text',
    name: 'Edit',
    component: () => import('../pages/Edit'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
