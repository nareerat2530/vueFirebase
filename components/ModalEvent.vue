<template>
  <!-- <transition name="modal-fade"> -->
  <div class="modal-overlay" @click="onModalClose">
    <div class="modal-window" @click.stop>
      <form>
        <div class="form-group">
          <label for="description">Description</label>
          <input
            id="description"
            :value="Appointment.description"
            @change="setDescription"
            type="description"
            name="description"
            class="form-control"
            placeholder="description"
            required=""
          />
        </div>
        <div class="form-group">
          <label for="eventDate">Date</label>
          <input
            id="eventDate"
            :value="eventDate"
            @input="setDate"
            type="date"
            placeholder="Appointment.eventDate"
            name="startDate"
            class="form-control"
            required=""
          />
        </div>
      </form>
      <button type="button" class="btn-cancel" @click="onModalClose">
        Cancel
      </button>
      <button @click="onSaveButtonClick">Save</button>

      <div class="close" @click="onModalClose">
        <img class="close-img" src="~/assets/close-icon.svg" alt="" />
      </div>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>
import { mapState } from 'vuex'
import dayjs from 'dayjs'
export default {
  name: 'ModalEvent',

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
    },
    setDescription(e) {
      this.$store.commit('updateDescription', e.target.value)
    },
    setDate(e) {
      this.$store.commit('updateEventDate', e.target.value)
    },

    async onSaveButtonClick() {
      console.log(
        this.$store.getters.showAddEventModal ? 'addNewEvent' : 'updateEvent'
      )

      const currentEventDate =
        this.$store.getters.getCurrentAppointment.eventDate

      this.$store.commit(
        'updateEventDate',
        new Date(currentEventDate).toISOString()
      )

      await this.$store.dispatch(
        this.$store.getters.showAddEventModal ? 'addNewEvent' : 'updateEvent',
        this.$store.getters.getCurrentAppointment
      )
    },
  },
}
</script>


