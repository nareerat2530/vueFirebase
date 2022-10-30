<template>
  <div class="">

       <Hero/> 
     

  </div>

</template>
<script>

import Button from '~/components/Button'
import Hero from '~/components/Hero'

export default {
  components: {
    Button,
    Hero,
    
  },

  // methods: {
  //   onButtonCLick() {
  //     this.$router.push({
  //       path: '/login',
  //     })
  //   },
  // },
}
</script>
