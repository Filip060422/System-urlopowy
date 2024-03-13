<template>
    <h1>Ustaw nowe hasło</h1>
    <q-form action="/#/PasswordChanged">
        <LoginPasswordComponent :label="'Aktualne hasło'" style="margin-bottom: 5px;" />
        <LoginPasswordComponent :label="'Nowe hasło'" v-model="newPassword" :rules="rules2" />
        <p><span :class="{ 'hidden': !isVisible }">Twoje hasło jest bezpieczne i silne</span></p>
        <div class=" checkboxes ">
            <q-checkbox v-for=" (checkbox, index) in checkboxes" :key="index" v-model="checkbox.val"
                :label="checkbox.label" disable color="#703ada" dense class="checkbox" size="lg" />
        </div>
        <LoginPasswordComponent :label="'Potwierdź hasło'" v-model="confirmPassword"
            style="margin-top: 5px; margin-bottom: 10px;" :rules="rules" />
        <ButtonComponent @click="checkPasswords" :label="'ZMIEŃ HASŁO'" />
    </q-form>
</template>

<script setup>
import LoginPasswordComponent from 'src/components/login/LoginPasswordComponent.vue';
import ButtonComponent from 'src/components/shared/ButtonComponent.vue';

import { ref, watchEffect } from 'vue'

const val1 = ref(false);
const val2 = ref(false);
const val3 = ref(false);

const isVisible = ref(false);

const newPassword = ref('');
const confirmPassword = ref('');
const rules = ref([val => val && val.length > 0 || 'Proszę podać hasło']);
const rules2 = ref([val => val && val.length > 0 || 'Proszę podać hasło']);

watchEffect(() => {
    if (/(?=.{8,})/.test(newPassword.value)) {
        val1.value = true;
    } else {
        val1.value = false;
    }

    if (/(?=.*[#*!@?])/.test(newPassword.value)) {
        val2.value = true;
    } else {
        val2.value = false;
    }

    if (/(?=.*[A-Z])/.test(newPassword.value)) {
        val3.value = true;
    } else {
        val3.value = false;
    }

    if (/^(?=.*[A-Z])(?=.*[#*!@?])(?=.{8,}$)/.test(newPassword.value)) {
        isVisible.value = true
        rules2.value = ref(null);
    } else {
        isVisible.value = false;
        rules2.value = [val => val && val.length <= 0 || 'Spełnij wymogi hasła']
    }
})


const checkPasswords = () => {
    if (newPassword.value !== confirmPassword.value) {
        rules.value = [val => val && val.length <= 0 || 'Hasła nie są identyczne'];
    } else if (confirmPassword.value === '') {
        rules = ref([val => val && val.length > 0 || 'Proszę podać hasło']);
    } else {
        rules.value = []
    }
}

const checkboxes = ref([
    {
        label: 'Hasło zawiera 8 znaków',
        val: val1
    },
    {
        label: 'Jeden znak specjalny (np. #, *, @, !, ?)',
        val: val2
    },
    {
        label: 'Jedną dużą literę',
        val: val3
    }
])
</script>

<style lang="scss" scoped>
h1 {
    font: normal normal 600 28px/24px Poppins;
    padding: 0px 0 12px 0;
}

p {
    color: #33B600;
    font: normal normal 500 14px/21px Poppins;
    height: 21px;
}

.checkbox {
    margin-bottom: 10px;
}

.hidden {
    visibility: hidden;
}
</style>