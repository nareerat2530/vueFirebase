<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">My site</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item
            ><nuxt-link class="navbar-item" to="/admin"
              >Admin</nuxt-link
            ></b-nav-item
          >
        </b-navbar-nav> -->
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
</template>

<script>
export default {
  methods: {
    async onLogout() {
      await this.$auth.logout()
      this.$router.push('/')
      console.log(this.onLogout)
    },
  },
}
</script>

<style></style>
