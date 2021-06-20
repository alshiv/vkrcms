<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          class="
            lg:w-1/2
            w-full
            lg:h-auto
            h-64
            object-cover object-center
            rounded
          "
          src="https://dummyimage.com/400x400"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
            {{ element.name }}
          </h1>
          <p class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none leading-relaxed pb-5 border-b-2 border-gray-100 mb-5" v-html="element.detail"/>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">{{
              element.price
            }}</span>
            <button
              class="
                flex
                ml-auto
                text-white
                bg-blue-500
                border-0
                py-2
                px-6
                focus:outline-none
                hover:bg-blue-600
                rounded
              "
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    element: Object,
  },
  methods: {
  },
};
</script>

<style></style>
