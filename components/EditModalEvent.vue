<template>
  <div
    v-show="getCurrentAppointment !== null"
    class="fixed inset-0 h-screen flex bg-opacity-30 backdrop-blur-sm"
    @click="onModalClose"
  >
    <div class="lg:max-w-max lg:h-1/6 lg:m-auto lg:w-min-fit container bg-pink-300 rounded-3xl justify-center  shadow-2xl shadow-black  border-2 flex" @click.stop>
      <div class=" ">
        <div class="text-center m-2 ">
          <h2 class="text-black pt-2 text-3xl">
            {{ getCurrentAppointment?.description }}
          </h2>
        </div>

        <div class="inline-flex space-x-4 items-center px-5 md:items-center">
          <Button buttonText="Remove" @clicked="deleteEvent" />
          <Button buttonText="Edit" @clicked="editEventButtonClick" />
          <Button buttonText="Cancel" @clicked="onModalClose" />
          <button class="bg-red-500" @click="deleteEvent">Remove</button>
          
         
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModalEvent from './ModalEvent.vue'
import Button from './Button.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    ModalEvent,
    Button

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
      this.$store.commit('setShowAddEventModal', true)
    },
  },
}
</script>
