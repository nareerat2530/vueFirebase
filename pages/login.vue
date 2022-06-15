<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
            <h1>Please log in</h1>

            <form @submit.prevent="userLogin">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  id="email"
                  v-model="login.email"
                  type="email"
                  name="email"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  id="password"
                  v-model="login.password"
                  type="password"
                  name="password"
                  class="form-control"
                />
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
              <Notification v-if="error" :Message="error" />
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
export default {
  components: {
    Notification,
  },

  middleware: 'auth',
  auth: 'guest',

  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      error: null,
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        const data = response.data
        console.log(data)
        this.$auth.strategy.token.set(data.firebaseToken)
        const token = this.$auth.strategy.token.get()
        const decoded = jwt_decode(token)

        const resp = await axios.get(
          `https://localhost:7101/api/User/${decoded.user_id}`
        )
        console.log('are you decoded???', resp.data)
        this.$auth.setUser(resp.data)
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.Message
        console.log('There is something wrong sir', e.response.data.Message)
      }
    },
  },
}
</script>
<style>
form {
  max-width: 420px;
  margin: 30 auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
.form-label {
  color: black;
  display: inline-block;
  margin: 25x 0 15px;

  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
.form-control {
  display: block;
  color: red;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
}
btn {
  text-align: center;
}
</style>
