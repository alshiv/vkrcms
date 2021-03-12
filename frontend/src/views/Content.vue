<template>
  <component :is="currentTemplate"/>
</template>

<script>
import { defineAsyncComponent } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      currentTemplate: "base-template",
      config: {},
    };
  },
  components: {
    baseTemplate: defineAsyncComponent(() =>
      import("../templates/baseTemplate.vue")
    ),
  },
  created() {
    axios
      .get("http://localhost:3001/config")
      .then((res) => {
        this.config = res.data.config;
      })
      .catch((err) => {
        console.lor(err);
      });
  },
};
</script>

<style></style>
