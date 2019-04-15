export let viewComponent = {
    'about': () => import ( /* webpackChunkName: "chunk-about" */ "@/views/About.vue"),
    'user': () =>  import ( /* webpackChunkName: "chunk-user" */ "@/views/user/User.vue"),
    'userLogin': () => import ( /* webpackChunkName: "chunk-user" */ "@/views/user/Login.vue")
}