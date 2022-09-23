<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('closeModal')">
      <div class="modal-window" @click.stop>
        <h2>{{ modalEvent.description }}</h2>

        <button type="button" class="btn-cancel" @click="removeEvent">
          Remove
        </button>
        <button @click="getModalEvent">Edit</button>

        <button @click="$emit('closeModal')">Cancel</button>
        <ModalEvent v-show="showModalEvent" @submit="updateEvent" />
      </div>
    </div>
  </transition>
</template>
<script>
import axios from 'axios'
import ModalEvent from './ModalEvent.vue'

export default {
  components: {
    ModalEvent,
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
      editEvent: {
        description: '',
        startDate: '',
      },
    }
  },
  computed: {},

  methods: {
    async removeEvent() {
      await axios.delete(
        `https://localhost:7101/api/Events?id=${this.modalEvent.id}`
      )
      this.$emit('closeModal')
    },
    getModalEvent() {
      this.showModalEvent = true
    },
    async updateEvent() {
      await axios.put(
        `https://localhost:7101/api/Events?id=${this.modalEvent.id}`,
        this.editEvent
      )

      this.$emit('closeModal')
    },
  },
}
</script>

<style scoped>
.modal-window {
  height: 200px;
}
</style>
