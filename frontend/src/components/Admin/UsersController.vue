<template>
  <div class="flex">
    <side-bar :links="links" @loadComponent="mountCurrentComponent"></side-bar>
    <component
      class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
      :is="currentComponent ? currentComponent : 'users-table'"
    />
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import { defineAsyncComponent } from "vue";

export default {
  data() {
    return {
      links: [
        {
          name: "Список пользователей",
          active: true,
          componentName: "users-table",
        },
        {
          name: "заглушка",
          active: false,
          componentName: "puk",
        },
      ],
      currentComponent: '',
    };
  },
  components: {
    SideBar,
    UsersTable: defineAsyncComponent(() => import("./UsersTable.vue")),
  },
  methods: {
    mountCurrentComponent(data) {
      this.currentComponent = data.toMountComponent;
    },
  },
};
</script>

<style></style>
