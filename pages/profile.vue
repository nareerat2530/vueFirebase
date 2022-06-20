<template lang="">
  <div>
    <h1>welcome to your profile page</h1>
    <button><nuxt-link class="botton" to="/">Back</nuxt-link></button>
  </div>
</template>
<script>
import jwt_decode from 'jwt-decode'
export default {
  // async asyncData({ $axios, params }) {
  //   try {
  //     let user = $axios.$get(`https://localhost:7101/api/User/${params.id}`)
  //     console.log(`${response.user}`)
  //     console.log(response.user)
  //     return {
  //       user: response.user,
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },
  data() {
    // const token = this.$auth.strategy.token.get()
    // const decoded = jwt_decode(token)
    // return {
    //   token,
    //   decoded,
    // }
    return {}
  },
}
</script>
<style lang=""></style>
