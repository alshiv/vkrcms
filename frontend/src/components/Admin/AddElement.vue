<template>
  <div style="width: 100%">
    <form @submit="submit">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="col-span-6">
            <label for="picture" class="block text-sm font-medium text-gray-700"
              >Изображение</label
            >
            <input
              type="text"
              name="picture"
              id="picture"
              class="
                mt-1
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
                px-3
                py-2
              "
            />
          </div>
          <div class="col-span-6">
            <label for="heading" class="block text-sm font-medium text-gray-700"
              >Заголовок</label
            >
            <input
              type="text"
              name="heading"
              id="heading"
              class="
                mt-1
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
                px-3
                py-2
              "
            />
          </div>
          <div class="col-span-6">
            <label for="eltype" class="block text-sm font-medium text-gray-700"
              >Тип</label
            >
            <select
              id=""
              name="eltype"
              class="
                mt-1
                block
                w-full
                py-2
                px-3
                border border-gray-300
                bg-white
                rounded-md
                shadow-sm
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                sm:text-sm
              "
            >
              <option>Статья</option>
              <option>Товар</option>
            </select>
          </div>
          <div class="col-span-6">
            <label for="post" class="block text-sm font-medium text-gray-700"
              >Детальное описание</label
            >
            <tiptap/>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            class="
              inline-flex
              justify-center
              py-2
              px-4
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            Сохранить
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Tiptap from '../Base/Tiptap.vue';

export default {
  methods: {
    onSubmit(e) {
      e.preventDefault();
    },
  },
  components: {
    Tiptap
  }
};
</script>

<style></style>
