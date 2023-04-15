<template>
  <section class="user-login">
    <div class="container">
      <form class="form-login">
        <div class="form-header">
          <TitleContent content="Entre na sua conta" />
          <ParagraphContent
            content="Para acessar sua conta informe seu e-mail e senha"
          />
        </div>
        <InputForm
          inputId="email"
          inputName="userEmail"
          inputType="email"
          inputPlaceholder="Seu e-mail"
          labelContent="E-mail"
        />
        <InputForm
          inputId="password"
          inputName="userPassword"
          inputType="password"
          inputPlaceholder="Sua senha"
          labelContent="Senha"
        />
      </form>
    </div>
  </section>
</template>

<script>
import TitleContent from "./atoms/TitleContent.vue";
import ParagraphContent from "./atoms/ParagraphContent.vue";
import InputForm from "./atoms/InputForm.vue";

export default {
  name: "UserLogin",
  data() {
    return {};
  },
  components: {
    TitleContent,
    ParagraphContent,
    InputForm,
  },
};
</script>

<style lang="scss" scoped>
.user-login {
  .form-login {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: rem(20);

		.form-header {
			display: flex;
			flex-direction: column; 
			gap: rem(10);
		}
  }
}
</style>
