export const state = () => ({
  showEventModal: false,
  showAddEventModal: false,
  showEditEventModal: false,
  currentEventEdit: null,
})

export const getters = {
  showEventModal: (state) => state.showEventModal,
  showEditEventModal: (state) => state.showEditEventModal,
  currentEventEdit: (state) => state.currentEventEdit,
  showAddEventModal: (state) => state.showAddEventModal,
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
}
