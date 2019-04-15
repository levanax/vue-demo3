import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import lodash from 'lodash'

import { viewComponent as defaultViesCmp } from '@/config/default';
import { viewComponent as mcViewCmp } from '@/config/mc';

Vue.use(Router);

console.log('window.location.href', window.location.href)

let viewMap = lodash.merge(defaultViesCmp, mcViewCmp)


export default new Router({
    mode: "history",
    // base: process.env.BASE_URL,
    base: "/admin",
    routes: [{
        path: "/",
        name: "home",
        component: Home
    }, {
        path: "/about",
        name: "about",
        component: viewMap['about']
    }, {
        path: "/user",
        component: viewMap['user'],
        children: [{
            path: "login",
            component: viewMap['userLogin']
        }]
    }]
})