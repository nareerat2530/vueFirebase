<template>
   
    
    <div class="bg-[#fee2e2] h-screen">
      <div  v-if="$auth.loggedIn">
        <h1 class="text-color-red-500">Hello {{ token.name }}</h1>
      <span>This is all you have got {{ token.email }}</span> 
      </div>
      <div v-else>
      <h1>Hello Log in or Register first OK?</h1>
      <Button buttonText="BANANPANKAKA" :onButtonClick="onButtonCLick" />
    </div>
      
    </div>
    
    

    


</template>
<script>



import jwt_decode from 'jwt-decode'
import Button from '~/components/Button'

export default {
  components: {
  Button
    
  },
  computed: {
    token() {
      const token = this.$auth.strategy.token.get()
      const decoded = jwt_decode(token)
      
      return decoded
    },
  
  },
  methods: {
    onButtonCLick(){
      console.log("Hello Iam the Bananpankaka button");
      this.$router.push({
    path: '/login'
})
    }
  }
}
</script>

