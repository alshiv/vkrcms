<template>
  <header class="text-gray-600 body-font">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <a
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
        <span class="ml-3 text-xl">VKRCMS</span>
      </a>
      <nav
        class="
          md:mr-auto
          md:ml-4
          md:py-1
          md:pl-4
          md:border-l md:border-gray-400
          flex flex-wrap
          items-center
          text-base
          justify-center
        "
      >
        <a v-for="link in links" :key="link._id" class="mr-5 hover:text-gray-900" @click="pageSwitch(link)" :isDetail="isDetailActive"
          >{{link.name}}</a>
      </nav>
      <router-link
        v-if="user === '6034f2595ccaaf574845bb26'"
        class="
          inline-flex
          items-center
          bg-gray-100
          border-0
          py-1
          px-3
          focus:outline-none
          hover:bg-gray-200
          rounded
          text-base
          mt-4
          md:mt-0
        "
        to="/admin"
      >
        Панель администрирования
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </router-link>
    </div>
  </header>
</template>

<script>
import axios from "axios";

export default {
  props: {
    isDetail: Boolean
  },
  data() {
    return {
      user: localStorage.getItem("user_id"),
      links: []
    };
  },
  methods: {
    async getPages() {
      try {
        await axios
          .get("http://localhost:3001/pages")
          .then((res) => {
            console.log(res.data.data);
            this.links = res.data.data;
            this.pageSwitch(this.links[0]);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
    pageSwitch(link) {
      this.$emit("switchPage", {
        pageId: link._id,
        isDetail: false
      });
    },
    loadUserData() {
      try {
      } catch (err) {}
    },
  },
  computed: {
    isDetailActive: function() {
      return this.isDetail;
    }
  },
  created() {
    this.getPages();
  }
};
</script>

<style></style>
