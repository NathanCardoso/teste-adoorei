<template>
  <div class="alert-status">
    <div class="container">
      <div :class="alertType">
        <div class="title">
          <h3 class="title-content">
            {{ alertType === "success" ? "Sucesso!" : "Atenção!" }}
          </h3>
        </div>
				<ParagraphContent :content="alertMensage"/>
      </div>
    </div>
  </div>
</template>

<script>
import ParagraphContent from "../atoms/ParagraphContent.vue"
export default {
  name: "AlertStatus",
  props: {
    typeAlert: {
      type: String,
      default: "",
      required: true,
    },
    mensageAlert: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      alertType: this.typeAlert,
      alertMensage: this.mensageAlert,
    };
  },
	components: {
		ParagraphContent
	}
};
</script>

<style lang="scss" scoped>
.alert-status {
	z-index: 1000;
  position: fixed;
  top: rem(8);
  right: 0;
  width: 100%;
  animation: mymove 0.4s;

  @keyframes mymove {
    0% {
      right: -100%;
    }

    75% {
      right: 15%;
    }

    100% {
      right: 0;
    }
  }

  .error {
    width: 100%;
    height: auto;
    background: $white;
    border-top: rem(1) solid $gray_alt;
    border-right: rem(1) solid $gray_alt;
    border-bottom: rem(1) solid $gray_alt;
    border-left: rem(6) solid red;

    .title {
      padding: rem(8) rem(16);
      border-bottom: rem(2) solid $gray;
    }

    .paragraph {
      padding: rem(16);
    }
  }

  .success {
    width: 100%;
    height: auto;
    background: $white;
    border-left: rem(6) solid #00ff00;
    border: rem(1) solid $gray_alt;

    .title {
      padding: rem(8) rem(16);
      border-bottom: rem(2) solid $gray_alt_1;
    }

    .paragraph {
      padding: rem(16);
    }
  }

  @media screen and (min-width: rem(480)) {
    max-width: rem(375);
    top: rem(8);
    right: rem(-5);
  }
}
</style>
