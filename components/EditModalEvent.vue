<template>
  <transition name="modal-fade">
    <div
      v-show="currentEventEdit !== null"
      class="modal-overlay"
      @click="$emit('closeModal')"
    >
      <div class="modal-window" @click.stop>
        <h2>{{ currentEventEdit?.description }}</h2>

        <button type="button" class="btn-cancel" @click="removeEvent">
          Remove
        </button>
        <button @click="editModal">Edit</button>
        <!-- <EditEvent
          v-show="editModal"
          @closeModal="editModal = false"
          :modalEvent="modalEvent"
        /> -->

        <button @click="$emit('closeModal')">Cancel</button>
      </div>
    </div>
  </transition>
</template>
<script>
import axios from 'axios'
import ModalEvent from './ModalEvent.vue'
import EditEvent from './EditEvent.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    ModalEvent,
    EditEvent,
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
    editModal() {
      this.$store.commit('closeAllModals')
      this.$store.commit('setShowEventModal', true)
    },
    async removeEvent() {
      await axios.delete(
        `https://localhost:7101/api/Events?id=${this.modalEvent.id}`
      )
      this.$emit('closeModal')
      console.log(this.modalEvent)
    },
  },
}
</script>

<style scoped>
.modal-window {
  height: 200px;
}
</style>
