<template>
  <main class="default">
    <LogoLocaWeb />
    <TitleContent
      contentValue="Você está muito próximo de mudar a forma de"
      emphasis="hospedar seu site"
    />

    <div class="user-register">
      <FormRegister />
      <div class="wrapper-accommodation">
        <AccommodationSever
          v-for="(data, index) in dataObject"
          :dataObject="data.id === planSelectedLocalStorage ? data : null"
          dynamicText="Plano escolhido"
          dynamicClass="chosen-product"
          :dynamicDisplay="true"
					:dynamicButton="false"
          tag="div"
        />
        <ButtonPlan @submit="replacePlan" />
      </div>
    </div>
  </main>
</template>

<script>
import LogoLocaWeb from "../components/atoms/LogoLocaWeb.vue";
import TitleContent from "../components/atoms/TitleContent.vue";
import FormRegister from "../components/FormRegister.vue";
import AccommodationSever from "../components/AccommodationServer.vue";
import accommodationPlan from "../../public/data/accommodationPlan.json";
import ButtonPlan from "../components/atoms/ButtonPlan.vue";

export default {
  name: "UserRegister",
  data() {
    return {
      accommodationPlan,
      dataObject: [],
      planSelectedLocalStorage: 0,
    };
  },
  components: {
    LogoLocaWeb,
    TitleContent,
    FormRegister,
    AccommodationSever,
    ButtonPlan,
  },
  computed: {
    statePlanSelected() {
      return this.$store.state.selectPlan;
    },
  },
  methods: {
    replacePlan() {
      this.$router.push("/plans");
    },
  },
  beforeMount() {
    this.dataObject = Array.from(accommodationPlan);
    this.planSelectedLocalStorage = Number(
      localStorage.getItem("planSelected")
    );
  },
  mounted() {
    const userRegister = document.querySelector(".user-register .form");
    const userRegisterWrapper = document.querySelector(
      ".user-register .wrapper"
    );
    userRegisterWrapper.style.maxHeight = userRegister.clientHeight - 60 + "px";
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
}

.user-register {
  display: flex;
  align-items: flex-start;
  gap: rem(20);

  .wrapper-accommodation {
    position: relative;
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
}
</style>
