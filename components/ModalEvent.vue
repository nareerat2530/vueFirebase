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
      // const currentEventDate =
      //   this.$store.getters.getCurrentAppointment.eventDate
      // console.log(currentEventDate)
      // this.$store.commit(
      //   'updateEventDate',
      //   new Date(currentEventDate).toISOString()
      // )
      console.log(this.$store.getters.getCurrentAppointment)
      await this.$store.dispatch(
        this.$store.getters.showAddEventModal ? 'addNewEvent' : 'updateEvent',
        this.$store.getters.getCurrentAppointment
      )
    },
  },
}
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* display: flex; */
  /* justify-content: center; */
  background-color: #000000da;
  z-index: 1;
}

.modal-window {
  text-align: center;
  background-color: rgb(244, 238, 238);
  height: 500px;
  width: 500px;
  /* margin-top: 10%; */
  margin: 100px auto;
  padding: 60px 0;
  border-radius: 20px;
  display: block;
  position: relative;
}
.close {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 20px;
}
form {
  max-width: 420px;
  margin: auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
</style>
