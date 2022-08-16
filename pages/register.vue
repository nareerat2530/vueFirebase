<template>
 <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div>
    <h1>Please Register</h1>
    

    <form @submit="checkForm">
      <div class="mb-3">
        <label for="Password" class="form-label">UserName</label>
        <input
          id="UserName"
          v-model="username"
          type="text"
          class="form-control"
          placeholder="Please write your username"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Email</label>
        <input
          id="Email"
          v-model="email"
          type="email"
          class="form-control"
          placeholder="Please write your Email"
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          id="Password"
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Please write your Password"
        />
      </div>
      <p v-if="this.errors.length">
            <b>Ooops, fix the errors:</b>
            <ul>
              <li v-for="item in errors" :key="item">
                {{ item }}
              </li>
            </ul>
        </p>


      <button type="submit" class="btn btn-primary">Register</button>
      <div>
        <span>Already have a Account</span>&nbsp;
        <nuxt-link to="/login" class="a-link-emphasis"> Login</nuxt-link>
      </div>
     
    </form>
     <Notification v-if="error" :Message="error" />
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from '~/components/Notification'
export default {
  components: {
    Notification,
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
    checkForm(e){
      e.preventDefault();
      this.errors = [];

       if(!this.username){
          this.errors.push('Sorry, the username is required')
        }
        if(!this.email){
          this.errors.push('Sorry, the email is required')

    }
     if(!this.password || this.password.length < 6){
          this.errors.push('Sorry, the password is required')

    }
    if(!this.errors.length){
      this.onSignup()
    }
    },
    async onSignup() {
      try {
        const data = {
          username: this.username,
          email: this.email,
          password: this.password,

        };

        const response = await this.$axios.post(
          'https://localhost:7101/api/Authentication_/register',
          data
        )
       
         if (response) {
          this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
            },
          });
          console.log(response.data)
          this.$router.push("/");
        }
       
      } catch (e) {
        this.error = e.response.data.Message
        console.log(e.response.data.Message)
      }
    },
  },
}
</script>

<style scoped>
form {
  max-width: 420px;
  
  background: white;
  padding: 40px;
  border-radius: 10px;
  margin-top: 3rem;
}
.form-label {
  color: black;
  display: inline-block;
  margin: 25x 0 15px;
  
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  margin: 1rem;
}
.form-control {
  display: block;
  color: black;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 1em;
}
.btn-primary {
  text-align: right;
}
h1 {
  text-align: center;
}
body {
  margin: 2rem;
  background: #eee;
  margin-top: 40px;
}
</style>


