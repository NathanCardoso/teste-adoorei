<template>
  <li class="accommodation-list-item">
    <div class="item-image">
      <img class="image" src="../../assets/image/check.svg" alt="Check" />
    </div>
    <ParagraphContent />
  </li>
</template>

<script>
import ParagraphContent from "../atoms/ParagraphContent.vue";
export default {
  name: "AccommodationListItem",
  components: {
    ParagraphContent,
  },
};
</script>

<style lang="scss" scoped>
	.accommodation-list-item {
		display: flex;
		gap: rem(16);
		align-items: center;
		justify-content: center;

		.item-image {
			.image {
				display: block;
				width: 100%;
			}
		}
	}
</style>
