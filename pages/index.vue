<template lang="">
  <div class="container">
    
      <NavBar/>
    
    
   <button class="button-logout" @click="onLogout">log out</button>
    <nuxt-link class="button-logout" to="/profile">profile</nuxt-link> 
    
    <div v-if="$auth.loggedIn"> 
     <h1>Hello {{ decoded.name }}</h1>
      <p>This is all you have got {{ decoded.email }}</p>
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
  data() {
    const token = this.$auth.strategy.token.get()
    if(token === null)
    {
      
    }
    const decoded = jwt_decode(token)
     console.log(decoded)
    return {
      token,
      decoded,
      
    }
  },
  methods: {
    async onLogout() {
      await this.$auth.logout()
    },
    
  },
}
</script>
<style lang=""></style>
