<template>
  <div class="register-action">
    <ParagraphContent content="Ainda não tem conta?" />
    <router-link :to="linkRegister" class="register">Cadastre-se</router-link>
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
			linkRegister: this.registerLink
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
		align-items: center;
		justify-content: center;
		gap: 1ch;

		.register {
			color: $pink;
			text-decoration: underline;
			font-size: rem(18);
		}
	}
</style>
