import Vue from "vue"
import Vuex from "vuex"

import weatherModule from "@/store/weatherModule"

Vue.use( Vuex )

export const store = new Vuex.Store( {
    modules: {
        weatherModule
    }
} )