<template>
  <q-layout class="flex flex-center container">
    <div class="box flex">
      <LoginComponent />
      <div class="login">
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
    </div>
  </q-layout>
</template>

<script setup>
import LoginComponent from "src/components/login/LoginComponent.vue";
</script>

<style lang="scss" scoped>
.container {
  background-color: $background;
}

.box {
  width: 1200px;
  box-shadow: 1px 4px 21px -12px rgba(66, 68, 90, 1);
}

.login {
  width: 40%;
  background-color: #FFFFFF;
  border-radius: 0px 10px 10px 0px;
  padding: 20px 41px 40px 50px;
}
</style>