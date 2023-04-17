<template>
  <li class="accommodation-list-item" v-for="(item, index) in listItem">
    <ul class="list-item">
      <li class="item">
        <ListTitle
          :titleContent="item.title"
          :serverCountry="item.emphasis"
        />
        <ul class="item-list-description" v-if="item.description">
          <li
            v-for="(description, index) in item.description"
            class="item-description"
          >
            <div class="item-image">
              <img
                class="image"
                src="../../assets/image/check.svg"
                alt="Check"
              />
            </div>
            <AccommodationParagraph :content="description" />
          </li>
        </ul>
      </li>
    </ul>
  </li>
</template>

<script>
import AccommodationParagraph from "../atoms/AccommodationParagraph.vue";
import ListTitle from "../atoms/ListTitle.vue";

export default {
  name: "AccommodationListItem",
  props: {
    listItem: {
      type: Array,
      default: [],
      required: true,
    },
  },
  data() {
    return {
      listItem: this.listItem,
    };
  },
  components: {
    AccommodationParagraph,
    ListTitle,
  },
};
</script>

<style lang="scss" scoped>
.accommodation-list-item {
  display: flex;
  gap: rem(16);
  align-items: center;

  .list-item {
    .item {
      .item-list-description {
				margin-top: rem(16);

        .item-description {
          display: flex;
					gap: rem(8);

					+.item-description {
						margin-top: rem(16);
					}
        }
      }
    }
  }

  .item-image {
    width: 24px;
    flex-shrink: 0;
    height: 20px;

    .image {
      display: block;
      width: 100%;
    }
  }

	+.accommodation-list-item {
		margin-top: rem(20);
	}
}
</style>
