<template>
  <router-view />
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  methods: {
    getDynamicRoutes(url) {
      axios
        .get(url)
        .then((res) => {
          this.processData(res.data.routes);
        })
        .catch((err) => console.log(err));
    },

    processData(data) {
      data.forEach(this.createAndAppendRoute);
    },

    createAndAppendRoute(route) {
      if (route.is_active) {
        let newRoute = {
          path: `/${route.name}`,
          component: route.component,
          name: `${route.name}`,
        };

        this.$router.addRoutes([newRoute]);
      } else {
        console.log("No routes");
      }
    },
  },

  created() {
    this.getDynamicRoutes("http://localhost:3001/routes");
  },
};
</script>
