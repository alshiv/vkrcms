<template>
  <div>
    <header-content @loadComponent="mountCurrentComponent" />
    <main-content :current="currentComponent"/>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import HeaderContent from "./HeaderContent.vue";
import MainContent from "./MainContent.vue";

export default {
  data() {
    return {
      currentComponent: '',
    };
  },
  components: {
    SideBar: defineAsyncComponent(() => import("./SideBar.vue")),
    HeaderContent,
    MainContent,
  },
  methods: {
    mountCurrentComponent(data) {
      this.currentComponent = data.toMountComponent;
      console.log(this.currentComponent)
    },
  },
};
</script>

<style></style>
