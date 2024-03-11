<template>
    <h1>Logowanie</h1>
            <q-form action="" @submit="onSubmit">
                <q-input class="input-margin" v-model="email" filled type="email" label="Adres e-mail" lazy-rules :rules="[ val => val && val.length > 0 || 'Proszę podać e-mail']"></q-input>
                <q-input class="input-margin" v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Hasło" lazy-rules :rules="[ val => val && val.length > 0 || 'Proszę podać hasło']">
                    <template v-slot:append>
                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" >
                </q-icon>
            </template>
          </q-input>
          <div class="flex justify-between items-center">
            <q-checkbox size="24px" v-model="val" color="black" class="checkbox">Zapamiętaj mnie</q-checkbox>
            <a href="#">Nie pamiętam hasła</a>
          </div>
          <q-btn label="ZALOGUJ SIĘ" type="submit" class="submit"/>
        </q-form>
</template>

<script setup>
    import { ref } from 'vue'
    const isPwd = ref(true);
    const email = ref('');
    const password = ref('');
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
  .submit {
    width: 100%;
    background-color: #703ADA;
    height: 60px;
    color: #FFFFFF;
    margin-top: 20px;
    font: normal normal 600 14px/16px Poppins;
    letter-spacing: 1.25px;
  }
  .checkbox {
    font: normal normal 600 10px/16px Poppins;
  }
  h1 {
    font: normal normal 600 28px/24px Poppins;
    padding: 48px 0 12px 0;
  }
  </style>