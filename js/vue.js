const app = new Vue({

  el: '#app',

  data:{
    email:'',
    isLoading: true,
    httpError: false, 
    allEmail:[],


  },
  methods:{

    getEmail(){

      
        for (let i = 0; i < 10; i++) {

          this.isLoading = true;

          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {

            //tutta la risposta
            console.log('OK',response);

            //JSON = il nostro oggetto
            console.log('data',response.data);

            //in base a come è fatto ogni JSON prendiamo quello che ci serve 
            console.log('email', response.data.response)

            this.email = response.data.response;
            this.allEmail.push(this.email)

            console.log('lista email', this.allEmail)

            this.isLoading = false;

            
          })

          .catch((error) =>{
            console.log('KO',error)
            this.httpError = true;
           });
           
          this.allEmail=[];
        }

      

          
      

      //con then faccio partire il console.log quando arriva la risposta, con catch faccio partire il console.log se viene errore
      
    }


  },
  mounted(){
    console.log('montato');
    console.log('axios',axios);

    this.getEmail()

    
  }
}) 