<template>
  <div class="container mx-auto h-full flex flex-1 justify-center items-center">
    <div class="w-full max-w-xl">
      <div class="leading-loose">
        <div class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
          <div>
            <p class="text-gray-800 font-medium text-center text-lg">
              Добро пожаловать в VKRCMS!
            </p>
          </div>
          <div class="mt-2">
            <p class="text-gray-800 font-medium text-center text-lg">
              Для дальнейшей настройки необходимо
              <router-link class="underline hover:text-blue-800" to="/login">
                авторизироваться
              </router-link>
              или
              <router-link class="underline hover:text-blue-800" to="/signup">
                зарегистрироваться
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
