import axios from 'axios'
export const state = () => ({
  showEventModal: false,
  showAddEventModal: false,
  showEditEventModal: false,
  currentEventEdit: null,
  events: [],
  Appointment: {
    id: '',
    description: '',
    eventDate: new Date().toISOString(),
  },
  addEvent: null,
})

export const getters = {
  showEventModal: (state) => state.showEventModal,
  showEditEventModal: (state) => state.showEditEventModal,

  showAddEventModal: (state) => state.showAddEventModal,
  getEvents: (state) => state.events,

  getCurrentAppointment: (state) => state.Appointment,
  getAddEvent: (state) => state.addEvent,
}

export const mutations = {
  setShowEventModal(state, payload) {
    state.showEventModal = payload
  },
  setShowAddEventModal(state, payload) {
    state.showAddEventModal = payload
  },
  setShowEditEventModal(state, payload) {
    state.showEditEventModal = payload
  },
  setCurrentAppointment(state, payload) {
    state.Appointment = payload
  },
  closeAllModals(state) {
    state.showEventModal = false
    state.showEditEventModal = false
    state.showAddEventModal = false
  },
  setEvents(state, payload) {
    state.events = payload
  },
  updateDescription(state, payload) {
    state.Appointment.description = payload
  },

  updateEventDate(state, payload) {
    state.Appointment.eventDate = payload
  },
  addEvent(state, payload) {
    state.events.push(payload)
  },
}

export const actions = {
  async fetchEvents({ commit }) {
    try {
      const data = await axios.get('https://localhost:7101/api/Events')
      commit('setEvents', data.data)
    } catch (error) {
      alert(error)
      console.log(error)
    }
  },
  async deleteEvent({ commit }, payload) {
    const response = await axios.delete(
      `https://localhost:7101/api/Events?id=${payload}`
    )
    if (response.status === 200) {
      commit('setCurrentAppointment', {})
    }
  },
  async updateEvent({ commit }, payload) {
    payload.eventDate = new Date(payload.eventDate).toISOString()

    const response = await axios.put(
      `https://localhost:7101/api/Events?id=${payload.id}`,
      payload
    )
    if (response.status === 204) {
      commit('setCurrentAppointment', {})
      commit('closeAllModals')
    }
  },
  async addNewEvent({ commit }, payload) {
    try {
      const response = await axios.post(
        `https://localhost:7101/api/Events/add`,
        payload
      )
      if (response.status === 200) {
        commit('setCurrentAppointment', {})
        commit('closeAllModals')
      }
    } catch (e) {
      console.log(e)
    }
  },
}
