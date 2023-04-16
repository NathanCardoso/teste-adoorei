import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from "../views/UserLogin.vue"
import UserRegister from "../views/UserRegister.vue"

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "user-login",
			component: UserLogin
		},
		{
			path: "/plans",
			name: "plans",
			component: UserRegister
		}
	]
})

export default router