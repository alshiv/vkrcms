<template>
  <div>
    <dash-board v-if="logined"></dash-board>
  </div>
</template>

<script>
import axios from "axios";
import DashBoard from "../components/Admin/DashBoard.vue";

export default {
  data() {
    return {
      logined: false
    }
  },
  components: { DashBoard },
  methods: {
    async checkPermission() {
      try {
        await axios
          .get("http://localhost:3001/admin", {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          })
          .then((res) => {
            console.log(res);
            this.logined = true;
          })
          .catch((err) => {
            console.log(err);
            this.logined = false;
            this.$router.push('/login');
          })
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.checkPermission();
  },
};
</script>

<style></style>
