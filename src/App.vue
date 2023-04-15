<template>
  <main class="main">
    <LogoLocaWeb />
    <UserLogin />
  </main>
</template>

<script>
import LogoLocaWeb from "./components/atoms/LogoLocaWeb.vue";
import UserLogin from "./components/UserLogin.vue";

export default {
  data() {
    return {};
  },
  components: {
    UserLogin,
    LogoLocaWeb,
  },
};
</script>

<style lang="scss">
.main {
	height: 100vh;
  display: flex;
  justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: rem(40)
}
</style>
