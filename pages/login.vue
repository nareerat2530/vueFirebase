<!-- <template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12" style="background-image: url(https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80); background-size: cover; background-position: center center;">
  
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-12 py-12 bg-white shadow-lg sm:rounded-3xl sm:p-24">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Please Log in to your account</h1>
				</div>
      
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" id="email" v-model="login.email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<input autocomplete="off" id="password"  v-model="login.password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1" @click.prevent="userLogin">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template> -->
<template>
 
  <div class="bg-[#fee2e2] h-screen flex-1"> 
      
    
     <div class="container font-sans xl:pt-20 pt-10  bg-[#fee2e2]" >
       <div class="flex justify-center px-6 ">
         <!-- Row -->
         <div class="w-full xl:w-3/4 lg:w-11/12 flex">
           <!-- Col -->
           <div
             class="w-full h-auto bg-gray-400 hidden lg:block lg:w-10/12 bg-cover rounded-l-lg opacity-100 shadow-2xl shadow-black"
             style="background-image: url('https://images.unsplash.com/photo-1553227582-6d8929b3c49d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzk2fHxiaXJkfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60')"
           ></div>
           <!-- Col -->
           <div class="w-full lg:w-10/12 bg-white lg:p-5 rounded-lg lg:rounded-l-none shadow-2xl shadow-black">
             <h3 class="pt-4 text-2xl text-center">Login</h3>
             <form class="lg:px-8 pt-6 pb-8 mb-4 @submit.prevent bg-white rounded">        
               <div class="mb-4">
                 <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                   Email
                 </label>
                 <input
                   class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                   id="email"
                   v-model="login.email"
                   type="email"
                   placeholder="Email"
                 />
               </div>
               <div class="mb-4">
                 <div class="mb-4 md:mr-2 md:mb-0">
                   <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                     Password
                   </label>
                   <input
                     class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                     id="password"
                     v-model="login.password"
                     type="password"
                     placeholder="******************"
                   />
                   
                 </div>								
               </div>
               <div class="mb-6 text-center font-bold  text-red-700" >
                 <p v-if="this.errors.length">
             <!-- <b>Ooops, fix the errors:</b> -->
             <ul>
               <li v-for="item in errors" :key="item">
                 {{ item }}
               </li>
             </ul>
         </p>
           
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
                 <nuxt-link to="/Register" 
                 class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
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
    Button
    
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
    checkForm(e){
      this.errors = [];

        if(!this.username){
          this.errors.push('Sorry, the username is required')
        }
        if(this.email === email)
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
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.Message
        console.log(e.response.data.Message)
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
