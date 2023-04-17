import { createStore } from 'vuex'

export default createStore({
  state: {
		selectPlan: 0
  },
  mutations: {
		GET_SELECT_PLAN(state) {
			return state.selectPlan
		},
		SET_SELECT_PLAN(state, payload) {
			state.selectPlan = payload
		}
  },
  actions: {
  },
  getters: {
  }
})