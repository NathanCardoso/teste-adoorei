<template>
  <div class="user-profile" :class="{ expanded: isExpanded }">
    <button class="button-profile" @click="isExpanded = !isExpanded">J</button>
    <button class="button-close-app" :class="{ visible: isExpanded }">Sair</button>
  </div>
</template>

<script>
export default {
	name: "UserProfile",
  data() {
    return {
      isExpanded: false,
    };
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
}
</style>
