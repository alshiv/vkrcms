<template>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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
    UsersTable: defineAsyncComponent(() => import("./UsersTable.vue")),
    Stats: defineAsyncComponent(() => import("./Stats.vue")),
  },
  computed: {
      currentComponent: function() {
          return this.current;
      }
  }
};
</script>

<style></style>
