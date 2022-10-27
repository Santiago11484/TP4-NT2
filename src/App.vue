<!--<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>-->

<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Formulario Vue CLI</h1>
      <br>
      <Navbar />      
      <Formulariotp4 />
      <HttpClient />
      <router-view></router-view> 
      <!--<HelloWorld />
      <Formulario />-->     
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    //HelloWorld,
    //Formulario,    
    //Formulariotp4,
    //HttpClient    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
