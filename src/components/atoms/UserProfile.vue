<template>
  <div class="user-profile" :class="{ expanded: isExpanded }">
    <button class="button-profile" @click="isExpanded = !isExpanded">
      {{ letterFirst || "J" }}
    </button>
    <button class="button-close-app" :class="{ visible: isExpanded }" @click="closeApp">
      Sair
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "UserProfile",
  data() {
    return {
      isExpanded: false,
      letterFirst: "",
    };
  },
  methods: {
    ...mapMutations(["CLEAR_USER"]),
    ...mapGetters(["userName"]),
    closeApp() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("planSelected");
      this.CLEAR_USER({});
      this.$router.push("/");
    },
  },
  computed: {
    firstLetter() {
      const letter = this.userName()?.charAt(0);
      return letter;
    },
  },
  beforeMount() {
    if (localStorage.getItem("token")) {
      this.letterFirst = "J";
    } else {
      this.letterFirst = this.firstLetter;
    }
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  padding: 1rem;
  background-color: transparent;
  transition: height 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(16);
  height: max-content;

  &.expanded {
    background: $white;
    border-radius: rem(4);
  }

  .button-profile {
    width: 60px;
    height: 60px;
    background: $gray_alt_1;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    font-size: rem(28);
		font-family: "Sora";
    color: $white;
  }

  .button-close-app {
    padding: 0.5rem 1rem;
    background: inherit;
    border: none;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    font-size: rem(20);
		font-family: "Sora";

    &:hover {
      background: $pink;
      border-radius: rem(4);
      color: $white;
      transition: all 0.3s;
    }

    &.visible {
      opacity: 1;
    }

    &.expanded {
      background-color: #fff;
      height: 7rem;
    }

    &.collapsed {
      height: 5rem;
    }
  }

	@media screen and (max-width: 767px) {
		position: absolute;
		right: rem(-16);
	}
}
</style>
