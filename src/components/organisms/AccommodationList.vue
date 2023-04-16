<template>
	<ul class="accommodation-list-item">
		<AccommodationListItem :listItem="listArray"/>
	</ul>
</template>

<script>
import AccommodationListItem from "../molecules/AccommodationListItem.vue"
export default {
	name: "AccommodationList",
	props: {
		listArray: {
			type: Array,
			default: [],
			required: true
		}
	},
	data() {
		return {
			listArray: this.listArray
		}
	},
	components: {
		AccommodationListItem
	},
}
</script>

<style lang="scss">
	.accommodation-list-item {
		max-width: 280px;
	}
</style>