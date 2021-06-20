<template>
  <div class="flex-auto">
    <div v-if="isFirstPage">TAK</div>
    <div v-if="!isFirstPage">
      <container :elements="pageContent"/>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  props: {
    pageContent: Object
  },
  data() {
    return {};
  },
  components: {
    Container: defineAsyncComponent(() => import('../../components/Client/Catalog/Container.vue')),
    PostsContainer: defineAsyncComponent(() => import('../../components/Client/Posts/PostsContainer.vue'))
  },
  computed: {
    isFirstPage() {
      if (
        Object.keys(this.pageContent).length === 0 &&
        this.pageContent.constructor === Object
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
