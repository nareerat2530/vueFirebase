<template>
  <transition name="modal-fade">
    <div
      v-show="currentEventEdit !== null"
      class="modal-overlay"
      @click="$emit('closeModal')"
    >
      <div class="modal-window" @click.stop>
        <h2>{{ currentEventEdit?.description }}</h2>

        <button type="button" class="btn-cancel" @click="deleteEvent">
          Remove
        </button>
        <button @click="updateEvent">Edit</button>

        <button @click="$emit('closeModal')">Cancel</button>
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
    ...mapGetters(['currentEventEdit']),
  },
  methods: {
    // editModal() {
    //   this.$store.commit('closeAllModals')
    //   this.$store.commit('setShowEventModal', true)
    // },
    async deleteEvent() {
      this.$emit('closeModal')
      console.log(this.$store.getters.currentEventEdit)
      this.$store.dispatch(
        'deleteEvent',
        this.$store.getters.currentEventEdit.id
      )
    },
    async updateEvent(u) {
      // try {
      //   const response = await axios.put(
      //     `https://localhost:7101/api/Events?id=${this.modalEvent.id}`,
      //     {
      //       description: u.description,
      //       startDate: u.startDate,
      //     }
      //   )
      //   if (response.status === 200) {
      //     this.$store.commit('closeAllModals')
      //   }
      // } catch (e) {
      //   this.error = e.response.data.Message
      //   console.log(e.response.data.Message)
      // }
      console.log('hello')
      console.log(this.$store.getters.form)
    },
  },
}
</script>

<style scoped>
.modal-window {
  height: 200px;
}
</style>
