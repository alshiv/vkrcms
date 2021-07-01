<template>
  <div class="flex flex-col h-screen">
    <component :is="config.Header" @switchPage="switchPage" v-model="isDetail"/>
    <component :is="config.Main" :pageContent="pageContent" @updateHeaderDetail="updateHeaderDetail"/>
    <component :is="config.Footer" />
  </div>
</template>

<script>
import axios from "axios";
import { defineAsyncComponent } from "vue";

export default {
  data() {
    return {
      config: {},
      pageContent: [],
      isDetail: false
    };
  },
  components: {
    DefaultHeader: defineAsyncComponent(() =>
      import("./default/DefaultHeader.vue")
    ),
    DefaultMain: defineAsyncComponent(() =>
      import("./default/DefaultMain.vue")
    ),
    DefaultFooter: defineAsyncComponent(() =>
      import("./default/DefaultFooter.vue")
    ),
  },
  methods: {
    kebabize(str) {
      return str
        .split("")
        .map((letter, idx) => {
          return letter.toUpperCase() === letter
            ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
            : letter;
        })
        .join("");
    },
    getComponents() {
      axios
        .get("http://localhost:3001/config")
        .then((res) => {
          for (var key in res.data.config.components) {
            Object.assign(this.config, {
              [key]: this.kebabize(res.data.config.components[key]),
            });
          }
          console.log(this.config);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async switchPage(data) {
      try {
        await axios
          .get(`http://localhost:3001/posts/${data.pageId}`)
          .then((res) => {
            console.log(res);
            this.isDetail = false;
            this.pageContent = res.data.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
    updateHeaderDetail(value) {
      this.isDetail = value;
    }
  },
  created() {
    this.getComponents();
  },
};
</script>

<style></style>
