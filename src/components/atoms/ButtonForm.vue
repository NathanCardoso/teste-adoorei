<template>
	<button class="button-form">{{buttonName}}</button>
</template>

<script>
export default {
	name: "ButtonForm",
	props: {
		buttonName: {
			type: String,
			default: "",
			required: true,
		}
	},
	data() {
		return {
			buttonName: this.buttonName
		}
	},
}
</script>

<style lang="scss">
	.button-form {
		border: none;
		border-radius: rem(4);
		background: $pink;
		color: $white;
		width: 100%;
		padding: rem(20) 0;
		text-align: center;
		text-transform: uppercase;
		font-size: rem(16);
		cursor: pointer;
	}
</style>