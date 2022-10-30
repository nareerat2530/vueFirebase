<template>
  <div>
    <div v-if="$auth.loggedIn" class="pt-20">
      <h1 class="text-color-red-500">Hello {{ this.$auth.user.displayName }}</h1>
      <span>This is all you have got {{ this.$auth.user.email }}</span>
    </div>
    <div class="" v-else>
      <section
        class="overflow-y-hidden bg-[url(https://images.unsplash.com/photo-1618688935038-e3e6050f9849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbGVuZGVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60)] bg-cover bg-center"
      >
        <div
          class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let us find your

              <strong class="block font-extrabold text-rose-700">
                Forever Home.
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
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
console.log('decoded',decoded)
      return decoded
    },
   
  },
}
</script>

<style></style>
