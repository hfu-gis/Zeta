import Vue from 'vue'
import VueRouter from 'vue-router'
import Order from '../views/Order'
import Overview from '../views/Overview'
import App from '../App'
import Login from "../views/Login";
import Kalender from '../views/Kalender'
import Blog from '../views/Blog'
import Info from '../views/Info'


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
            path: '/login',
            name: 'Login',
            component: Login
        },

        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/Kalender',
            name: 'Kalender',
            component: Kalender
        },
        {
            path: '/Blog',
            name: 'Blog',
            component: Blog
        },

        {
            path: '/Info',
            name: 'Info',
            component: Info
        },
    ]
})
