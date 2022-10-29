<template>
  <div>
    <div class="container">
      <MainCalendar :key="calenderKey" />
      <ModalEvent v-show="showAddEventModal" @closeModal="closeModals" />
      <EditModalEvent
        v-show="showEditEventModal"
        @closeModal="closeModals"
        :showModalEvent="true"
      />
      <Button buttonText="Back" @clicked="backClick" />
      <Button /><nuxt-link class="bg-red-500" to="/">Back</nuxt-link>
    </div>
  </div>
</template>
<script>
import MainCalendar from '../components/MainCalendar.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    MainCalendar,
  },
  data() {
    return {
      calenderKey: 1,
    }
  },
  computed: {
    ...mapGetters([
      'showEventModal',
      'showEditEventModal',
      'showAddEventModal',
    ]),
    count() {
      return this.$store.state.events.length
    },
  },
  methods: {
    closeModals() {
      this.$store.commit('closeAllModals', false)
    },
    forceRerender() {
      this.calenderKey += 1
    },
    backClick(){
      this.$router.push('/')
    }
  },
  watch: {
    count(newCount, oldCount) {
      this.forceRerender()
    },
  },
}
</script>

