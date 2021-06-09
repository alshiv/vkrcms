<template>
  <div class="flex">
    <side-bar :links="links" @loadComponent="mountCurrentComponent"></side-bar>
    <component
      class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
      :is="currentComponent ? currentComponent : 'general-settings'"
    />
    общее - название, фавикон, почта, линки, телефон
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
          name: "Общее",
          active: true,
          componentName: "general-settings",
        },
        {
          name: "Шаблоны",
          active: false,
          componentName: "template-settings",
        },
        {
            name: "Экспорт/Импорт",
            active: false,
            componentName: "export-import"
        }
      ],
      currentComponent: '',
    };
  },
  components: {
    SideBar,
    GeneralSettings: defineAsyncComponent(() => import("./GeneralSettings.vue")),
    TemplateSettings: defineAsyncComponent(() => import("./TemplateSettings.vue")),
  },
  methods: {
    mountCurrentComponent(data) {
      this.currentComponent = data.toMountComponent;
    },
  },
};
</script>

<style></style>
