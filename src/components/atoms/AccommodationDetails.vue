<template>
	<div class="accommodation-details">
		<p class="details">{{content}}</p>
	</div>
</template>

<script>
export default {
	name: "AccommodationDetails",
	props: {
		content: {
			type: String,
			default: "",
			required: true
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
	.accommodation-details {
		display: flex;
		justify-content: center;

		.details {
			color: $gray;
			font-size: rem(16);
			line-height: rem(20);
			text-align: center;
		}
	}
</style>