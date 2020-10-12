import Vue from 'vue'
import Vuex from 'vuex'
import ProductModule from '../store/modules/product'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        ProductModule,
    },
    plugins: [createPersistedState()],
    strict: true,
})

export default store;