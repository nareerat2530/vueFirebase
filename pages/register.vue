<template>
 <div class=" bg-[#fee2e2] h-screen whitespace-nowrap overflow-auto scrollbar-hide" >
    <div class="container font-sans bg-[#fee2e2]">
      <div class="flex justify-center pt-24 px-6">
        <!-- Row -->
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <!-- Col -->
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style="
              background-image: url('https://images.unsplash.com/photo-1553227582-6d8929b3c49d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzk2fHxiaXJkfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60');
            "
          ></div>
          <!-- Col -->
          <div
            class="w-full xl:lg:w-5/12 bg-white lg:p-5 rounded-lg lg:rounded-l-none"
          >
            <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
            <form class="px-8 pt-6 pb-8 mb-4 @submit.prevent bg-white rounded">
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700 items-center"
                  for="username"
                >
                  User Name
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  v-model="username"
                  type="text"
                  placeholder="User Name"
                />
              </div>

              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-4">
                <div class="mb-4 md:mr-2 sm:w-full md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    v-model="password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
              </div>
              <div class="mb-6 text-center font-bold text-red-700">
                <span v-if="this.errors.length">
                  <!-- <b>Ooops, fix the errors:</b> -->
                  <ul>
                    <li v-for="item in errors" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </span>
                <Button buttonText="Register Account" @clicked="checkForm" />
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">
                <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div class="text-center">
                <nuxt-link
                  to="/login"
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                >
                  Already have an account? Login!
                </nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from '~/components/Notification'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Button from '~/components/Button.vue'
// import Navbar from '~/components/Navbar'
export default {
  components: {
    Notification,
    Button,
  },
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: null,
      errors: [],
    }
  },
  methods: {
    checkForm(e) {
      //e.preventDefault();
      this.errors = []
      if (!this.username) {
        this.errors.push('Sorry, the username is required')
      }

      if (!this.email) {
        this.errors.push('Sorry, the email is required')
      }
      if (!this.password || this.password.length < 6) {
        this.errors.push('Sorry, the password is required')
      }
      if (!this.errors.length) {
        this.onSignup()
      }
    },
    async onSignup() {
      try {
        const data = {
          username: this.username,
          email: this.email,
          password: this.password,
        }

        const response = await this.$axios.post(
          'https://localhost:7101/api/Authentication/register',
          data
        )

        if (response.status === 200) {
          let res = await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          const data = res.data

          this.$auth.strategy.token.set(data.firebaseToken)
          const token = this.$auth.strategy.token.get()
          const decoded = jwt_decode(token)
          const resp = await axios.get(
            `https://localhost:7101/api/User/${decoded.user_id}`
          )

          const user = this.$auth.setUser(resp.data)

          this.$router.push('/')
        }
      } catch (e) {
        this.error = e.response.data.Message
      }
    },
  },
}
</script>
