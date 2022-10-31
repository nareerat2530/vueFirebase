<template>
  <nav class="bg-purple-500 h-[8%] absolute w-full">
    <div class="flex flex-row justify-between">
      <div class="mt-3 h-4 ml-3 text-xl cursor-pointer">
        <nuxt-link
          class="text-sm font-bold inline-block ml-4 py-4 whitespace-nowrap uppercase text-white"
          to="/home"
        >
          Home
        </nuxt-link>
      </div>
      <div class="mt-3">
        <span class="sm:hidden mr-4 py-4 inline-block" :class="{'group relative ':showMenu}"  @click="toggleNavbar">
          <button          
            class="inline-flex items-center rounded px-5 font-semibold"
          >
            <font-awesome-icon :icon="['fa', 'bars']" />
          </button>
          <ul
            v-if="!$auth.loggedIn"
            class="absolute hidden pt-1 text-gray-700 group-hover:block"
          >
            <li class="">
              <nuxt-link
                class="whitespace-no-wrap block rounded-t no-underline bg-gray-200 py-2 px-3 text-black  hover:bg-gray-400"
                to="/login"
                >Login</nuxt-link
              >
            </li>
            <li class="">
              <a
                class="whitespace-no-wrap block bg-gray-200 no-underline py-2 px-3 text-black  hover:bg-gray-400"
                href="/register"
                >Register</a
              >
            </li>
          </ul>
          <ul
            v-else
            class="absolute hidden pt-1 text-gray-700 group-hover:block"
          >
            <li class="">
              <nuxt-link
                class="whitespace-no-wrap block rounded-t bg-gray-200 py-2 px-4 text-black no-underline hover:bg-gray-400"
                to="/profile"
                >Profile</nuxt-link
              >
            </li>
            <li class="">
              <nuxt-link
                class="whitespace-no-wrap block bg-gray-200 py-2 px-4 no-underline text-black  hover:bg-gray-400"
                to="/calendar"
                >Calendar</nuxt-link
              >
            </li>
            <li @click="onLogout" class="">
              <nuxt-link
                class="whitespace-no-wrap block bg-gray-200 py-2 px-4 no-underline text-black  hover:bg-gray-400"
                to="/home"
                >Logout</nuxt-link
              >
            </li>
          </ul>
        </span>

        <div
          v-if="$auth.loggedIn"
          class="lg:flex hidden sm:visible sm:block row-auto mr-4 py-4"
        >
         
          <li class="list-none">
            <nuxt-link
              class="px-3 py-2 truncate flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              to="profile"
            >
              <i
                class="fab fa-pinterest text-lg leading-lg text-white opacity-75"
              /><span class="ml-2">Profile</span>
            </nuxt-link>
          </li>
          <li class="list-none">
            <nuxt-link
              class="px-3 py-2 truncate flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              to="calendar"
            >
              <i
                class="fab fa-pinterest text-lg leading-lg text-white opacity-75"
              /><span class="ml-2">Calendar</span>
            </nuxt-link>
          </li>
          <li class="list-none" @click="onLogout">
            <nuxt-link
              class="px-3 py-2 truncate flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              to="/"
            >
              <i
                class="fab fa-pinterest text-lg leading-lg text-white opacity-75"
              /><span class="ml-2">Log Out</span>
            </nuxt-link>
          </li>
        </div>
        <div v-else class="lg:flex hidden sm:visible sm:block row-auto mr-4 py-4">
          <li class="nav-item list-none">
            <nuxt-link
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              to="/register"
            >
              <font-awesome-icon :icon="['fa', 'circle-user']" />
              <span class="ml-2">Register</span>
            </nuxt-link>
          </li>
          <li class="nav-item list-none">
            <nuxt-link
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              to="/login"
            >
              <font-awesome-icon :icon="['fa', 'key']" />
              <span class="ml-2">Login</span>
            </nuxt-link>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import MobileMenu from './MobileMenu.vue'

export default {
  name: 'Navbar',
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu
    },
    async onLogout() {
      await this.$auth.logout()
      this.$router.push('/home')
    },
  },
  components: { MobileMenu },
}
</script>
