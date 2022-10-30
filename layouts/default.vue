<template>
    <div class="h-screen" >
      <Navbar />
      <nuxt />
      
    </div>
  </template>
  
  <script>
  import Navbar from "~/components/Navbar.vue";
  
  export default {
    components: {
      Navbar,
  
    },
  };
  </script>