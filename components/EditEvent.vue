<template>
  <div class="modal-window">
    <ModalEvent @banana="(u) => updateEvent(u)" />
  </div>
</template>

<script>
import ModalEvent from './ModalEvent.vue'
import EditModalEvent from './EditModalEvent.vue'
import axios from 'axios'
export default {
  components: { ModalEvent, EditModalEvent },
  data() {
    return {
      description: '',
      startDate: '',
    }
  },
  props: {
    modalEvent: {
      type: Object,
      required: false,
    },
  },
  methods: {
    async updateEvent(u) {
      const banan = (this.description = u.description)
      console.log(banan)
      await axios.put(
        `https://localhost:7101/api/Events?id=${this.modalEvent.id}`,
        {
          description: u.description,
          startDate: u.startDate,
        }
      )

      this.$emit('closeModal')
    },
  },
}
</script>

<style></style>
