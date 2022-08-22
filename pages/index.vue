<template>
  <div>
    
    <NavBar />
    <div v-if="$auth.loggedIn">
      <h1>Hello {{ token.name }}</h1>
      <span>This is all you have got {{ token.email }}</span> 
      
    </div>
    
    

    <div v-else>
      <h1>Hello Log in or Register first OK?</h1>
    </div>
  
  </div>
</template>
<script>



import jwt_decode from 'jwt-decode'
import NavBar from '~/components/Navbar.vue'

export default {
  components: {
    NavBar,
    
  },
  // data() {
  //  return {
  //     token:"",
  //     // decoded: "",
  //     }
  // },

  computed: {
    token() {
      const token = this.$auth.strategy.token.get()
      const decoded = jwt_decode(token)
      // if(token){
      //    decoded
      //    console.log("what is going on",decoded)
      // }
      return decoded
    },
  },
}
</script>
</script>
<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

body {
  font-family: sans-serif;
  font-weight: 100;
  --grey-100: #e4e9f0;
  --grey-200: #cfd7e3;
  --grey-300: #b5c0cd;
  --grey-800: #3e4e63;
  --grid-gap: 1px;
  --day-label-size: 20px;
}

ol,
li {
  padding: 0;
  margin: 0;
  list-style: none;
 
}

.calendar-month-header {
  display: flex;
  justify-content: space-between;
  /* background-color: rgb(32, 26, 26); */
  padding: 20px;
  margin: 30px;
}
</style>
