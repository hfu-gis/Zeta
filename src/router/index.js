import Vue from 'vue'
import VueRouter from 'vue-router'

import Order from '../views/Order'
import Overview from '../views/Overview'
import App from '../App'
import LogIn from "../views/LogIn";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Root',
            component: App
        },
        {
            path: '/overview',
            name: 'Overview',
            component: Overview
        },

        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/LogIn',
            name: 'LogIn',
            component: Login
        },
    ]
})
