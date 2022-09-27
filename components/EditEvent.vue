<template>
  <div class="modal-overlay">
    <div class="modal-window" @click.stop>
      <ModalEvent @banana="(u) => updateEvent(u)" />
    </div>
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
    showModalEvent: {
      type: Boolean,
    },
  },

  methods: {
    async updateEvent(u) {
      try {
        const response = await axios.put(
          `https://localhost:7101/api/Events?id=${this.modalEvent.id}`,
          {
            description: u.description,
            startDate: u.startDate,
          }
        )
        if (response.status === 200) {
          this.$emit('closeModal')

          console.log(this.showModalEvent)
        }
      } catch (e) {
        this.error = e.response.data.Message
        console.log(e.response.data.Message)
        console.log(this.modalEvent)
      }
    },
  },
}
</script>

<style></style>
