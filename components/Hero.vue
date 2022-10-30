<template>
  <div>
    <div v-if="$auth.loggedIn" class="pt-20">
      <h1 class="text-color-red-500">Hello {{ this.$auth.user.displayName }}</h1>
     
    </div>
    <div class="" v-else>
      <section
        class="bg-[url('~/assets/winter.jpg')] bg-cover bg-center"
      >
        <div
          class="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold text-purple-500 sm:text-5xl">
              The

              <strong class="block font-extrabold text-purple-500">
                Calender App 
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/register"
                class="block w-full rounded bg-purple-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  computed: {
    token() {
      const token = this.$auth.strategy.token.get()
      const decoded = jwt_decode(token)
      return decoded
    },
   
  },
}
</script>

<style></style>
