<template>
  <div class="flex">
    <side-bar :links="links" @loadComponent="mountCurrentComponent"></side-bar>
    <component
      class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
      :is="currentComponent ? currentComponent : 'add-element'"
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
          name: "Добавить элемент",
          active: true,
          componentName: "add-element",
        },
        {
          name: "Элементы",
          active: false,
          componentName: "element-edit",
        },
        {
          name: "Страницы",
          active: false,
          componentName: "page-edit",
        },
        // {
        //   name: "Заказы",
        //   active: false,
        //   componentName: "orders",
        // },
      ],
      currentComponent: "",
    };
  },
  components: {
    SideBar,
    AddElement: defineAsyncComponent(() => import("./AddElement.vue")),
    PageEdit: defineAsyncComponent(() => import("./PageEdit.vue")),
    ElementEdit: defineAsyncComponent(() => import("./ElementEdit.vue"))
  },
  methods: {
    mountCurrentComponent(data) {
      this.currentComponent = data.toMountComponent;
    },
  },
};
</script>

<style></style>
