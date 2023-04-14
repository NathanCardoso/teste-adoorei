<template>
	<p class="paragraph">{{helloWord}}</p>
</template>

<script>
export default {
	name: 'helloWorld',
	data() {
		return {
			helloWord: 'Ola mundo'
		}
	}
}
</script>

<style lang="scss">
	.paragraph {
		color: $gray_alt;
		font-size: rem(75);
		font-family: $family;
	}
</style>