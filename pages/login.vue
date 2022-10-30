<template>
  <div class=" bg-[#ede9fe] h-screen whitespace-nowrap overflow-auto scrollbar-hide" >
    
    <div class="container font-sans xl:pt-32 pt-24 ">
      <div class="flex justify-center">
        <!-- Row -->
        <div class="w-4/6 sm:w-3/5 md:w-2/4 xl:w-3/4  lg:w-11/12 flex shadow-2xl shadow-black">
          <!-- Col -->
          <div
            
            class="bg-[url('https://firebasestorage.googleapis.com/v0/b/firebase-with-dotnet.appspot.com/o/12045238_10205123972482336_6232386099057183758_o.jpg?alt=media&token=8a8e0f84-9a91-404d-bf21-433ac4a08fd0')] bg-gray-400 hidden lg:block lg:w-6/12 bg-cover rounded-l-lg opacity-100"
          ></div>
          <!-- Col -->
          <div
            class="w-full lg:w-6/12  bg-gray-200 lg:p-5  lg:rounded-full-none "
          >
            <h3 class="pt-4 text-2xl mb-10 text-center">Login</h3>
            <form
              class="lg:px-8  mb-4 @submit.prevent  rounded"
            >
            <div class="flex flex-col items-center">
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="lg:w-full  px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  v-model="login.email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-4">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    class="lg:w-full  px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    v-model="login.password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
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

                <Button buttonText="Login" @clicked="userLogin" />
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
                  to="/Register"
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                >
                  Dont have an account? Register!
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
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Notification from '~/components/Notification'
import Button from '~/components/Button.vue'

export default {
  components: {
    Notification,
    Button,
  },

  // middleware: 'auth',
  // auth: 'guest',

  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      error: null,
      errors: [],
    }
  },
  methods: {
    checkForm(e) {
      this.errors = []

      if (!this.username) {
        this.errors.push('Sorry, the username is required')
      }
      if (this.email === email)
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
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        const data = response.data

        this.$auth.strategy.token.set(data.firebaseToken)
        const token = this.$auth.strategy.token.get()
        const decoded = jwt_decode(token)

        const resp = await axios.get(
          `https://localhost:7101/api/User/${decoded.user_id}`
        )

        const user = this.$auth.setUser(resp.data)
        // console.log(user)
        this.$router.push('/', user)
      } catch (e) {
        this.error = e.response.data.Message
        console.log(e.response.data.Message)
      }
    },
  },
}
</script>
