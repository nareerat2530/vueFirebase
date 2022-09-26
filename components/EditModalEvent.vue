<template>
  <transition name="modal-fade">
    <div class="modal-overlay">
      <div class="modal-window">
        <h2>{{ modalEvent.description }}</h2>

        <button type="button" class="btn-cancel" @click="removeEvent">
          Remove
        </button>
        <button @click="getModalEvent">Edit</button>
        <EditEvent
          v-show="showModalEvent"
          @closeModal="showModalEvent = false"
          :modalEvent="modalEvent"
        />

        <button @click="$emit('closeModal')">Cancel</button>
      </div>
    </div>
  </transition>
</template>
<script>
import axios from 'axios'
import ModalEvent from './ModalEvent.vue'
import EditEvent from './EditEvent.vue'

export default {
  components: {
    ModalEvent,
    EditEvent,
  },
  props: {
    modalEvent: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      showModalEvent: false,
    }
  },

  methods: {
    async removeEvent() {
      await axios.delete(
        `https://localhost:7101/api/Events?id=${this.modalEvent.id}`
      )
      this.$emit('closeModal')
      console.log(this.modalEvent)
    },
    getModalEvent() {
      this.showModalEvent = true
    },
  },
}
</script>

<style scoped>
.modal-window {
  height: 200px;
}
</style>
