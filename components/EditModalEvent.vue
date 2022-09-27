<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('closeModal')">
      <div class="modal-window" @click.stop>
        <h2>{{ modalEvent.description }}</h2>

        <button type="button" class="btn-cancel" @click="removeEvent">
          Remove
        </button>
        <button @click="showModalEvent = true">Edit</button>
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
  },
}
</script>

<style scoped>
.modal-window {
  height: 200px;
}
</style>
