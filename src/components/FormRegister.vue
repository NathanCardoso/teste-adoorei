<template>
  <section class="form">
    <div class="container">
      <Form @submit="onSubmit" class="form-login">
        <div class="form-header">
          <TitleContent contentValue="Dados pessoais" />
          <ParagraphContent
            content="informe seus dados pessoais para acesso à sua conta"
          />
        </div>
        <div class="form-input">
          <InputForm
            inputId="user-name"
            inputName="username"
            inputType="text"
            inputPlaceholder="Informe seu nome completo"
            labelContent="Nome completo"
            inputRule="validateFullName"
            @inputValue="receiveInputValue"
          />
          <InputForm
            inputId="user-phone"
            inputName="phone"
            inputType="tel"
            inputPlaceholder="(99) 99999-0000"
            labelContent="Celular"
            inputRule="validatePhone"
            inputMask="(##) #####-####"
            inputMaxLength="13"
            @inputValue="receiveInputValue"
          />
          <InputForm
            inputId="user-email"
            inputName="email"
            inputType="email"
            inputPlaceholder="Seu e-mail"
            labelContent="E-mail"
            inputRule="validateEmail"
            @inputValue="receiveInputValue"
          />
          <InputForm
            inputId="user-password"
            inputName="password"
            inputType="password"
            inputPlaceholder="Sua senha"
            labelContent="Senha"
            inputRule="validatePassword"
            @inputValue="receiveInputValue"
          />
          <div class="confirm-password">
            <InputForm
              inputId="userConfirmed"
              inputName="userConfirmedPassword"
              inputType="password"
              inputPlaceholder="Sua senha"
              labelContent="Confirme sua senha"
              inputRule="validatePassword|confirmedPassword:password"
            />
            <InputAlert text="No mínimo 8 caracteres" />
          </div>
        </div>
        <div class="form-site">
          <TitleContent contentValue="Dados do seu site" />
          <InputForm
            inputId="user-site"
            inputName="site"
            inputType="text"
            inputPlaceholder="Meu site"
            labelContent="Nome do seu site"
            inputRule="validateSiteName"
            @inputValue="receiveInputValue"
          />
          <InputAlert text="Exatamente igual o título do seu site" />
        </div>
        <div class="complete-registration">
          <InputCheckbox @checkValue="receiveCheckValue" />
          <div class="paragraph">
            <p class="paragraph-content">
              Ao concluir com seu cadastro você concorda com nossos
              <a href="#" class="link">termos de uso</a> e
              <a href="#" class="link">politicas de privacidade.</a>
            </p>
          </div>
        </div>
        <div class="form-button">
          <ButtonForm
            buttonName="Criar conta"
            :disabled="!receiveCheck"
            :class="{ disabled: !receiveCheck }"
          />
        </div>
      </Form>
    </div>
  </section>
</template>

<script>
import TitleContent from "./atoms/TitleContent.vue";
import ParagraphContent from "./atoms/ParagraphContent.vue";
import InputForm from "./atoms/InputForm.vue";
import InputCheckbox from "../components/atoms/InputCheckbox.vue";
import ResetPassword from "./atoms/ResetPassword.vue";
import ButtonForm from "./atoms/ButtonForm.vue";
import { Form } from "vee-validate";
import InputAlert from "../components/atoms/InputAlert.vue";

export default {
  name: "UserLogin",
  data() {
    return {
      receiveInput: {},
      receiveCheck: false,
			planSelected: ""
    };
  },
  components: {
    TitleContent,
    ParagraphContent,
    InputForm,
    ResetPassword,
    ButtonForm,
    Form,
    InputAlert,
    InputCheckbox,
  },
  methods: {
    receiveInputValue({ name, value }) {
      this.receiveInput[name] = value;
    },
    receiveCheckValue(value) {
      this.receiveCheck = value;
    },
    async onSubmit() {
			try {
				await this.$store.dispatch("userCreate", this.receiveInput)
				localStorage.setItem("user", JSON.stringify(this.receiveInput))
				if(localStorage.getItem("user")) {
					this.$router.push("/account")
				}
			} catch(error) {
				console.log(error, "lululu")
			}
    },
  },
	beforeMount() {
		this.receiveInput.planSelected = localStorage.getItem("planSelected")
	}
};
</script>

<style lang="scss" scoped>
.form {
  width: 500px;
  padding: rem(30);
  background: $white;
  border-radius: rem(4);
  border: rem(1) solid $gray_alt_1;

  .form-login {
    .form-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: rem(10);
    }

    .form-input {
      margin: rem(20) 0 rem(20);
      display: flex;
      flex-direction: column;
      gap: rem(20);

      .confirm-password {
        display: flex;
        flex-direction: column;
        gap: rem(8);
      }
    }

    .form-site {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: rem(10);
      width: 100%;
      padding: rem(20) 0;
      border-top: rem(1) solid $gray_alt_1;
      border-bottom: rem(1) solid $gray_alt_1;
    }

    .complete-registration {
      margin-top: rem(20);
      display: flex;

      .paragraph {
        .paragraph-content {
          font-size: rem(18);
          line-height: rem(22);
          color: $black;

          .link {
            color: inherit;
          }
        }
      }
    }

    .form-button {
      margin-top: rem(24);
    }
  }

  @media screen and (max-width: 767px) {
    width: auto;
  }

  @media screen and (max-width: 479px) {
    width: auto;
  }
}
</style>
