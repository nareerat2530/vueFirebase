<template>
  <div>
    <ModalEvent @banana="(u) => onAddEventForm(u)" />
  </div>
</template>

<script>
import axios from 'axios'

import ModalEvent from './ModalEvent.vue'
export default {
  name: 'AddNewEvent',
  components: { ModalEvent },
  data() {
    return {
      description: '',
      startDate: '',
      tezt: 'a',
    }
  },
  methods: {
    async onAddEventForm(u) {
      try {
        const response = await axios.post(
          'https://localhost:7101/api/Events/add',
          {
            description: u.description,
            startDate: u.startDate,
          }
        )
        console.log(response)

        if (response.status === 200) {
          this.$emit('closeModal')
        }
      } catch (e) {
        this.error = e.response.data.Message
        console.log(e.response.data.Message)
        console.log(this.description)
        console.log(this.startDate)
      }
    },
  },
}
</script>

<style></style>
