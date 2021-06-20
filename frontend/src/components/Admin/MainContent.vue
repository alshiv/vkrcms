<template>
  <main>
    <div>
      <component :is="currentComponent ? currentComponent : 'main-admin'" />
    </div>
  </main>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  props: {
    current: String,
  },
  components: {
    UsersController: defineAsyncComponent(() => import("./UsersController.vue")),
    MainAdmin: defineAsyncComponent(() => import("./MainAdmin.vue")),
    PageController: defineAsyncComponent(() => import("./PageController.vue")),
    SettingsController: defineAsyncComponent(() => import("./SettingsController.vue")),
  },
  computed: {
      currentComponent: function() {
          return this.current;
      }
  }
};
</script>

<style></style>
