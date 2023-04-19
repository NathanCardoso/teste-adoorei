<template>
  <main class="default">
    <LogoLocaWeb />
    <div class="text-plans">
      <TitleContent
        contentValue="Você está muito próximo de mudar a forma de"
        emphasis="hospedar seu site"
      />
      <ParagraphContent content="Escolha o seu plano" />
    </div>
    <ul class="accommodations">
      <AccommodationServer
        v-for="(data, index) in accommodationPlan"
        :dataObject="data"
        dynamicText="mais vendido"
        dynamicClass="more-used"
        :dynamicDisplay="data.accommodation.moreUsed"
      />
    </ul>
  </main>
</template>

<script>
import LogoLocaWeb from "../components/atoms/LogoLocaWeb.vue";
import TitleContent from "../components/atoms/TitleContent.vue";
import ParagraphContent from "../components/atoms/ParagraphContent.vue";
import AccommodationServer from "../components/AccommodationServer.vue";
import accommodationPlan from "../../public/data/accommodationPlan.json";

export default {
  name: "UserPlans",
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

.text-plans {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: rem(20);
	
	.title {
		text-align: center;
	}
}

.accommodations {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: rem(24);
}
</style>
