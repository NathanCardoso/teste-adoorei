<template>
  <li class="accommodation-server" v-if="dataObject">
    <AccommodationTag
      :text="dynamicText"
      :classTag="dynamicClass"
      v-if="dynamicDisplay"
    />
    <div class="wrapper">
      <AccommodationNumber :content="dataObject.accommodation?.title" />
      <AccommodationPrice :price="dataObject.accommodation?.payment" />
      <div class="accommodation-details">
        <AccommodationDetails :content="dataObject.accommodation?.charge[0]" />
        <AccommodationDetails :content="dataObject.accommodation?.charge[1]" />
      </div>
      <ParagraphContent :content="dataObject.accommodation?.recommendation" />
      <div class="accommodation-button">
        <ButtonForm
          buttonName="Escolher esse plano"
          @submit="handleClick(dataObject)"
        />
      </div>
      <AccommodationList :listArray="dataObject.benefits" />
    </div>
  </li>
</template>

<script>
import AccommodationNumber from "./atoms/AccommodationNumber.vue";
import AccommodationPrice from "./atoms/AccommodationPrice.vue";
import AccommodationDetails from "./atoms/AccommodationDetails.vue";
import ParagraphContent from "./atoms/ParagraphContent.vue";
import ButtonForm from "./atoms/ButtonForm.vue";
import AccommodationList from "./organisms/AccommodationList.vue";
import AccommodationTag from "./atoms/AccommodationTag.vue";
import { mapMutations } from "vuex";

export default {
  name: "AccommodationServer",
  props: {
    dynamicClass: {
      type: String,
      default: "",
      requried: true,
    },
    dynamicText: {
      type: String,
      default: "",
      required: true,
    },
    dynamicDisplay: {
      type: Boolean,
      default: false,
      required: true,
    },
    dataObject: {
      type: Object,
      default: {},
      requried: true,
    },
  },
  data() {
    return {
      dynamicClass: this.dynamicClass,
      dynamicText: this.dynamicText,
      dynamicDisplay: this.dynamicDisplay,
      dataObject: this.dataObject,
    };
  },
  components: {
    AccommodationNumber,
    AccommodationPrice,
    AccommodationDetails,
    ParagraphContent,
    ButtonForm,
    AccommodationList,
    AccommodationTag,
  },
  methods: {
    ...mapMutations(["SET_SELECT_PLAN"]),
    handleClick({ id }) {
      this.SET_SELECT_PLAN(id);
      this.$router.push("/register");
    },
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
    + .accommodation-details {
      margin-top: rem(8);
    }
  }

	.wrapper {
		max-height: 910px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: rem(20);
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

  @media screen and (max-width: 479px) {
    padding: rem(30) rem(24);
  }
}
</style>
