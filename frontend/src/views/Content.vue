<template>
  <component :is="currentTemplate" />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  data() {
    return {
      currentTemplate: "base-template",
    };
  },
  components: {
    BaseTemplate: defineAsyncComponent(() =>
      import("../templates/BaseTemplate.vue")
    ),
  },
};
</script>

<style></style>
