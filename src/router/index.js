import {
  createWebHistory,
  createRouter
} from "vue-router";
import Form from "@/views/Form.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [{
    path: "/",
    name: "Form",
    component: Form,
  },
  { path: '/:path(.*)', name: "NotFound", component: NotFound, },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;