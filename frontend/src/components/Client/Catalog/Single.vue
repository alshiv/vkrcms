<template>
  <div class="lg:w-1/4 md:w-1/2 p-4 w-full" @click="openDetail">
    <a class="block relative h-48 rounded overflow-hidden">
      <img
        alt="ecommerce"
        class="object-cover object-center w-full h-full block"
        :src="element.image ? element.image : 'https://dummyimage.com/420x260'"
      />
    </a>
    <div class="mt-4">
      <h2 class="text-gray-900 title-font text-lg font-medium">
        {{ element.name }}
      </h2>
      <p class="mt-1">{{ element.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    element: Object,
  },
  data() {
    return {
    };
  },
  methods: {
    openDetail() {
      this.$emit("openDetail", { element: this.element });
    },
  },
};
</script>

<style></style>
