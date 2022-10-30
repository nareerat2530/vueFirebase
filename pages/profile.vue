<template>
  <div>
    <div class="pt-20">
      <h1>Welcome to your Profile</h1>
      <div>
        <button>
          <nuxt-link class="button" to="/calendar"
            >Go to Calendar</nuxt-link
          ></button
        ><br />
        <button>
          <nuxt-link class="button" to="/">Back to home</nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import MainCalendar from '../components/MainCalendar.vue'

export default {
  components: {
    MainCalendar,
  },
}
</script>
<style scoped>
button {
  height: 40px;
  color: white;
  font-size: 16px;
  border-radius: 16px;
}
</style>
