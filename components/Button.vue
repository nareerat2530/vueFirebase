<template>
  <div>
    <button
		class="w-full max-w-min lg:px-4 py-2 truncate font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
		type="button" @click="buttonCLick()">{{buttonText}}</button>
  </div>
</template>

<script>
import { future } from '~/tailwind.config';
export default {
    created() {
    this.$emit('created');},
    props: {
    buttonText: String,
   
    emits: ['click-event'],
  },
  methods:{
 buttonCLick (){
    this.$emit('clicked', 'someValue')
}
  }
}

</script>

<style>

</style>