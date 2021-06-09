<template>
  <form @submit="updateUser">
    <div class="shadow sm:rounded-md sm:overflow-hidden">
      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div class="col-span-6">
          <label for="username" class="block text-sm font-medium text-gray-700"
            >Имя пользователя</label
          >
          <input
            type="text"
            name="username"
            id="username"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2"
            v-model="user.name"
          />
        </div>
        <div class="col-span-6">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Электронная почта</label
          >
          <input
            type="text"
            name="email"
            id="email"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2"
            v-model="user.email"
          />
        </div>
        <div class="col-span-6">
          <label for="status" class="block text-sm font-medium text-gray-700"
            >Статус</label
          >
          <input
            type="checkbox"
            name="status"
            id="status"
            v-model="user.is_active"
          />
          <span
            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
            :class="[!user.is_active ? 'bg-red-600 text-white': 'bg-green-100 text-green-800']"
          >
            {{ user.is_active ? "Активен" : "Неактивен" }}
          </span>
        </div>
        <div class="col-span-6">
          <label for="userrole" class="block text-sm font-medium text-gray-700"
            >Роль</label
          >
          <select
            id="userrole"
            name="userrole"
            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            v-model="user.role"
          >
            <option>admin</option>
            <option>basic</option>
            <option>supervisor</option>
          </select>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Сохранить
        </button>
        <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            @click="close"
          >
            Отмена
          </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  props: {
    editingUser: Object,
  },
  data() {
    return {
      user: this.editingUser,
    };
  },
  methods: {
    updateUser(e) {
      e.preventDefault();
      let newUserData = this.user;

      axios
        .put(`http://localhost:3001/user/${newUserData._id}`, newUserData, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          this.$emit('closeModal');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    close(e) {
      e.preventDefault();
      this.$emit('closeModal');
    }
  },
};
</script>

<style></style>
