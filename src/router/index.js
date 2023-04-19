import { createRouter, createWebHistory } from "vue-router";
import UserLogin from "../views/UserLogin.vue";
import UserPlans from "../views/UserPlans.vue";
import UserRegister from "../views/UserRegister.vue";
import UserAccount from "../views/UserAccount.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "user-login",
      component: UserLogin,
    },
    {
      path: "/plans",
      name: "plans",
      component: UserPlans,
    },
    {
      path: "/register",
      name: "user-register",
      component: UserRegister,
    },
    {
      path: "/account",
      name: "user-account",
      component: UserAccount,
      meta: {
        requiresAuth: true,
      },
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
	const auth = localStorage.getItem("user") || localStorage.getItem("token")

  if (requiresAuth && !auth) {
		next("/");
  } else {
		next()
	}

});

export default router;
