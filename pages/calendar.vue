<template>
  <div>
    <div class="container">
      
      <CalendarMonth />
      
    <button><nuxt-link class="button" to="/">Back</nuxt-link></button>
    </div>
   
  </div>
</template>
<script>

import CalendarMonth from '../components/CalendarMonth.vue'

export default {

  components: {
    
   CalendarMonth,
  },
  
}
</script>
<style lang="scss" scoped>
  .container
  {
    margin-top: 50px;
    width: 60%;
      background: yellow;
  @media (max-width: 1200px) {
   width: 80%;
  }
  }
button {
  
  
  height: 40px;
  color: white;
  font-size: 16px;
  border-radius: 16px;
  text-decoration: underline;    



  
}
</style>