<template>
  <div>
    <init-page v-if="init"/>
    <content v-if="logined || !init"/>
  </div>
</template>

<script>
import InitPage from '../components/InitPage.vue';
import Content from './Content.vue'

export default {
  data() {
    return {
      init: false,
      logined: false,
    };
  },
  created(){
    if (localStorage.getItem('token') !== null) {
      this.logined = true;
      this.init = false;
    }
  },
  components: {
    InitPage,
    Content //TODO: ASYNC COMPONENT WITH GET SETTINGS FROM BACKEND WHICH SET IT TO DB 
  }
};
</script>

<style></style>
