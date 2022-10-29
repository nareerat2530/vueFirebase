<!-- <template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">My site</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      
        <div v-if="$auth.loggedIn">
          <b-navbar-nav>
            <b-nav-item @click="onLogout"
              ><nuxt-link class="navbar-item" to="/"
                >logout</nuxt-link
              ></b-nav-item
            >
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item
              ><nuxt-link class="navbar-item" to="profile"
                >Profile</nuxt-link
              ></b-nav-item
            >
          </b-navbar-nav>
        </div>
        <div v-else>
          <b-navbar-nav>
            <nuxt-link class="navbar-item" to="/register">Register</nuxt-link>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item
              ><nuxt-link class="navbar-item" to="/login"
                >login</nuxt-link
              ></b-nav-item
            >
          </b-navbar-nav>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template> -->
<template>
   <nav class=" lg:flex lg:flex-row lg:px-2 py-3 bg-[#2F2FA2] bg-opacity-75">
    <div class="container lg:flex lg:flex-row ">
      <div class="lg:w-full flex justify-between lg:static lg:block lg:justify-start">
        <nuxt-link class="text-sm font-bold inline-block ml-4 py-4 whitespace-nowrap uppercase text-white" to="/">
          Home
        </nuxt-link>
        <button class="text-white w-1/5 cursor-pointer text-xl border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
            <font-awesome-icon :icon="['fa', 'bars']" /> 
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <nuxt-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/register">
              <font-awesome-icon :icon="['fa', 'bars']" /> <span class="ml-2">Register</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/login">
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /><span class="ml-2">Login</span>
            </nuxt-link>
          </li>
          <li class="nav-item" @click="onLogout" >
            <nuxt-link class="px-3 py-2 truncate flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to="/">
              <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75" /><span class="ml-2">Log Out</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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

