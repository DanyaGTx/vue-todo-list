import { createRouter, createWebHistory } from "vue-router";
import AppVue from "../App.vue";
import BoardComponent from '../views/BoardComponent.vue'
import DashBoard from '../views/DashBoard.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/board',
      name: 'board',
      alias: '/',
      component: BoardComponent
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: BoardComponent
    },
    {
      path: '/settings',
      name: 'settings',
      component: BoardComponent
    },
  ],
});

export default router;