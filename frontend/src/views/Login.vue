<template>
  <div class="bg-white font-family-karla h-screen">
    <div class="w-full flex flex-wrap">
      <!-- Login Section -->
      <div class="w-full md:w-1/2 flex flex-col">
        <div
          class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24"
        >
          <router-link to="/" class="bg-black text-white font-bold text-xl p-4"
            >VKRCMS</router-link
          >
        </div>

        <div
          class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
        >
          <p class="text-center text-3xl">Добро пожаловать.</p>
          <form
            class="flex flex-col pt-3 md:pt-8"
            @submit="login"
          >
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">Электронная почта</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                v-model="user.email"
              />
            </div>

            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg">Пароль</label>
              <input
                type="password"
                id="password"
                placeholder="******"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                v-model="user.password"
              />
            </div>

            <input
              type="submit"
              value="Войти"
              class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            />
          </form>
          <div class="text-center pt-12 pb-12">
            <p>
              У Вас нет аккаунта?
              <router-link to="/signup" class="underline font-semibold"
                >Регистрация</router-link
              >
            </p>
          </div>
        </div>
      </div>

      <!-- Image Section -->
      <div class="w-1/2 shadow-2xl">
        <img
          class="object-cover w-full h-screen hidden md:block"
          src="https://sun9-29.userapi.com/impf/c630722/v630722242/336d3/MME5yHtjFkM.jpg?size=2160x2160&quality=96&sign=b2101212963c915a152fc4701f524331&type=album"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  created() {
    if (localStorage.getItem("token") !== null) {
      this.$router.push('/');
    }
  },
  methods: {
    login(e) {
      e.preventDefault();
      let user = {
        email: this.user.email,
        password: this.user.password,
      };

      console.log(user.password)

      axios
        .post("http://localhost:3001/login", user)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.accessToken);
          this.$router.push("/admin");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
