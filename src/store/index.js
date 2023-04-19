import { createStore } from 'vuex'
import { api } from "../assets/js/services"

export default createStore({
  state: {
		user: {}
  },
  mutations: {
		CREATE_USER(state, payload) {
			state.user = Object.assign(state.user, payload)
		},
		SET_USER(state, payload) {
			state.user = Object.assign(state.user, payload)
		},
		CLEAR_USER(state, payload) {
			state.user = Object.assign(state.user, payload)
		}
  },
  actions: {
		userCreate(context, payload) {
			context.commit("CREATE_USER", payload)
			return api.post("/users", payload)
			this.$router.push("/account")
		},
		userLogin(context, payload) {
			return api.login({
				username: payload.name,
				password: payload.password
			}).then(response => {
				localStorage.token = `Bearer ${response.data.token}`
			})
		}
  },
  getters: {
		userName(state) {
			return state.user.username
		}
  }
})