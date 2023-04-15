import { defineRule, validate } from "vee-validate";

const validateEmail = (value) => {
  if (!value) return "O campo e-mail é obrigatório";

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) return "Digite um e-mail valido";

  return true;
};

const validatePassword = (value) => {
  if (!value) return "O campo senha é obrigatório";
  if (value.length < 8) return "No mínimo 8 caracteres";

  return true;
};

export default function setupValidators() {
  defineRule("validateEmail", validateEmail);
  defineRule("validatePassword", validatePassword);
}
