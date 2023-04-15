<template>
  <div class="register-action">
    <ParagraphContent content="Ainda não tem conta?" />
    <a href="#" class="register">Cadastre-se</a>
  </div>
</template>

<script>
import ParagraphContent from "../atoms/ParagraphContent.vue";
export default {
  name: "RegisterAction",
  components: {
    ParagraphContent,
  },
};
</script>

<style lang="scss" scoped>
	.register-action {
		display: flex;
		gap: 1ch;

		.register {
			color: $pink;
			text-decoration: underline;
			font-size: rem(18);
		}
	}
</style>
