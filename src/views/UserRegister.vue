<template>
	<LogoLocaWeb />
	<TitleContent contentValue="Você está muito próximo de mudar a forma de" emphasis="hospedar seu site"/>
	<ParagraphContent content="Escolha o seu plano"/>
</template>

<script>
import LogoLocaWeb from "../components/atoms/LogoLocaWeb.vue"
import TitleContent from "../components/atoms/TitleContent.vue"
import ParagraphContent from "../components/atoms/ParagraphContent.vue"

export default {
	name: "UserRegister",
	components: {
		LogoLocaWeb,
		TitleContent,
		ParagraphContent
	}
}
</script>

<style lang="scss" scoped>
	
</style>