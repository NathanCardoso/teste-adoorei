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

	.reset {
		color: $gray;
		text-decoration: none;
		font-weight: bold;
	}
}
</style>
