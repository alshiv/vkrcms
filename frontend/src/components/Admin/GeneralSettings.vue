<template>
  <form
    @submit.prevent="onSubmit"
    enctype="multipart/form-data"
    style="width: 100%"
  >
    <div style="width: 100%">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="col-span-6">
            <label for="system" class="block text-sm font-medium text-gray-700"
              >Название системы</label
            >
            <input
              type="text"
              name="sytem"
              id="system"
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
              v-model="system"
            />
          </div>
          <div class="col-span-6">
            <div style="display: flex; align-items: center;">
              <label
                for="picture"
                class="block text-sm font-medium text-gray-700"
                >Логотип</label
              ><span>&nbsp;&nbsp;</span><a
                class="
                  flex
                  title-font
                  font-medium
                  items-center
                  text-gray-900
                  mb-4
                  md:mb-0
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  ></path>
                </svg>
              </a>
            </div>
            <input
              type="file"
              ref="file"
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
            <label for="mail" class="block text-sm font-medium text-gray-700"
              >Электронная почта для связи</label
            >
            <input
              type="email"
              name="mail"
              id="mail"
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
              v-model="mail"
            />
          </div>
          <div class="col-span-6">
            <label for="phone" class="block text-sm font-medium text-gray-700"
              >Телефон</label
            >
            <input
              type="text"
              name="phone"
              id="phone"
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
              v-model="phone"
            />
          </div>
        </div>
        <!-- <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
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
        </div> -->
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      phone: "+7 (923) 199-99-99",
      system: "VKRCMS",
      mail: "vkrcms@test.ru",
      icon: "http:/localhost:3000/dist/favicon.ico",
    };
  },
};
</script>

<style></style>
