<template>
  <main class="default">
    <LogoLocaWeb />
    <div class="wrapper">
      <FormLogin />
      <RegisterAction registerLink="plans" />
    </div>
  </main>
</template>

<script>
import LogoLocaWeb from "../components/atoms/LogoLocaWeb.vue";
import FormLogin from "../components/FormLogin.vue";
import RegisterAction from "../components/molecules/RegisterAction.vue";

export default {
  name: "UserLogin",
  components: {
    LogoLocaWeb,
    FormLogin,
    RegisterAction,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	gap: rem(32);
	align-items: center;
}
</style>
