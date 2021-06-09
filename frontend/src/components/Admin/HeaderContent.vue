<template>
  <nav class="bg-gray-800">
    <div class="smx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <router-link to="/admin" class="text-white font-bold text-xl p-4"
              >VKRCMS</router-link
            >
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                v-for="link in links"
                :key="link"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                :class="{ 'bg-gray-900 text-white': link.active }"
                @click="loadFromLink(link)"
              >
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button
                  class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu"
                  aria-haspopup="true"
                  @click="toogle"
                >
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://sun9-26.userapi.com/impg/ftTl6oEK2WT4SpkjHrJyTMe5RKAAaChQZ9wpkA/ACeslCAwO5s.jpg?size=605x708&quality=96&proxy=1&sign=fd5523ea1b2bd7b00c684538081b703e&type=album"
                    alt=""
                  />
                </button>
              </div>
              <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
                v-if="active"
              >
                <a
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  @click="logout"
                >
                  Выйти
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Статистика",
          active: true,
          componentName: 'stats'
        },
        {
          name: "Пользователи",
          active: false,
          componentName: 'users-controller'
        },
        {
          name: "Управление контентом",
          active: false,
          componentName: 'page-controller'
        },
        {
          name: "Настройки",
          active: false,
          componentName: 'settings-controller'
        }
      ],
      active: false,
    };
  },
  methods: {
    toogle(){
      this.active = !this.active
    },
    logout(){
      localStorage.clear();
      this.$router.push('/login');
    },
    loadFromLink(link) {
      this.links.map((link) => {
        link.active = false;
      });
      link.active = true;
      this.$emit('loadComponent', {
        toMountComponent: link.componentName
      })
    },
  },
};
</script>

<style>
nav a {
  cursor: pointer;
}
</style>
