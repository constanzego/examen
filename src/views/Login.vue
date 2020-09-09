<template>
  <div class="Login">
    <Navbar msg="" />
    <h1>Login</h1>

  <input type="email" v-model="email" placeholder="Ingrese email" required> <br>
  <input type="password" v-model="password" placeholder="Ingrese password" required> <br>
  <button v-on:click="login"> login </button>

  <button v-on:click="newUser">registrar</button> <br>

  <input type="text" v-model="id" placeholder="Ingrese id" required> <br>
  <button v-on:click="deleteOne">eliminar</button> <br>
  <div class="hello">
    <b-table striped hover v-bind:items="usuario" b-bind:fields="encabezado"></b-table>
  </div>
<Footer msg="" />
  </div>
</template>

<script>
import { db } from '../firebase';  

import Navbar from "@/components/Navbar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Login",
  components: {
    Navbar,

    Footer,
  },
data(){
  return { 
    // encabezado:[ {key:'Nombre', sortable: true}, 'Canal', 'Temporadas', 'En Emisión', 'Géneros'],
    encabezado:['id','email','password'],
    usuario:[],
    email:'',
    password:'',
    id:'',
  };
},
firestore(){
  return {
    usuario: db.collection('email')
  }
},
methods: {
  login(){
    if(this.email != "" && this.password!="" ){
      console.clear()
      console.log('logedin')
      this.viewOne()
    }else{
      alert('Ingrese campos obligatorios')
    }
  },
  async viewOne() {
    console.log('dentro de viewOne')
    try {
      let usuario = await db.collection("usuario").doc('BJknNCIhNHD5qJlFRKpz' ).get();
      console.log(usuario);
      if(usuario.exists){
        //alert('usuario existe')
        this.$router.push({
          name: 'About'
        })
      
      }
    }
    catch (error) {
      console.log(error);
    }
  },
  newUser() {
              // add item to db
              db.collection("usuario").add({
                  email: this.email,
                  contraseña: this.password
              });
              // reset values
              this.email = "";
              this.password = "";
  },
  async deleteOne() {
              try {
                  db.collection("usuario").doc(this.id).delete();
              }
              catch (error) {
                  console.log(error);
              }
              this.id=''
          },
}
}
</script>
<style scoped>

  img{
    max-width: 45px;
  }


#login{
   margin:auto;
   padding: 20px;
   background-color: green;
}
</style>