<template>
    <h1>Zmiana hasła</h1>
    <LoginEmailComponent />
    <p>Na Twój adres e-mail wyślemy kod do zmiany hasła</p>
    <p>Wpisz przesłany kod poniżej:</p>
    <h2>Kod</h2>
    <q-form action="/#/newpassword" @submit="onSubmit">
        <div class="code-boxes flex justify-between">
            <q-input v-for="(input, index) in inputs" :key="index" class="code-box flex items-center" outlined
                v-model="input.text" mask="#" input-style="text-align: center"></q-input>
        </div>
        <q-btn flat style="color: #703ada; margin-top: 30px; padding: 0; font: normal normal 600 14px/21px Poppins;">KOD
            NIE
            DOTARŁ? WYŚLIJ PONOWNIE</q-btn>
        <div class="flex justify-end">
            <ButtonComponent :label="'Weryfikuj'"
                style="width: 110px; height: 40px; letter-spacing: 0; text-transform: none; font: normal normal 600 14px/16px Poppins;" />
        </div>
    </q-form>
</template>

<script setup>
import LoginEmailComponent from "src/components/login/LoginEmailComponent.vue";
import ButtonComponent from "src/components/shared/ButtonComponent.vue";

import { ref } from 'vue'

const inputs = ref([
    { text: '' },
    { text: '' },
    { text: '' },
    { text: '' }
])
</script>

<style lang="scss" scoped>
h1 {
    font: normal normal 600 28px/24px Poppins;
    padding: 85px 0 12px 0;
}

p {
    font: normal normal 600 12px/24px Poppins;
}

h2 {
    font: normal normal 600 12px/24px Poppins;
    letter-spacing: 0px;
    color: #212121;
}

.code-box {
    width: 68px;
    max-height: 40px;
    text-align: center;
}
</style>