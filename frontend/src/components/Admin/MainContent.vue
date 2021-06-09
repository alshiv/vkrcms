<template>
  <main>
    <div>
      <component :is="currentComponent ? currentComponent : 'stats'" />
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
    Stats: defineAsyncComponent(() => import("./Stats.vue")),
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
