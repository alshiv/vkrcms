<template>
  <div>
    <section class="text-gray-600 body-font" v-if="!isDetail">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <single
            v-for="element in elements"
            :key="element._id"
            :element="element"
            @openDetail="switchToDetail"
          />
        </div>
      </div>
    </section>
    <detail v-else :element="element"/>
  </div>
</template>

<script>
import Single from "./Single.vue";
import axios from "axios";
import {defineAsyncComponent} from 'vue';

export default {
  props: {
    elements: Array,
  },
  data() {
    return {
      isDetail: false,
      element: {}
    };
  },
  components: {
    Single,
    Detail: defineAsyncComponent(() => import("./Detail.vue"))
  },
  methods: {
    switchToDetail(data) {
      this.isDetail = !this.isDetail;
      this.element = data.element;
    },
  },
};
</script>

<style></style>
