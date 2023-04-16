<template>
  <LogoLocaWeb />
  <TitleContent
    contentValue="Você está muito próximo de mudar a forma de"
    emphasis="hospedar seu site"
  />
  <ParagraphContent content="Escolha o seu plano" />
  <ul class="accommodations">
    <AccommodationServer
      v-for="(data, index) in accommodationPlan"
      :dataObject="data"
			dynamicText="mais vendido"
			dynamicClass="more-used"
    />
  </ul>
</template>

<script>
import LogoLocaWeb from "../components/atoms/LogoLocaWeb.vue";
import TitleContent from "../components/atoms/TitleContent.vue";
import ParagraphContent from "../components/atoms/ParagraphContent.vue";
import AccommodationServer from "../components/AccommodationServer.vue";
import accommodationPlan from "../../public/data/accommodationPlan.json";

export default {
  name: "UserRegister",
  data() {
    return {
      accommodationPlan,
    };
  },
  components: {
    LogoLocaWeb,
    TitleContent,
    ParagraphContent,
    AccommodationServer,
  },
};
</script>

<style lang="scss" scoped>
.accommodations {
  display: flex;
  flex-wrap: wrap;
  gap: rem(20);
}
</style>
