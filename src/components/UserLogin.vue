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
        <div class="form-input">
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
          <ResetPassword />
        </div>
        <div class="form-button">
          <ButtonForm buttonName="Fazer Login" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import TitleContent from "./atoms/TitleContent.vue";
import ParagraphContent from "./atoms/ParagraphContent.vue";
import InputForm from "./atoms/InputForm.vue";
import ResetPassword from "./atoms/ResetPassword.vue";
import ButtonForm from "./atoms/ButtonForm.vue";

export default {
  name: "UserLogin",
  data() {
    return {};
  },
  components: {
    TitleContent,
    ParagraphContent,
    InputForm,
    ResetPassword,
    ButtonForm,
  },
};
</script>

<style lang="scss" scoped>
.user-login {
	max-width: 400px;
	padding: rem(30);
	background: $white;
	border-radius: rem(4);
	border: rem(1) solid $gray_alt_1;

  .form-login {
    .form-header {
      display: flex;
      flex-direction: column;
      gap: rem(10);
    }

    .form-input {
      margin-top: rem(20);
      display: flex;
      flex-direction: column;
      gap: rem(20);
    }

		.form-button {
			margin-top: rem(24);
		}
  }
}
</style>
