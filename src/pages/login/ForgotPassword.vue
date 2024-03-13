<template>
    <h1>Nie pamiętam hasła</h1>
    <q-form action="/#/ChangePassword">
        <LoginEmailComponent />
        <p>Na Twój adres e-mail wyślemy kod do zmiany hasła</p>
        <LoginButtonComponent :label="'WYŚLIJ'" />
    </q-form>
</template>

<script setup>
import LoginEmailComponent from "src/components/login/LoginEmailComponent.vue";
import LoginButtonComponent from "src/components/shared/ButtonComponent.vue";

</script>

<style lang="scss" scoped>
h1 {
    font: normal normal 600 28px/24px Poppins;
    padding: 115px 0 12px 0;
}

p {
    font: normal normal 600 12px/24px Poppins;
}
</style>