import { createStore } from 'vuex'
import { api } from "../assets/js/services"

export default createStore({
  state: {
		selectPlan: 0,
		user: {}
  },
  mutations: {
		GET_SELECT_PLAN(state) {
			return state.selectPlan
		},
		SET_SELECT_PLAN(state, payload) {
			state.selectPlan = payload
		},
		CREATE_USER(state, payload) {
			state.user = Object.assign(state.user, payload)
		}
  },
  actions: {
		userCreate(context, payload) {
			context.commit("CREATE_USER", payload)
			return api.post("/users", payload)
			this.$router.push("/account")
		}
  },
  getters: {
  }
})