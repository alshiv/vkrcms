<template>
  <aside class="relative bg-gray-900 h-screen w-48 hidden sm:block shadow-xl">
    <nav class="text-white text-base font-semibold pt-3">
      <a
        v-for="link in links"
        :key="link"
        class="flex items-center active-nav-link text-white hover:text-gray-300 rounded-none py-4 pl-6 nav-item"
        :class="{ 'bg-gray-700 text-gray-300': link.active }"
        @click="loadFromLink(link)"
      >
        {{ link.name }}
      </a>
    </nav>
  </aside>
</template>

<script>
export default {
  props: {
    links: Array,
  },
  methods: {
    loadFromLink(link) {
      this.links.map((link) => {
        link.active = false;
      });
      link.active = true;
      this.$emit("loadComponent", {
        toMountComponent: link.componentName,
      });
    },
  },
};
</script>

<style></style>
