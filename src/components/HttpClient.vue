<template>

  <section class="src-components-http-client">
    <div class="jumbotron">
      <h2>Componente HttpClient</h2>
      <hr>
      <hr>
      <br>

      <button class="btn btn-warning my-3" @click="getPostXHRCb()">Pedir XHR Información MockAPI</button>
      <br>

      <table class="table responsive table-dark">
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Numero de Telefono</th>
        </tr>
        <tr v-for="(post,index) in posts" :key="index">
          <td>{{post.nombre}}</td>
          <td>{{post.email}}</td>
          <td>{{post.telefono}}</td>
        </tr>

      </table>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-http-client',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://635b130eaa7c3f113db57398.mockapi.io/usuarios',
        posts: []
      }
    },
    methods: {
      getPostXHRCb(){ 
        const xhr = new XMLHttpRequest()
        xhr.open('get', this.url)
       
        xhr.addEventListener('load', () => {
          if(xhr.status == 200){
            let respuesta = JSON.parse(xhr.response)
            this.posts = respuesta
          }
        })

        xhr.send()
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-http-client {

  }
  .jumbotron {
    background-color: teal;
    color: white;
  } 

  hr {
    background-color: #bbb;
  }

</style>
