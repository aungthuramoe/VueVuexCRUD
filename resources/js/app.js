/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vuex from 'vuex'
import store from './store/index';
import Vuelidate from 'vuelidate'


require('./bootstrap');
window.Vue = require('vue');


Vue.component('product-component', require('./components/ProductComponent.vue').default);
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.use(Vuex);
Vue.use(Vuelidate)


const app = new Vue({
    el: '#app',
    store,
});

