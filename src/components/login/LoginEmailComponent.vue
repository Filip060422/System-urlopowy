<template>
    <q-input class="input-margin" v-model="email" filled type="email" label="Adres e-mail" lazy-rules
        :rules="[val => val && val.length > 0 || 'Proszę podać e-mail']" color="black"></q-input>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('');
</script>

<style lang="scss" scoped></style>