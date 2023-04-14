<template>
	<LogoLocaWeb />
	<UserLogin/>
</template>

<script>
import LogoLocaWeb from "./components/atoms/LogoLocaWeb.vue"
import  UserLogin from './components/UserLogin.vue'

export default {
	data() {
		return {}
	},
	components: {
		UserLogin,
		LogoLocaWeb
	}
}
</script>

<style lang="scss">
	
</style>