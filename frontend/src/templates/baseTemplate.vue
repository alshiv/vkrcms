<template>
  <div>
    <!-- <component :is="firstComponent"/>
    <component :is="secondComponent"/>
    <component :is="thirdComponent"/> -->
    {{config}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      config: {},
      firstComponent: '',
      secondComponent: '',
      thirdComponent: ''
    };
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
          this.config = res.data.config;
        })
        .catch((err) => {
          console.lor(err);
        });
    },
  },
  created(){
    this.getComponents();
  },
};
</script>

<style></style>
