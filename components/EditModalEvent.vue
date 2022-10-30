<template>
  <div
    v-show="getCurrentAppointment !== null"
    class="fixed inset-0 h-screen flex bg-opacity-30 backdrop-blur-sm"
    @click="onModalClose"
  >
    <div class="h-2/12 lg:m-auto container h-fit bg-pink-200 rounded-3xl justify-center  shadow-2xl shadow-black  border-2 flex" @click.stop>
      <div class=" ">
        <div class="text-center m-2 ">
          <h2 class="text-black pt-2 text-3xl">
            {{ getCurrentAppointment?.description }}
          </h2>
        </div>

        <div class="inline-flex space-x-4 items-center px-5 md:items-center mb-2">
          <button @click="deleteEvent" type="button" class="inline-block px-6 py-2.5  bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Remove</button>
          <button @click="onModalClose" type="button" class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Cancel</button>
         
          <button @click="editEventButtonClick" type="button" class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
          
         
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
