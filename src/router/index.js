import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CatRating from "../views/CatRating";
import RatedCats from "../views/RatedCats";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cat-rating',
    name: 'cat-rating',
    component: CatRating
  },
  {
    path: '/rated-cats',
    name: 'rated-cats',
    component: RatedCats
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
