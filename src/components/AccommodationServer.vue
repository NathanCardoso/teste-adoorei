<template>
  <component :is="definedTag" class="accommodation-server" v-if="objectData">
    <AccommodationTag
      :text="textDynamic"
      :classTag="classDynamic"
      v-if="displayDynamic"
    />
    <div class="wrapper">
      <AccommodationNumber :content="dataObject.accommodation?.title" />
      <AccommodationPrice :price="dataObject.accommodation?.payment" />
      <div class="accommodation-details">
        <AccommodationDetails :content="dataObject.accommodation?.charge[0]" />
        <AccommodationDetails :content="dataObject.accommodation?.charge[1]" />
      </div>
      <AccommodationParagraph
        :content="dataObject.accommodation?.recommendation"
      />
      <div class="accommodation-button">
        <ButtonForm
          buttonName="Escolher esse plano"
          @submit="handleClick(objectData)"
        />
      </div>
      <AccommodationList :listArray="dataObject.benefits" />
    </div>
  </component>
</template>

<script>
import AccommodationNumber from "./atoms/AccommodationNumber.vue";
import AccommodationPrice from "./atoms/AccommodationPrice.vue";
import AccommodationDetails from "./atoms/AccommodationDetails.vue";
import AccommodationParagraph from "./atoms/AccommodationParagraph.vue";
import ButtonForm from "./atoms/ButtonForm.vue";
import AccommodationList from "./organisms/AccommodationList.vue";
import AccommodationTag from "./atoms/AccommodationTag.vue";

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
    tag: {
      type: String,
      default: "li",
    },
  },
  data() {
    return {
      classDynamic: this.dynamicClass,
      textDynamic: this.dynamicText,
      displayDynamic: this.dynamicDisplay,
      objectData: this.dataObject,
      definedTag: this.tag,
    };
  },
  components: {
    AccommodationNumber,
    AccommodationPrice,
    AccommodationDetails,
    AccommodationParagraph,
    ButtonForm,
    AccommodationList,
    AccommodationTag,
  },
  methods: {
    handleClick({ id }) {
      this.toAddPlanLocalStorage(id);
      this.replaceRouter("/register");
    },
    toAddPlanLocalStorage(planSelected) {
      localStorage.setItem("planSelected", planSelected);
    },
    replaceRouter(route) {
      this.$router.push(route);
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
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: rem(20);
  }

  .accommodation-paragraph {
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
