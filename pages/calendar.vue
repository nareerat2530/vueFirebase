<template>
  <div>
    <div class="container">
      <CalendarMonth />
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
import CalendarMonth from '../components/CalendarMonth.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    CalendarMonth,
  },
  computed: {
    ...mapGetters([
      'showEventModal',
      'showEditEventModal',
      'showAddEventModal',
    ]),
  },
  methods: {
    closeModals() {
      this.$store.commit('closeAllModals', false)
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
