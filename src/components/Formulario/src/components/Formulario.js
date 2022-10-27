
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInitialData(),    
      formDirty: this.getInitialData()
    }
  },
  computed: {

  },
  mounted () {

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
      this.formDirty = this.getInitialData()         
    }    
  }
}


