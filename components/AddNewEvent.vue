<template>
  <div>
    <ModalEvent @submitForm="onAddEventForm" />
  </div>
</template>

<script>
import ModalEvent from './ModalEvent.vue'
export default {
  name: 'AddNewEvent',
  components: { ModalEvent },

  methods: {
    async onAddEventForm(e) {
      e.preventDefault()
      console.log('why not working')

      try {
        const response = await axios.post(
          'https://localhost:7101/api/Events/add',
          {
            form: {
              description: '',
              startDate: '',
            },
          }
        )

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
