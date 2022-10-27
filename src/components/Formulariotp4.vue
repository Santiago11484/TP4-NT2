<template>

  <section class="src-components-formulariotp-4">
    <div class="jumbotron">
      <h2>Componente Formulariotp4</h2>
      <hr>
      <hr>
      <br>
    
      <vue-form :state="formState" @submit.prevent="enviar()">
 
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input type="text" 
            id="nombre" 
            class="form-control" 
            autocomplete="off" 
            v-model.trim="formData.nombre" 
            name="nombre"
            required 
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"  
          >        

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">El nombre debe poseer al menos {{nombreMinLength}} caracters</div>
            <div slot="minlength" class="alert alert-danger mt-1">El nombre debe poseer como maximo {{nombreMaxLength}} caracters</div>
          </field-messages>
        </validate>
        
        <br>

        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number" 
            id="edad" 
            class="form-control" 
            autocomplete="off" 
            v-model.number="formData.edad" 
            name="edad"
            required  
            :min = edadMin
            :max = edadMax
          >        

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">Debe ser mayor de {{edadMin}}</div>
            <div slot="max" class="alert alert-danger mt-1">Debe ser menor de {{edadMax}}</div>
          </field-messages>
        </validate>

        <br>

        <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            class="form-control" 
            autocomplete="off" 
            v-model.trim="formData.email" 
            name="email"
            required  
          >        

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>

        <button class="btn.btn-success.my-3" :disabled="formState.$invalid">Enviar</button>

      </vue-form>

      <br>
      <hr>

      <table class="table responsive table-dark">
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Email</th>
        </tr>
        <tr>
          <th>{{formData.nombre}}</th>
          <th>{{formData.edad}}</th>
          <th>{{formData.email}}</th>
        </tr>
      </table>

      <!--
      <hr>
      <p><u>formData</u></p>
      <pre>{{ formData }}</pre>

      <p><u>formState</u></p>
      <pre>{{ formState }}</pre>
      -->

    </div>      
  </section>

</template>

<script>

  export default  {
    name: 'src-components-formulariotp-4',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getInitialData(),
        nombreMinLength: 5,
        nombreMaxLength: 15,
        edadMin: 18,
        edadMax: 120 
      }
    },
    methods: {
      getInitialData(){
      return {
        nombre: null,
        edad: null,
        email: null
      }
    },
    enviar(){
      console.log(this.formData) 
      this.formData = this.getInitialData()
      this.formState._reset()
      }    
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulariotp-4 {

  }
  .jumbotron {
    background-color: purple;
    color: white;
  } 

  hr {
    background-color: #bbb;
  }

  pre {
    color: white;
  }

</style>
