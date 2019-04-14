import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  base: "/admin",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E6%8A%8A%E7%BB%84%E4%BB%B6%E6%8C%89%E7%BB%84%E5%88%86%E5%9D%97
      component: () =>
        import(/* webpackChunkName: "chunk-about" */ "@/views/About.vue")
    },
    {
      path: "/user",
      component: () =>
        import(/* webpackChunkName: "chunk-user" */ "@/views/user/User.vue"),
      children: [
        {
          path: "login",
          component: () =>
            import(/* webpackChunkName: "chunk-user" */ "@/views/user/Login.vue")
        }
      ]
    }
  ]
});
