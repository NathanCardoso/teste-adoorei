<template>
  <div class="register-action">
    <ParagraphContent content="Ainda não tem conta?" />
    <router-link :to="registerLink" class="register">Cadastre-se</router-link>
  </div>
</template>

<script>
import ParagraphContent from "../atoms/ParagraphContent.vue";
export default {
  name: "RegisterAction",
	props: {
		registerLink: {
			type: String,
			default: "/",
			required: true
		}
	},
	data() {
		return {
			registerLink: this.registerLink
		}
	},
  components: {
    ParagraphContent,
  },
};
</script>

<style lang="scss" scoped>
	.register-action {
		display: flex;
		flex-wrap: wrap;
		gap: 1ch;

		.register {
			color: $pink;
			text-decoration: underline;
			font-size: rem(18);
		}
	}
</style>
