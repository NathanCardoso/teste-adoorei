<template>
  <section class="user-login">
    <div class="container">
      <form>
        <TitleContent content="Entre na sua conta" />
        <ParagraphContent
          content="Para acessar sua conta informe seu e-mail e senha"
        />
      </form>
    </div>
  </section>
</template>

<script>
import ParagraphContent from "./atoms/ParagraphContent.vue";
import TitleContent from "./atoms/TitleContent.vue";

export default {
  name: "UserLogin",
  data() {
    return {};
  },
  components: {
    TitleContent,
    ParagraphContent,
  },
};
</script>

<style lang="scss" scoped>
.user-login {
  margin: 0 auto;
}
</style>
