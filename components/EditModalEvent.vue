<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('closeModal')">
      <div class="modal-window" @click.stop>
        <h2>{{ modalEvent.description }}</h2>

        <button type="button" class="btn-cancel" @click="removeEvent">
          Remove
        </button>
        <button>Edit</button>
        <button @click="$emit('closeModal')">Cancel</button>
      </div>
    </div>
  </transition>
</template>
<script>
import axios from 'axios'

export default {
  props: {
    modalEvent: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {}
  },

  methods: {
    async removeEvent() {
      await axios.delete(
        `https://localhost:7101/api/Events?id=${this.modalEvent.id}`
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
