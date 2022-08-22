<template lang="">
  <div>
    <div class="container">
      

    </div>
    <CalendarMonth />
    
    <button><nuxt-link class="button" to="/">Back</nuxt-link></button>
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
<style lang=""></style>
