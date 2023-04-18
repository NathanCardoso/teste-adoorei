import axios from "axios"

const url = "https://fakestoreapi.com/"

const urlInstance = axios.create({
	baseURL: url
})

urlInstance.interceptors.request.use(
	function(config) {
		const token = localStorage.token
		if(token) {
			config.headers.Authorization = token
		}
		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

export const api = {
	post(endpoint, body) {
		return urlInstance.post(endpoint, body)
	},
	login(body) {
		return urlInstance.post(
			url + "auth/login",
			body
		)
	}
}