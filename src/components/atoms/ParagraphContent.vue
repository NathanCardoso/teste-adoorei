<template>
	<div class="paragraph">
		<p class="paragraph-content">{{content}}</p>
	</div>
</template>

<script>
export default {
	name: "ParagraphContent",
	props: {
		content: {
			type: String,
			default: "",
			required: true
		}
	},
	data() {
		return {
			content: this.content,
		}
	}
}
</script>

<style lang="scss" scoped>
	.paragraph {
		.paragraph-content {
			font-size: rem($paragraphSize);
			line-height: rem(22);
			color: $black;
		}
	}
</style>