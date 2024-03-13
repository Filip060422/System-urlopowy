<template>
  <h1>Logowanie</h1>
  <q-form action="/#/main">
    <LoginEmailComponent />
    <LoginPasswordComponent :label="'Hasło'" />
    <div class=" flex justify-between items-center">
      <q-checkbox size="24px" v-model="val" color="black" class="checkbox">Zapamiętaj mnie</q-checkbox>
      <a href="/#/forgotpassword">Nie pamiętam hasła</a>
    </div>
    <LoginButtonComponent :label="'Zaloguj się'" style="margin-top: 20px;" />
  </q-form>
</template>
<script setup>
import LoginButtonComponent from "src/components/shared/ButtonComponent.vue";
import LoginPasswordComponent from "src/components/login/LoginPasswordComponent.vue";
import LoginEmailComponent from "src/components/login/LoginEmailComponent.vue";
import { ref } from 'vue'
const val = ref(true);
</script>
<style scoped>
.input-margin {
  border-radius: 4px;
}

.input-margin:first-of-type {
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  font: normal normal 600 10px/16px Poppins;
  color: #703ADA;
}

.checkbox {
  font: normal normal 600 10px/16px Poppins;
}

h1 {
  font: normal normal 600 28px/24px Poppins;
  padding: 90px 0 12px 0;
}
</style>