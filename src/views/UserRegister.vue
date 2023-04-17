<template>
  <LogoLocaWeb />
  <TitleContent
    contentValue="Você está muito próximo de mudar a forma de"
    emphasis="hospedar seu site"
  />
  <section class="user-register">
    <FormRegister />
		
  </section>
</template>

<script>
import LogoLocaWeb from "../components/atoms/LogoLocaWeb.vue";
import TitleContent from "../components/atoms/TitleContent.vue";
import FormRegister from "../components/FormRegister.vue";

export default {
  name: "UserRegister",
  components: {
    LogoLocaWeb,
    TitleContent,
    FormRegister,
  },
};
</script>

<style lang="scss" scoped></style>
