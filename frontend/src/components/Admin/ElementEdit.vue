<template>
  <div class="flex flex-col" style="width: 100%">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Название
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Статус
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="post in posts" :key="post._id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ post.name }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="
                      px-2
                      inline-flex
                      text-xs
                      leading-5
                      font-semibold
                      rounded-full
                    "
                    :class="[
                      !post.is_active
                        ? 'bg-red-600 text-white'
                        : 'bg-green-100 text-green-800',
                    ]"
                  >
                    {{ post.is_active ? "Активен" : "Неактивен" }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <modal v-if="isActiveModal">
      <template v-slot:default>
        <!-- <form @submit.prevent="editPost">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
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
              <button
                type="button"
                class="
                  mt-3
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-gray-300
                  shadow-sm
                  px-4
                  py-2
                  bg-white
                  text-base
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  sm:mt-0
                  sm:ml-3
                  sm:w-auto
                  sm:text-sm
                "
                @click="closeModal"
              >
                Отмена
              </button>
            </div>
          </div>
        </form> -->
      </template>
    </modal>
  </div>
</template>

<script>
import axios from "axios";
import { defineAsyncComponent } from "vue";

export default {
  data() {
    return {
      posts: {},
      isActiveModal: false,
    };
  },
  components: {
    Modal: defineAsyncComponent(() => import("../Base/Modal.vue")),
  },
  methods: {
    async getPosts() {
      try {
        await axios
          .get("http://localhost:3001/posts")
          .then((res) => {
            console.log(res);
            this.posts = res.data.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
    async editPost() {
      try {
      } catch (err) {
        console.log(err);
      }
    },
    showModal() {
      this.isActiveModal = !this.isActiveModal;
    },
    closeModal() {
      this.isActiveModal = !this.isActiveModal;
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style></style>
