<template>
  <div class="reset-password">
    <a href="#" class="reset">Esqueci minha senha</a>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",
};
</script>

<style lang="scss" scoped>
.reset-password {
	display: flex;
	justify-content: flex-end;
	margin-top: rem(-5);

	.reset {
		color: $gray;
		text-decoration: none;
		font-size: rem(16);
		line-height: rem(20);
	}
}
</style>
