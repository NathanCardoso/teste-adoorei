<template>
	<div class="accommodation-number">
	<h2>{{content}}</h2>
	</div>
</template>

<script>
export default {
	name: "AccommodationNumber",
	props: {
		content: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			content: this.content
		}
	}
}
</script>

<style lang="scss" scoped>
	.accommodation-number {
		color: $gray;
		text-align: center;
	}
</style>