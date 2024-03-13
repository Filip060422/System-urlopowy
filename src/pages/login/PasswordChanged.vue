<template>
    <h1>Hasło do Twojego konta zostało poprawnie zmienione</h1>
    <h2>Pamiętaj, aby przy następnym logowaniu wpisać nowe hasło.</h2>
    <q-form action="/#/">
        <ButtonComponent :label="'PRZEJDŹ DO LOGOWANIA'" />
    </q-form>
</template>

<script setup>
import ButtonComponent from 'src/components/shared/ButtonComponent.vue';
</script>

<style lang="scss" scoped>
h1 {
    font: normal normal 600 28px/34px Poppins;
    padding: 110px 0 15px 0;
}

h2 {
    font: normal normal 500 20px/34px Poppins;
    padding-bottom: 15px;
}
</style>