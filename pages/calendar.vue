<template>
  <div class="bg-gray-300 pt-20">
    <div class="container">
      <MainCalendar :key="calenderKey" />
      <ModalEvent v-show="showAddEventModal" @closeModal="closeModals" />
      <EditModalEvent
        v-show="showEditEventModal"
        @closeModal="closeModals"
        :showModalEvent="true"
      />
      
     
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
    token() {
      const token = this.$auth.strategy.token.get()
      const decoded = jwt_decode(token)

      return decoded
    },
  },
  methods: {
    closeModals() {
      this.$store.commit('closeAllModals', false)
    },
    forceRerender() {
      this.calenderKey += 1
    },
  
  },
  watch: {
    count(newCount, oldCount) {
      this.forceRerender()
    },
  },
}
</script>

