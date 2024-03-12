const routes = [
  {
    path: "/",
    component: () => import("layouts/login/LoginPageLayout.vue"),
    children: [
      { path: "", component: () => import("pages/login/LoginPage.vue") },
      {
        path: "/ForgotPassword",
        component: () => import("pages/login/ForgotPassword.vue"),
      },
      {
        path: "/ChangePassword",
        component: () => import("pages/login/ChangePassword.vue"),
      },
      {
        path: "/NewPassword",
        component: () => import("pages/login/NewPassword.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
