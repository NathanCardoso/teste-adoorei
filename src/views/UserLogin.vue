<template>
	<LogoLocaWeb />
	<FormLogin />
	<RegisterAction registerLink="plans"/>
</template>

<script>
import LogoLocaWeb from "../components/atoms/LogoLocaWeb.vue"
import FormLogin from "../components/FormLogin.vue"
import RegisterAction from "../components/molecules/RegisterAction.vue"

export default {
	name: "UserLogin",
	components: {
		LogoLocaWeb,
		FormLogin,
		RegisterAction
	}
}
</script>

<style lang="scss" scoped>
	
</style>