<template>
<div class="flex space-x-2 justify-center items-end">
    <button class="text-white w-1/5 cursor-pointer text-xl border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
            <font-awesome-icon :icon="['fa', 'bars']" /> 
        </button>
 
</div>
</template>

<script>
export default {

    methods: {
    
    toggleNavbar(){
      this.showMenu = !this.showMenu;
    },
}
}
</script>

<style>

</style>