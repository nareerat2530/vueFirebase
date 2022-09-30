import axios from 'axios'
export const state = () => ({
  showEventModal: false,
  showAddEventModal: false,
  showEditEventModal: false,
  currentEventEdit: null,
  events: [],
  form: {
    description: '',
    startDate: '',
  },
})

export const getters = {
  showEventModal: (state) => state.showEventModal,
  showEditEventModal: (state) => state.showEditEventModal,
  currentEventEdit: (state) => state.currentEventEdit,
  showAddEventModal: (state) => state.showAddEventModal,
  getEvents: (state) => state.events,
  description: (state) => state.form.description,
  startDate: (state) => state.form.startDate,
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
  setEvents(state, events) {
    state.events = events
  },
  setForm(state, form) {
    ;(state.form = form.description), (state.form = form.startDate)
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
    await axios.delete(`https://localhost:7101/api/Events?id=${payload}`)

    console.log('iam a payload', payload)
  },
  // async updateEvent({ commit }, form) {
  //   try {
  //     const response = await axios.put(
  //       `https://localhost:7101/api/Events?id=${payload}`,
  //       {
  //         description: form.description,
  //         startDate: form.startDate,
  //       }
  //     )
  //     if (response.status === 200) {
  //       this.$emit('closeModal')
  //     }
  //   } catch (e) {
  //     this.error = e.response.data.Message
  //     console.log(e.response.data.Message)
  //   }
  // },
}
