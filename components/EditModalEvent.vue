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
        <button @click="editeEventButtonClick">Edit</button>

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
     deleteEvent() {
      this.$emit('closeModal')
      
      this.$store.dispatch(
        'deleteEvent',
        this.$store.getters.getCurrentAppointment.id
      )
    },
    onModalClose(){

      this.$store.commit('setCurrentAppointment', {})
      this.$emit('closeModal')
    },
     editeEventButtonClick() {


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
