<template lang="">
  <div class="container" >
    
      <NavBar/>
    <div v-if="$auth.loggedIn"> 
     <h1>Hello {{token.name}}  </h1>
      <p>This is all you have got {{token.email}}</p>
   </div>
   
      <div v-else>
 <h1>Hello Log in or Register first OK?</h1>
      </div>
    </div>
  </div>
  
  </div>
</template>
<script>
import jwt_decode from 'jwt-decode'
import NavBar from "~/components/Navbar.vue"
export default {
  components:{
NavBar
  },
  // data() {
  //  return {
  //     token:"",
  //     // decoded: "",
  //     }
  // },

  computed:{
    token(){
      const token = this.$auth.strategy.token.get()
     const decoded = jwt_decode(token)
    // if(token){
    //    decoded
    //    console.log("what is going on",decoded)
    // }
    return decoded
    }
  }
 
}
</script>
<style lang=""></style>
