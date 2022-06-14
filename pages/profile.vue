<template lang="">
  <div>welcome to your profile page</div>
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
