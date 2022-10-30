<template>
  <div class=" top-0 bg-[#5454b4] w-full absolute">
   <nav class="lg:flex-row ">
    <div class="container lg:flex lg:flex-row ">
      <div class="lg:w-full flex justify-between lg:static lg:block lg:justify-start">
        <nuxt-link class="text-sm font-bold inline-block ml-4 py-4 whitespace-nowrap uppercase text-white" to="/">
          Home
        </nuxt-link>
        <button class="text-white w-1/5 cursor-pointer text-xl border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
            <font-awesome-icon :icon="['fa', 'bars']" /> 
        </button>
      </div>
      
      <div  v-bind:class="{'hidden': !showMenu, 'flex': showMenu}"  class="lg:flex lg:flex-grow items-center">
        
        <ul  class=" fixed flex-col lg:flex-row  list-none inline ml-auto">
          <div v-if="$auth.loggedIn" class="inline-flex">
          <li class="nav-item  " @click="onLogout" >
            <nuxt-link class="px-3 py-2 truncate flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/">
              <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75" /><span class="ml-2">Log Out</span>
            </nuxt-link>
          </li>
          <li class="nav-item" >
            <nuxt-link class="px-3 py-2 truncate flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="profile">
              <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75" /><span class="ml-2">Profile</span>
            </nuxt-link>
          </li>
        </div>
        <div v-else  class="inline-flex">
          <li class="nav-item">
            <nuxt-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/register">
              <font-awesome-icon :icon="['fa', 'circle-user']" /> <span class="ml-2">Register</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/login">
              <font-awesome-icon :icon="['fa', 'key']" /> <span class="ml-2">Login</span>
            </nuxt-link>
          </li>
        </div>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  data(){
    return {
      showMenu: false
    }
  },
  methods: {
    
    toggleNavbar(){
      this.showMenu = !this.showMenu;
    },
  
    async onLogout() {
      await this.$auth.logout()
      this.$router.push('/')
      console.log(this.onLogout)
    },
  },
}
</script>

