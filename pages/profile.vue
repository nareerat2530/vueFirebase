<template>
  <div class="pt-20" >
    <section
        class="bg-[url('~/assets/got.jpg')] bg-cover bg-center"
      >
        <div
          class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:flex h-screen lg:px-8"
        >
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold text-green-800 sm:text-5xl">
              Welcome to your

              <strong class="block font-extrabold text-green-800">
                Profile page
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl text-gray-300 sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 ml-10 text-center">
              <nuxt-link
              to="/calendar"
                class="block w-full rounded bg-[#de7f7f] px-12 py-3 text-sm font-medium text-black shadow hover:bg-[#fee2e2]  focus:outline-none focus:ring active:bg-[#fee2e2]  sm:w-auto"
              >
                Go to Calendar!
              </nuxt-link>

                <nuxt-link
                  to="/home"
              
                class="block w-full rounded bg-[#493a8e] px-12 py-3 text-sm font-medium text-black shadow hover:text-black focus:outline-none focus:ring active:text-black sm:w-auto"
              >
          Go Back
                </nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>
<script>
import MainCalendar from '../components/MainCalendar.vue'
import jwt_decode from 'jwt-decode'
export default {
  components: {
    MainCalendar,
  },
  computed: {
    token() {
      const token = this.$auth.strategy.token.get()
      const decoded = jwt_decode(token)
      return decoded
    },
   
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
