<template>
  <div>
    <div class="container">
      <MainCalendar :key="calenderKey" />
      <ModalEvent
        v-show="showAddEventModal"
        @closeModal="closeModals"
        @banana="(u) => onAddEventForm(u)"
      />
      <ModalEvent
        v-show="showEventModal"
        @closeModal="closeModals"
        @banana="(u) => updateEvent(u)"
      />
      <EditModalEvent
        v-show="showEditEventModal"
        @closeModal="closeModals"
        :showModalEvent="true"
      />

      <button><nuxt-link class="button" to="/">Back</nuxt-link></button>
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
  data () {
    return {
      calenderKey:1
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
    forceRerender () {
      this.calenderKey += 1;  
    }
  },
  watch: {
    count(newCount, oldCount) {
     
      this.forceRerender();
     
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  margin-top: 50px;
  width: 60%;
  background: yellow;
  @media (max-width: 1200px) {
    width: 80%;
  }
}
button {
  height: 40px;
  color: white;
  font-size: 16px;
  border-radius: 16px;
  text-decoration: underline;
}
</style>
