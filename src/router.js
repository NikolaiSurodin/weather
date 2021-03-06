import Vue from "vue"
import VueRouter from "vue-router"
import weatherWidget from "@/view/WeatherWidget"

Vue.use( VueRouter )

const router = new VueRouter( {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: weatherWidget
        }
    ]
} )
export default router