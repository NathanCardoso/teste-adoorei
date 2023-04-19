<template>
  <div class="user-account">
    <div class="wrapper">
      <aside class="aside-logo">
        <LogoLocaWeb />
      </aside>
      <section class="user-content">
        <div class="user">
          <TitleContent :contentValue="nameUser" />
          <ParagraphContent
            content="Seja bem vindo a sua conta de hospedagem."
          />
          <div class="video">
            <iframe
              class="video-content"
              src="https://www.youtube.com/embed/fpa2W3YNg0Q"
            />
          </div>
        </div>
        <CenterHelp link="/account" />
      </section>
      <UserProfile />
    </div>
  </div>
</template>

<script>
import LogoLocaWeb from "../components/atoms/LogoLocaWeb.vue";
import UserProfile from "../components/atoms/UserProfile.vue";
import ParagraphContent from "../components/atoms/ParagraphContent.vue";
import TitleContent from "../components/atoms/TitleContent.vue";
import CenterHelp from "../components/molecules/CenterHelp.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "UserAccount",
  components: {
    LogoLocaWeb,
    UserProfile,
    TitleContent,
    ParagraphContent,
    CenterHelp,
  },
  data() {
    return {
      nameUser: "",
    };
  },
  methods: {
    ...mapMutations(["SET_USER", "CLEAR_USER"]),
    ...mapGetters(["userName"]),
    getUser() {
      const user = JSON.parse(localStorage.getItem("user"));
      return user;
    },
  },
  computed: {
    wellcomeUserName() {
      const name = this.userName().split(" ");
      return `Olá ${name[0]},`;
    },
  },
  beforeMount() {
    this.$store.state.user.username ?? this.SET_USER(this.getUser());

    if (localStorage.getItem("token")) {
      this.nameUser = "Olá João,";
    } else {
      this.nameUser = this.wellcomeUserName;
    }
  },
};
</script>

<style lang="scss" scoped>
.user-account {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 rem(24);

  .wrapper {
    margin-top: rem(48);
    height: 100vh;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: rem(48);

    .user-content {
      margin-top: rem(92);
      grid-template-rows: auto auto 1fr;

      .paragraph {
        margin: rem(16) 0 rem(32) 0;
      }

      .video {
        height: 70vh;

        .video-content {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .help-action {
        margin: rem(24) 0 rem(40);
      }
    }
  }

  @media screen and (max-width: 767px) {
    .wrapper {
      grid-template-columns: 1fr;
      gap: rem(24);
      margin-top: rem(24);
      position: relative;
      justify-items: start;

      .user-content {
        margin-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 85vh;

        .video {
          height: 58vh;
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    .wrapper {
      .aside-logo {
        align-self: center;
      }

      .user-content {
        .video {
          height: 36vh;
        }
      }
    }
  }
}
</style>
