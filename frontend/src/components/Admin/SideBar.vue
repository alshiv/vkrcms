<template>
  <aside class="relative bg-gray-800 h-screen w-64 hidden sm:block shadow-xl">
    <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
      <router-link to="/admin" class="bg-black text-white font-bold text-xl p-4"
        >VKRCMS</router-link
      >
    </div>
    <nav class="text-white text-base font-semibold pt-3">
      <button
        class="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
      >
        Dashboard
      </button>
    </nav>
  </aside>
</template>

<script>
export default {};
</script>

<style></style>
