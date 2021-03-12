<template>
  <div class="flex flex-col">
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
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Имя пользователя
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Статус
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Роль
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Изменить</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="user in users" :key="user._id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://sun9-26.userapi.com/impg/ftTl6oEK2WT4SpkjHrJyTMe5RKAAaChQZ9wpkA/ACeslCAwO5s.jpg?size=605x708&quality=96&proxy=1&sign=fd5523ea1b2bd7b00c684538081b703e&type=album"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ user.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ user.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >
                    {{ user.is_active ? "Активен" : "Неактивен" }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ user.role }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <button
                    class="text-indigo-600 hover:text-indigo-900"
                    @click="showModal(user)"
                    >Изменить</button
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <modal v-if="isActiveModal">
      <template v-slot:default>
        <user-form :editingUser="editingUser" @closeModal="closeModal"/>
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
      users: {},
      isActiveModal: false,
      editingUser: {},
    };
  },
  components: {
    Modal: defineAsyncComponent(() => import("../Base/Modal.vue")),
    UserForm: defineAsyncComponent(() => import("./UserForm.vue")),
  },
  methods: {
    async getUsers() {
      try {
        await axios
          .get("http://localhost:3001/users", {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          })
          .then((res) => {
            console.log(res);
            this.users = res.data.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
    showModal(user) {
      this.isActiveModal = !this.isActiveModal;
      this.editingUser = user;
    },
    closeModal() {
      this.isActiveModal = !this.isActiveModal;
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<style></style>
