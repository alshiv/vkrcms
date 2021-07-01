<template>
  <div class="flex-auto">
    <container :elements="pageContent"  @updatedetail="updatedetail"/>
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
  methods: {
    updatedetail(value) {
      this.$emit('updateHeaderDetail', value);
    },
  },
  components: {
    Container: defineAsyncComponent(() => import('../../components/Client/Catalog/Container.vue')),
    PostsContainer: defineAsyncComponent(() => import('../../components/Client/Posts/PostsContainer.vue'))
  }
};
</script>

<style></style>
