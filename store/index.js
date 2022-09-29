import axios from 'axios'
export const state = () => ({
  showEventModal: false,
  showAddEventModal: false,
  showEditEventModal: false,
  currentEventEdit: null,
  events: [],
})

export const getters = {
  showEventModal: (state) => state.showEventModal,
  showEditEventModal: (state) => state.showEditEventModal,
  currentEventEdit: (state) => state.currentEventEdit,
  showAddEventModal: (state) => state.showAddEventModal,
  getEvents: (state) => state.events
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
  setCurrentEventEdit(state, payload) {
    state.currentEventEdit = payload
  },
  closeAllModals(state) {
    state.showEventModal = false
    state.showEditEventModal = false
    state.showAddEventModal = false
  },
  set_events(state, events) {
    state.events = events
  }
}

export const actions = {
  async fetchEvents({ commit }) {
    try {
      const data = await axios.get('https://localhost:7101/api/Events')
      commit('set_events', data.data)
    }
    catch (error) {
      alert(error)
      console.log(error)
    }
  },
  async deleteEvent({ commit }, payload) {
    await axios.delete(
      `https://localhost:7101/api/Events?id=${payload}`
    )
    // this.$emit('closeModal')
    console.log('iam a payload', payload)
  },


}