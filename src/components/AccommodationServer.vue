<template>
  <li class="accommodation-server">
		<AccommodationTag :text="dynamicText" :classTag="dynamicClass" v-if="dataObject.accommodation.moreUsed"/>
    <AccommodationNumber :content="dataObject.accommodation.title" />
    <AccommodationPrice :price="dataObject.accommodation.payment" />
    <div class="accommodation-details">
      <AccommodationDetails :content="dataObject.accommodation.charge[0]" />
      <AccommodationDetails :content="dataObject.accommodation.charge[1]" />
    </div>
    <ParagraphContent :content="dataObject.accommodation.recommendation" />
    <div class="accommodation-button">
      <ButtonForm buttonName="Escolher esse plano" />
    </div>
    <AccommodationList :listArray="dataObject.benefits" />
  </li>
</template>

<script>
import AccommodationNumber from "./atoms/AccommodationNumber.vue";
import AccommodationPrice from "./atoms/AccommodationPrice.vue";
import AccommodationDetails from "./atoms/AccommodationDetails.vue";
import ParagraphContent from "./atoms/ParagraphContent.vue";
import ButtonForm from "./atoms/ButtonForm.vue";
import AccommodationList from "./organisms/AccommodationList.vue";
import AccommodationTag from "./atoms/AccommodationTag.vue"

export default {
  name: "AccommodationServer",
  props: {
		dynamicClass: {
			type: String,
			default: "",
			requried: true
		},
		dynamicText: {
			type: String,
			default: "",
			required: true
		},
		dataObject: {
			type: Object,
			default: {},
			requried: true
		}
  },
  data() {
    return {
			dynamicClass: this.dynamicClass,
			dynamicText: this.dynamicText,
			dataObject: this.dataObject
    };
  },
  components: {
    AccommodationNumber,
    AccommodationPrice,
    AccommodationDetails,
    ParagraphContent,
    ButtonForm,
    AccommodationList,
		AccommodationTag
  },
};
</script>

<style lang="scss" scoped>
.accommodation-server {
  max-width: 280px;
  background: $white;
  padding: rem(30) rem(36);
  border-radius: rem(4);
  display: flex;
  flex-direction: column;
  gap: rem(20);
	position: relative;

	.accommodation-details {
		+.accommodation-details {
			margin-top: rem(8);
		}
	}

  .paragraph {
    padding: rem(16);
    border-top: rem(1) solid $gray_alt;
    border-bottom: rem(1) solid $gray_alt;
    text-align: center;
    line-height: rem(26);
  }

  .accommodation-button {
    padding: 0 rem(16);
  }
}
</style>
