<template>
  <main class="main">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>

export default {
  data() {
    return {};
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
  gap: rem(40);
}
</style>
