<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
    @click="onModalClose"
  >
    <div
      class="absolute inset-0 h-screen flex justify-center items-center"
      @click.stop
    >
      <div
        class="w-2/4 lg:w-4/12 md:py-12 p-5 rounded-lg bg-purple-300  shadow-2xl shadow-black"
      >
        <div class="close" @click="onModalClose">
          <img class="close-img" src="~/assets/close-icon.svg" alt="" />
        </div>
        <h3
        v-if="!this.$store.getters.isEditing"
          class="mb-4 text-xl py10 font-medium text-gray-900 dark:text-white text-center"
        >
          Add new Appointment
        </h3>
        <h3
        v-else
          class="mb-4 text-xl py10 font-medium text-gray-900 dark:text-white text-center"
        >
          Edit Appointment
        </h3>
        <form class="lg:px-8 pt-6 pb-8 mb-4 @submit.prevent rounded">
          <div class="mb-4">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="description"
            >
              Description
            </label>
            <input
              class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="description"
              :value="Appointment.description"
              @change="setDescription"
              type="description"
              name="description"
              placeholder="description"
              required
            />
          </div>
          <div class="mb-4">
            <div class="mb-4 md:mr-2 md:mb-0">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="eventDate"
              >
                Event Date
              </label>
              <input
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="eventDate"
                :value="eventDate"
                @input="setDate"
                type="date"
                placeholder="Appointment.eventDate"
                name="startDate"
                required=""
              />
            </div>
          </div>
        </form>
        <div class="inline-flex  items-apart md:items-center">
          <Button buttonText="Cancel" @clicked="onModalClose" />
          <Button buttonText="Save" @clicked="onSaveButtonClick" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dayjs from 'dayjs'
import Button from './Button.vue'
export default {
  components: { Button },
  name: 'ModalEvent',

  data(){
    return{
      errors:[]
    }
  },
  computed: {
    ...mapState({
      Appointment: (state) => state.Appointment,

      eventDate: (state) =>
        dayjs(state.Appointment.eventDate).format('YYYY-MM-DD'),
    }),
  },

  methods: {
    onModalClose() {
      this.$store.commit('setCurrentAppointment', {})
      this.$emit('closeModal')
      this.$store.commit('setIsEditing', false)
    },
    checkForm(e) {
      this.errors = []
    

      if (!this.description) {
        this.errors.push('Sorry, the description is required')
      }
      if (!this.errors.length) {
        this.onSaveButtonClick()

      }
     
    },
    setDescription(e) {
      this.$store.commit('updateDescription', e.target.value)
    },
    setDate(e) {
      this.$store.commit('updateEventDate', e.target.value)
    },

    async onSaveButtonClick() {
  

      
      const currentEventDate =
        this.$store.getters.getCurrentAppointment.eventDate

      this.$store.commit(
        'updateEventDate',
        new Date(currentEventDate).toISOString()
      )
      if(!currentEventDate) {
        this.$store.commit(
        'updateEventDate',
        dayjs().format("YYYY-MM-DD")
      )
      }

      await this.$store.dispatch(
        this.$store.getters.isEditing ? 'updateEvent' : 'addNewEvent',
        this.$store.getters.getCurrentAppointment
      )
    },
  },
}
</script>
