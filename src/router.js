import Vue from 'vue'
import VueRouter from 'vue-router'

//import HelloWorld from './components/HelloWorld.vue'
//import Formulario from './components/Formulario/IndexFormulario.vue'
import Formulariotp4 from './components/Formulariotp4.vue'
import HttpClient from './components/HttpClient.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/formulariotp4', component: Formulariotp4},
        {path: '/httpclient', component: HttpClient}
    ]
})