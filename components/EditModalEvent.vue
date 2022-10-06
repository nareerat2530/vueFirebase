<template>
  <transition name="modal-fade">
    <div
      v-show="getCurrentAppointment !== null"
      class="modal-overlay"
      @click="onModalClose"
    >
      <div class="modal-window" @click.stop>
        <h2>{{ getCurrentAppointment?.description }}</h2>

        <button type="button" class="btn-cancel" @click="deleteEvent">
          Remove
        </button>
        <button @click="editEventButtonClick">Edit</button>

        <button type="button" class="btn-cancel" @click="onModalClose">
          Cancel
        </button>
      </div>
    </div>
  </transition>
</template>
<script>
import ModalEvent from './ModalEvent.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    ModalEvent,
  },
  props: {
    showModalEvent: {
      type: Boolean,
    },
  },
  computed: {
    ...mapGetters(['getCurrentAppointment']),
  },
  methods: {
    async deleteEvent() {
      this.$store.commit('closeAllModals')

      await this.$store.dispatch(
        'deleteEvent',
        this.$store.getters.getCurrentAppointment.id
      )
    },
    onModalClose() {
      this.$store.commit('setCurrentAppointment', {})
      this.$emit('closeModal')
    },
    editEventButtonClick() {
      this.$store.commit('closeAllModals')
      this.$store.commit('setShowEventModal', true)
     
    },
  },
}
</script>

<style scoped>
.modal-window {
  height: 200px;
}
</style>
